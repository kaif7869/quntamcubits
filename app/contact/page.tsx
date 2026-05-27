import type { Metadata } from "next";
import { ContactForm } from "../components/ui/contact-form";
import { Footer } from "../components/ui/footer";
import { Navbar } from "../components/ui/navbar";
import { SectionHeading } from "../components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact Quntam Cubits",
  description:
    "Contact Quntam Cubits in Belgaum for website development, mobile apps, custom software, AI chatbot development, UI/UX design, and cloud projects.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          subtitle="Contact"
          title="Start your next product with a premium development partner"
          description="Tell us about your goals, timing, and technical needs, and we’ll respond with a clear plan for launch."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
          <div className="space-y-8 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-card backdrop-blur-xl">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Reach out</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Let’s turn your idea into a scalable digital product.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 p-6">
                <p className="text-sm text-slate-400">Headquarters</p>
                <p className="mt-3 text-white">Karnataka, Belagavi</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-6">
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-3 text-white">quntamcubits@protonmail.com</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-6">
                <p className="text-sm text-slate-400">Phone Number</p>
                <p className="mt-3 text-white">+91 6362196902</p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-slate-900/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Map</p>
              <iframe
                title="Belagavi Police Headquarters map"
                src="https://www.google.com/maps?q=BELAGAVI%20POLICE%20HEADQUARTERS%2C%20VGC8%2BJVM%2C%20Subhash%20Nagar%2C%20Belagavi%2C%20Karnataka%20590016&output=embed"
                className="mt-4 h-72 w-full rounded-3xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
