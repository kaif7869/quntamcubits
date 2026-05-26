import { Footer } from "../components/ui/footer";
import { Navbar } from "../components/ui/navbar";
import { SectionHeading } from "../components/ui/section-heading";
import { ServiceCard } from "../components/ui/service-card";
import { services } from "../lib/data";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          subtitle="Services"
          title="Strategic software services for bold digital products"
          description="From product discovery to full-stack implementation, we deliver modern SaaS, mobile, and AI solutions that scale."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <section className="mt-20 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-card backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Why choose us</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">An experienced partner for every stage of your product journey.</h2>
              <p className="mt-6 max-w-xl text-slate-300">We combine deep technical expertise with user-focused design and cloud-first architecture to launch products that feel premium and perform reliably.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Rapid prototypes",
                "AI-enabled automation",
                "Secure infrastructure",
                "Design systems",
              ].map((item) => (
                <div key={item} className="rounded-3xl bg-white/5 p-6 text-slate-200">
                  <p className="font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
