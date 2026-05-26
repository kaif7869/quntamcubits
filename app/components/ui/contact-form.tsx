"use client";

import React, { useState } from "react";
import { Button } from "./button";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const contactEmail = "quntamcubits@protonmail.com";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          message: form.message,
          _subject: `New contact request from ${form.name}`,
          _template: "table",
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Could not send the request. Please try again.");
      }

      setForm({ name: "", email: "", phone: "", message: "" });
      setStatus("sent");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Could not send the request. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-card backdrop-blur-xl">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200">
          <span>Name</span>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50" />
        </label>
        <label className="space-y-2 text-sm text-slate-200">
          <span>Email</span>
          <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50" />
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-200">
        <span>Phone</span>
        <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50" />
      </label>
      <label className="space-y-2 text-sm text-slate-200">
        <span>Project Requirement</span>
        <textarea name="message" value={form.message} onChange={handleChange} rows={5} required className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-4 text-sm text-white outline-none transition focus:border-cyan-400/50" />
      </label>
      {status === "sent" && <p className="text-sm text-cyan-200">Request sent. We will reply soon.</p>}
      {status === "error" && <p className="text-sm text-rose-300">{errorMessage}</p>}
      <Button type="submit" disabled={status === "sending"} className="w-full justify-center">
        {status === "sending" ? "Sending..." : status === "sent" ? "Request Sent" : "Send Request"}
      </Button>
    </form>
  );
}
