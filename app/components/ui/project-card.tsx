"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "./card";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
};

export function ProjectCard({ title, category, description, tags }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -10, scale: 1.01 }} className="group">
      <Card className="overflow-hidden p-6">
        <div className="mb-5 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-cyan-300/90">
          <span className="rounded-full bg-white/5 px-3 py-1">{category}</span>
          <div className="rounded-full bg-white/5 px-3 py-1">Live preview</div>
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-100">
          <span>View project</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </Card>
    </motion.div>
  );
}
