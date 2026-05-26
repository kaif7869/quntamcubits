"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "../../lib/data";

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-card"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_290px] lg:items-center">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-3">
                {Array.from({ length: testimonials[active].rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 text-cyan-300" />
                ))}
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-100">&quot;{testimonials[active].quote}&quot;</p>
            </div>
            <div className="flex w-full min-w-0 items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
              <Image
                src={testimonials[active].avatar}
                alt={`${testimonials[active].name} avatar`}
                width={56}
                height={56}
                className="h-14 w-14 flex-none rounded-2xl object-cover"
              />
              <div className="min-w-0">
                <p className="break-words font-semibold leading-5 text-white">{testimonials[active].name}</p>
                <p className="text-sm text-slate-400">{testimonials[active].role}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show testimonial ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${index === active ? "bg-cyan-300" : "bg-white/20"}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}
