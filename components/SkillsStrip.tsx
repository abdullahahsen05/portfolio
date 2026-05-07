"use client";

import { motion } from "framer-motion";
import { skills, skillCategories } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Frontend:  "text-accent-blue  border-accent-blue/40  bg-accent-blue/10",
  Backend:   "text-emerald-300  border-emerald-400/40  bg-emerald-400/10",
  Databases: "text-amber-300    border-amber-400/40    bg-amber-400/10",
  "AI & LLMs": "text-accent-purple border-accent-purple/40 bg-accent-purple/10",
};

export default function SkillsStrip() {
  const doubled = [...skills, ...skills];

  return (
    <section id="skills" className="relative py-24 border-y border-border/50">

      {/* Marquee */}
      <div className="relative mb-16 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
        <div className="marquee-track">
          {doubled.map((skill, i) => (
            <div
              key={`${skill}-${i}`}
              className="flex-shrink-0 px-4 py-2 border border-border rounded-full bg-bg-elevated/60 text-sm text-text-muted whitespace-nowrap"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Categorized grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-text-subtle font-mono mb-3">
            // skills & stack
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            What I <span className="gradient-text">build with</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-bg-card p-5"
            >
              <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${categoryColors[cat.label]}`}>
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1.5 rounded-lg border border-border bg-bg-elevated text-text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
