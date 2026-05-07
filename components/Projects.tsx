"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/lib/data";

const accentClasses: Record<Project["accent"], string> = {
  blue: "from-accent-blue/30 via-accent-blue/10 to-transparent",
  purple: "from-accent-purple/30 via-accent-purple/10 to-transparent",
  cyan: "from-cyan-400/30 via-cyan-400/10 to-transparent",
};

const accentText: Record<Project["accent"], string> = {
  blue: "text-accent-blue",
  purple: "text-accent-purple",
  cyan: "text-cyan-400",
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-text-subtle font-mono mb-4">
            // selected work
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Products I&apos;ve <span className="gradient-text">shipped</span>.
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Three deployed products spanning AI SaaS, fintech, and wellness.
            Each link below is live — go click around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glow group rounded-2xl border border-border bg-bg-card overflow-hidden flex flex-col hover:border-border-strong"
            >
              {/* Logo preview */}
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${accentClasses[project.accent]} overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.screenshot}
                  alt={`${project.name} logo`}
                  className="relative z-10 max-h-[55%] max-w-[60%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card/70 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-bg/70 backdrop-blur-sm border border-border text-[10px] font-mono text-text-muted uppercase tracking-wider">
                  0{i + 1}
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-1 rounded-md bg-bg-elevated border border-border text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-border/60">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white text-bg px-4 py-2 rounded-lg text-sm font-semibold hover:bg-text transition-colors"
                  >
                    Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 border border-border-strong px-4 py-2 rounded-lg text-sm text-text-muted hover:text-text hover:bg-bg-elevated transition-colors"
                    aria-label={`${project.name} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
