"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "../../lib/data";
import { cn } from "../../lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
          <Image
            src="/logo/companylogo1.png"
            alt="QuntamCubits logo"
            width={72}
            height={72}
            quality={100}
            sizes="36px"
            className="h-12 w-12 object-contain"
            priority
          />
          QuntamCubits
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative py-2 text-sm font-medium text-slate-300 transition hover:text-white",
                  "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-cyan-300 after:transition-transform",
                  isActive && "text-cyan-300 after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:border-cyan-400/30 hover:bg-white/10">
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-400/30 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-base text-slate-200 transition hover:bg-white/10",
                    isActive && "border-cyan-300/30 bg-cyan-400/10 text-cyan-300"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}
