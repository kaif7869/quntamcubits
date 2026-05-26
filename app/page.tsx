"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./components/ui/contact-form";
import { Footer } from "./components/ui/footer";
import { Navbar } from "./components/ui/navbar";
import { PricingCard } from "./components/ui/pricing-card";
import { ProjectCard } from "./components/ui/project-card";
import { SectionHeading } from "./components/ui/section-heading";
import { ServiceCard } from "./components/ui/service-card";
import { TestimonialCarousel } from "./components/ui/testimonial-carousel";
import { pricingPlans, projects, services } from "./lib/data";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-24 px-5 pb-24 pt-10 sm:px-8 lg:px-12">
        <section className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-hero p-8 shadow-glow sm:p-12 lg:p-16">
          <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_46%),radial-gradient(circle_at_20%_20%,_rgba(124,58,237,0.18),_transparent_24%)]" />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl">
                Futuristic software design for ambitious teams
              </span>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-6xl">
                Transforming Ideas Into Digital Reality
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                QuntamCubits builds powerful websites, scalable apps, and smart software solutions for modern businesses that want premium speed, security, and impact.
              </motion.p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]">
                  Get Started
                </a>
                <a href="https://my-portfoliomdkaif.vercel.app/" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/10">
                  View Portfolio
                </a>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/5 p-5 text-center backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">50+</p>
                  <p className="mt-2 text-sm text-slate-400">Projects delivered</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5 text-center backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">20+</p>
                  <p className="mt-2 text-sm text-slate-400">Global clients</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5 text-center backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">99%</p>
                  <p className="mt-2 text-sm text-slate-400">Client satisfaction</p>
                </div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-card backdrop-blur-xl sm:p-10">
              <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute -right-8 bottom-16 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="relative grid gap-6">
                <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
                  <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                    <span>QuntamCubits Studio</span>
                    <span className="rounded-full bg-white/5 px-3 py-1">Live</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Dashboard preview</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Accelerated product sprints, analytics intelligence, and user journeys built to convert.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Conversion rate</p>
                    <p className="mt-4 text-3xl font-semibold text-white">21.8%</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-violet-300/80">Active clients</p>
                    <p className="mt-4 text-3xl font-semibold text-white">18</p>
                  </div>
                </div>
                <div className="rounded-[2rem] bg-slate-900/80 p-5">
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                  </div>
                  <div className="mt-4 flex justify-between text-sm text-slate-400">
                    <span>Performance</span>
                    <span>82%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            subtitle="Services"
            title="Premium digital services for modern products"
            description="Glassmorphism cards, animated accents, and service modules built for the next generation of SaaS and enterprise solutions."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            subtitle="Portfolio"
            title="Recent projects built with speed and polish"
            description="Responsive product showcases, app experiences, and enterprise portals that highlight our creative and technical craft."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="text-center">
            <a href="/portfolio" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/10">
              Explore full portfolio
            </a>
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            subtitle="Process"
            title="Our development rhythm from concept to launch"
            description="A step-by-step journey with thoughtful planning, design, engineering, testing, and long-term support."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { step: "Requirement Analysis", label: "Discover goals and user journeys." },
              { step: "UI/UX Design", label: "Craft product interfaces with motion and brand." },
              { step: "Development", label: "Build reliable codebases with modern stacks." },
              { step: "Testing", label: "Validate quality on web, mobile, and security." },
              { step: "Deployment", label: "Launch performance-optimized production environments." },
              { step: "Support", label: "Maintain, improve, and evolve with your team." },
            ].map((item) => (
              <motion.div key={item.step} whileHover={{ y: -8 }} className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-card backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">{item.step}</p>
                <p className="mt-4 text-lg font-semibold text-white">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <SectionHeading
              subtitle="Testimonials"
              title="Clients who trust QuntamCubits for real product growth"
              description="Smooth auto-rotating feedback from product leaders who depend on our team for launch-ready software and digital ecosystems."
            />
            <TestimonialCarousel />
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-card backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Ready to build a breakthrough product?</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">Tell us about your project, and we’ll map the fastest path from idea to launch.</p>
            <a href="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20">
              Start a project
            </a>
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading subtitle="Pricing" title="Flexible plans for ambitious product teams" description="Choose a scalable package with the right mix of design, engineering, and launch support." />
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading subtitle="Contact" title="Let’s shape your next digital product" description="Share your requirements and we’ll follow up with a tailored implementation plan." />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.8fr]">
            <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-card backdrop-blur-xl">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Contact</p>
                <h3 className="text-2xl font-semibold text-white">Ready to partner with a futuristic software team?</h3>
                <p className="text-sm leading-7 text-slate-300">Use the form to describe your project, and we’ll craft a fast, custom quote with UX concepts, engineering milestones, and launch flow.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/70 p-6">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-2 text-white">quntamcubits@protonmail.com</p>
                </div>
                <div className="rounded-3xl bg-slate-900/70 p-6">
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="mt-2 text-white">+91 6362196902</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
