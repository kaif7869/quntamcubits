import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const contactRecipient = process.env.CONTACT_TO_EMAIL ?? "quntamcubits@protonmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = payload.name?.trim();
    const email = payload.email?.trim();
    const phone = payload.phone?.trim();
    const message = payload.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS?.replace(/\s/g, "");
    const smtpFrom = process.env.SMTP_FROM ?? smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      return NextResponse.json(
        { error: "Email service is missing SMTP_HOST, SMTP_USER, SMTP_PASS, or SMTP_FROM." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 10000,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: smtpFrom,
      to: contactRecipient,
      replyTo: email,
      subject: `New contact request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        "Project Requirement:",
        message,
      ].join("\n"),
      html: `
        <h2>New contact request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Project Requirement:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    const detail = error instanceof Error ? error.message : "Unknown email error";
    const isBadCredentials =
      detail.includes("535") ||
      detail.toLowerCase().includes("username and password not accepted") ||
      detail.toLowerCase().includes("badcredentials");

    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "production"
            ? "Could not send your message right now. Please contact us directly at quntamcubits@protonmail.com."
            : isBadCredentials
              ? "Could not send email: Gmail rejected SMTP_USER or SMTP_PASS. Generate a new Gmail App Password, put it in .env.local, then restart npm run dev."
            : `Could not send email: ${detail}`,
      },
      { status: 500 },
    );
  }
}
