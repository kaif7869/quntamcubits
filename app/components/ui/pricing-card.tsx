"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "./card";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export function PricingCard({ name, price, description, features, highlighted }: PricingCardProps) {
  const planSlug = name.toLowerCase();

  return (
    <motion.div whileHover={{ y: -10 }} className="group">
      <Card className={`border-white/10 ${highlighted ? "border-cyan-300/30 bg-cyan-400/10 shadow-glow" : "bg-slate-950/70"}`}>
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-lg font-semibold text-white">{name}</p>
            <p className="mt-1 text-sm text-slate-400">{description}</p>
          </div>
          {highlighted ? <div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">Popular</div> : null}
        </div>
        <p className="text-5xl font-semibold text-white">{price}</p>
        <ul className="mt-6 space-y-3 text-sm text-slate-300">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href={`/estimation?plan=${planSlug}`} className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20">
          Choose plan
        </Link>
      </Card>
    </motion.div>
  );
}
