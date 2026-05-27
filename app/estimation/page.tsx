import type { Metadata } from "next";
import { Suspense } from "react";
import { EstimateBuilder } from "../components/estimation/estimate-builder";
import { Footer } from "../components/ui/footer";
import { Navbar } from "../components/ui/navbar";
import { SectionHeading } from "../components/ui/section-heading";

export const metadata: Metadata = {
  title: "Project Estimation",
  description:
    "Estimate a website, mobile app, software, chatbot, UI/UX, or cloud project with Quntam Cubits before requesting a final quote.",
  alternates: {
    canonical: "/estimation",
  },
};

type EstimationPageProps = {
  searchParams: Promise<{
    plan?: string;
  }>;
};

export default async function EstimationPage({ searchParams }: EstimationPageProps) {
  const params = await searchParams;

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          subtitle="Estimation"
          title="Build a detailed project estimate"
          description="Select the plan, scope level, and add-ons that match your launch goals before requesting a final quote."
        />
        <div className="mt-12">
          <Suspense fallback={<div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-slate-300">Loading estimate...</div>}>
            <EstimateBuilder selectedPlan={params.plan ?? "professional"} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
