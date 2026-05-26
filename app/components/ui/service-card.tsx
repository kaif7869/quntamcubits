"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { cn } from "../../lib/utils";
import { Card } from "./card";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  accent: string;
};

export function ServiceCard({ title, description, icon, accent }: ServiceCardProps) {
  const IconComponent = (Icons as Record<string, any>)[icon] ?? Icons.Layers;

  return (
    <motion.div whileHover={{ y: -8 }} className="group">
      <Card className={cn("relative overflow-hidden p-6 transition-transform duration-300", accent)}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-cyan-300 shadow-glow">
          <IconComponent className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      </Card>
    </motion.div>
  );
}
