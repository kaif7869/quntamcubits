import type { Metadata } from "next";
import { Footer } from "../components/ui/footer";
import { Navbar } from "../components/ui/navbar";
import { ProjectCard } from "../components/ui/project-card";
import { SectionHeading } from "../components/ui/section-heading";
import { projects } from "../lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Quntam Cubits projects across websites, mobile apps, enterprise software, dashboards, ecommerce platforms, and AI products.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          subtitle="Portfolio"
          title="Showcasing premium digital experiences and platform design"
          description="Explore selected work from websites, mobile apps, enterprise systems, and AI-powered products."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <section className="mt-20 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-card backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Featured work</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">From strategy to product launch, our builds stand out.</h2>
              <p className="mt-6 max-w-xl text-slate-300">Every project is treated like a flagship release: strong brand, smooth interactions, and optimized launch infrastructure.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 p-6 text-slate-200">Interactive dashboards with real-time insights.</div>
              <div className="rounded-3xl bg-white/5 p-6 text-slate-200">Mobile experiences with seamless motion and accessibility.</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
