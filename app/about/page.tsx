import type { Metadata } from "next";
import { Footer } from "../components/ui/footer";
import { Navbar } from "../components/ui/navbar";
import { SectionHeading } from "../components/ui/section-heading";
import { StatsCounter } from "../components/ui/stats-counter";

export const metadata: Metadata = {
  title: "About Quntam Cubits",
  description:
    "Learn about Quntam Cubits, a Belgaum-based IT company creating websites, mobile apps, custom software, AI chatbots, and cloud-ready digital products.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          subtitle="About"
          title="A futuristic software team built for modern founders"
          description="QuntamCubits brings together design, engineering, and product strategy under one premium studio roof."
        />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
          <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-card backdrop-blur-xl">
            <p className="text-lg leading-8 text-slate-300">
              We partner with ambitious teams to build web apps, mobile products, and custom SaaS systems. Our process blends elegant interface design with resilient engineering and cloud-native infrastructure.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Mission</p>
                <p className="mt-3 text-slate-200">Create high-impact digital experiences that feel premium, perform seamlessly, and scale with confidence.</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Vision</p>
                <p className="mt-3 text-slate-200">Be the go-to partner for startups and enterprises who need next-level products and polished software operations.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { value: "20+", label: "Projects" },
              { value: "4+", label: "Clients" },
              { value: "99%", label: "Satisfaction" },
            ].map((item) => (
              <StatsCounter key={item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </div>

        <section className="mt-20 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-card backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Team culture</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Design systems, engineering rituals, and customer collaboration.</h2>
              <p className="mt-6 text-slate-300">We run lean, maintain strong product rhythms, and keep our clients close to every release milestone.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 p-6 text-slate-200">Cross-disciplinary squads for speed and consistency.</div>
              <div className="rounded-3xl bg-white/5 p-6 text-slate-200">Proactive monitoring and improvement after launch.</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
