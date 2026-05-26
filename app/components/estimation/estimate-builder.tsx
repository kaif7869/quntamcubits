"use client";

import { ArrowRight, Check, Clock, IndianRupee, Layers, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { pricingPlans } from "../../lib/data";

type EstimateBuilderProps = {
  selectedPlan: string;
};

type PlanKey = "starter" | "professional" | "enterprise";

const planDetails: Record<PlanKey, { basePrice: number | null; timeline: string; deliverables: string[] }> = {
  starter: {
    basePrice: 22000,
    timeline: "2-3 weeks",
    deliverables: ["Discovery call", "Responsive website", "Basic SEO", "Contact form", "Launch support"],
  },
  professional: {
    basePrice: 55000,
    timeline: "5-8 weeks",
    deliverables: ["Product planning", "Dynamic website or app", "Admin dashboard", "Database setup", "Cloud deployment"],
  },
  enterprise: {
    basePrice: null,
    timeline: "Custom roadmap",
    deliverables: ["Architecture planning", "Custom software modules", "API integrations", "Scalable cloud setup", "Dedicated support"],
  },
};

const complexityOptions = [
  { label: "Essential", multiplier: 1, timeline: 0 },
  { label: "Advanced", multiplier: 1.35, timeline: 2 },
  { label: "Premium", multiplier: 1.75, timeline: 4 },
];

const addOns = [
  { label: "Brand identity kit", price: 12000, weeks: 1 },
  { label: "Payment gateway", price: 10000, weeks: 1 },
  { label: "Booking or lead CRM", price: 15000, weeks: 2 },
  { label: "AI chatbot", price: 18000, weeks: 2 },
  { label: "Analytics dashboard", price: 22000, weeks: 3 },
  { label: "Maintenance retainer", price: 8000, weeks: 0 },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export function EstimateBuilder({ selectedPlan }: EstimateBuilderProps) {
  const initialPlan = selectedPlan in planDetails ? (selectedPlan as PlanKey) : "professional";
  const [planKey, setPlanKey] = useState<PlanKey>(initialPlan);
  const [complexityIndex, setComplexityIndex] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const activePlan = pricingPlans.find((plan) => plan.name.toLowerCase() === planKey) ?? pricingPlans[1];
  const detail = planDetails[planKey];
  const complexity = complexityOptions[complexityIndex];

  const estimate = useMemo(() => {
    const addOnTotal = addOns
      .filter((item) => selectedAddOns.includes(item.label))
      .reduce((total, item) => total + item.price, 0);
    const addOnWeeks = addOns
      .filter((item) => selectedAddOns.includes(item.label))
      .reduce((total, item) => total + item.weeks, 0);

    if (detail.basePrice === null) {
      return {
        total: null,
        addOnTotal,
        timeline: detail.timeline,
      };
    }

    return {
      total: Math.round(detail.basePrice * complexity.multiplier + addOnTotal),
      addOnTotal,
      timeline: `${Math.max(2, complexity.timeline + addOnWeeks + (planKey === "starter" ? 2 : 5))}-${Math.max(3, complexity.timeline + addOnWeeks + (planKey === "starter" ? 3 : 8))} weeks`,
    };
  }, [complexity.multiplier, complexity.timeline, detail.basePrice, detail.timeline, planKey, selectedAddOns]);

  const toggleAddOn = (label: string) => {
    setSelectedAddOns((current) =>
      current.includes(label) ? current.filter((item) => item !== label) : [...current, label]
    );
  };

  const contactHref = `/contact?plan=${encodeURIComponent(activePlan.name)}&estimate=${encodeURIComponent(estimate.total ? formatCurrency(estimate.total) : "Custom")}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <aside className="space-y-6 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-card backdrop-blur-xl">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Selected plan</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">{activePlan.name}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">{activePlan.description}</p>
        </div>

        <div className="grid gap-3">
          {(Object.keys(planDetails) as PlanKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setPlanKey(key)}
              className={`rounded-3xl border px-5 py-4 text-left transition ${planKey === key ? "border-cyan-300/40 bg-cyan-400/10 text-cyan-200" : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/30"}`}
            >
              <span className="block text-sm font-semibold capitalize">{key}</span>
              <span className="mt-1 block text-xs text-slate-400">{planDetails[key].basePrice ? `Starts at ${formatCurrency(planDetails[key].basePrice)}` : "Custom estimate"}</span>
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-3xl bg-white/5 p-5">
            <IndianRupee className="h-5 w-5 text-cyan-300" />
            <p className="mt-3 text-sm text-slate-400">Estimated cost</p>
            <p className="mt-1 text-2xl font-semibold text-white">{estimate.total ? formatCurrency(estimate.total) : "Custom"}</p>
          </div>
          <div className="rounded-3xl bg-white/5 p-5">
            <Clock className="h-5 w-5 text-cyan-300" />
            <p className="mt-3 text-sm text-slate-400">Timeline</p>
            <p className="mt-1 text-2xl font-semibold text-white">{estimate.timeline}</p>
          </div>
          <div className="rounded-3xl bg-white/5 p-5">
            <ShieldCheck className="h-5 w-5 text-cyan-300" />
            <p className="mt-3 text-sm text-slate-400">Support</p>
            <p className="mt-1 text-2xl font-semibold text-white">{planKey === "starter" ? "1 month" : planKey === "professional" ? "3 months" : "Dedicated"}</p>
          </div>
        </div>
      </aside>

      <section className="space-y-6">
        <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-card backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Scope level</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Project complexity</h3>
            </div>
            <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
              {complexityOptions.map((option, index) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setComplexityIndex(index)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${complexityIndex === index ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:text-white"}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {activePlan.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-3xl bg-white/5 p-4 text-sm text-slate-200">
                <Check className="h-4 w-4 shrink-0 text-cyan-300" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-card backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Layers className="h-5 w-5 text-cyan-300" />
            <h3 className="text-2xl font-semibold text-white">Add-ons</h3>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {addOns.map((item) => (
              <label key={item.label} className="flex cursor-pointer items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/30">
                <input
                  type="checkbox"
                  checked={selectedAddOns.includes(item.label)}
                  onChange={() => toggleAddOn(item.label)}
                  className="mt-1 h-4 w-4 accent-cyan-300"
                />
                <span>
                  <span className="block text-sm font-semibold text-white">{item.label}</span>
                  <span className="mt-1 block text-xs text-slate-400">+ {formatCurrency(item.price)}{item.weeks ? `, +${item.weeks} week${item.weeks > 1 ? "s" : ""}` : ""}</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-cyan-300/20 bg-cyan-400/10 p-8 shadow-glow">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Estimate summary</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">{estimate.total ? formatCurrency(estimate.total) : "Custom pricing"} for {activePlan.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Timeline: {estimate.timeline}. Add-ons selected: {selectedAddOns.length ? selectedAddOns.join(", ") : "None"}.
              </p>
            </div>
            <Link href={contactHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]">
              Request final quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
