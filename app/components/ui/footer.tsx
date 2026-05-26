import Link from "next/link";
import { socialLinks } from "../../lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 px-5 py-14 text-slate-300 backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-3 text-lg font-semibold text-white">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">Q</div>
            QuntamCubits
          </div>
          <p className="text-sm leading-7 text-slate-400">
            We design, build, and support premium digital products for startups and enterprises that need a futuristic edge.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/" className="transition hover:text-white">Home</Link></li>
              <li><Link href="/services" className="transition hover:text-white">Services</Link></li>
              <li><Link href="/portfolio" className="transition hover:text-white">Portfolio</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">Services</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/services" className="transition hover:text-white">Software</Link></li>
              <li><Link href="/services" className="transition hover:text-white">AI Chatbots</Link></li>
              <li><Link href="/services" className="transition hover:text-white">Cloud</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">Follow</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/30 hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} QuntamCubits. Crafted for modern product teams.
      </div>
    </footer>
  );
}
