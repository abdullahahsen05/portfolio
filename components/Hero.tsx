"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

const floatingTags = [
  { label: "Next.js",      className: "float-1 top-4 -left-6 md:-left-14",            color: "bg-accent-blue/15 border-accent-blue/40 text-accent-blue" },
  { label: "AI · LLMs",   className: "float-2 top-1/4 -right-4 md:-right-16",         color: "bg-accent-purple/15 border-accent-purple/40 text-accent-purple" },
  { label: "MERN Stack",  className: "float-3 top-1/2 -left-4 md:-left-16 -mt-4",     color: "bg-emerald-400/15 border-emerald-400/40 text-emerald-300" },
  { label: "SaaS · MVP",  className: "float-1 bottom-28 -right-4 md:-right-16",       color: "bg-amber-400/15 border-amber-400/40 text-amber-300" },
  { label: "TypeScript",  className: "float-2 bottom-14 -left-4 md:-left-14",         color: "bg-sky-400/15 border-sky-400/40 text-sky-300" },
  { label: "OpenAI API",  className: "float-3 top-[42%] -right-4 md:-right-16 mt-10", color: "bg-rose-400/15 border-rose-400/40 text-rose-300" },
  { label: "PostgreSQL",  className: "float-1 top-10 right-4 md:right-6",             color: "bg-teal-400/15 border-teal-400/40 text-teal-300" },
  { label: "Tailwind",    className: "float-2 bottom-6 right-2 md:right-4",           color: "bg-cyan-400/15 border-cyan-400/40 text-cyan-300" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden hero-gradient"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.25fr_0.9fr] gap-10 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-border-strong/60 bg-bg-elevated/60 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm text-text-muted tracking-wide">{profile.availability}</span>
            </motion.div>

            {/* Big headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(3.5rem,9vw,6rem)] font-bold tracking-tight leading-[1.0] mb-5"
            >
              Hey, I&apos;m{" "}
              <span className="gradient-text">Abdullah</span>
              <span className="text-text-muted">.</span>
            </motion.h1>

            {/* Role badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-7"
            >
              {profile.roles.map((role) => (
                <span
                  key={role}
                  className="px-4 py-2 rounded-lg border border-border-strong bg-bg-elevated/70 text-sm md:text-base text-text-muted font-medium"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl md:text-2xl text-text-muted leading-relaxed mb-9 max-w-xl"
            >
              I build{" "}
              <span className="text-text font-medium">AI-integrated SaaS products</span>{" "}
              and ship MVPs fast. From MERN stack apps to LLM-powered dashboards — I take
              ideas from zero to production, end-to-end.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 bg-white text-bg px-7 py-4 rounded-xl font-bold text-base hover:bg-text transition-colors"
              >
                View My Work
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 border border-border-strong px-7 py-4 rounded-xl font-semibold text-base text-text hover:bg-bg-elevated transition-colors"
              >
                <Sparkles className="w-5 h-5 text-accent-blue" />
                Hire Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/60"
            >
              {profile.heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold gradient-text leading-none mb-1.5">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-subtle">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative mx-auto w-full max-w-[300px] lg:max-w-none"
          >
            <div className="photo-frame w-full aspect-[3/4]">
              <Image
                src="/abdullah.jpg"
                alt="Abdullah Ahsen"
                width={800}
                height={1067}
                priority
                className="w-full h-full object-cover"
              />
            </div>

            {floatingTags.map((tag) => (
              <div
                key={tag.label}
                className={`absolute ${tag.className} px-3.5 py-2 rounded-full border ${tag.color} backdrop-blur-md text-sm font-semibold font-mono shadow-lg whitespace-nowrap`}
              >
                {tag.label}
              </div>
            ))}

            <div className="absolute -inset-8 -z-10 bg-gradient-to-tr from-accent-blue/10 via-accent-purple/10 to-transparent blur-3xl pointer-events-none" />

            {/* Social links below photo */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <a
                href="https://github.com/abdullahahsen05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border-strong bg-bg-elevated/80 backdrop-blur-sm text-text-muted hover:text-text hover:border-accent-blue/50 transition-colors text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-abdullah-ahsen-4a0554219/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border-strong bg-bg-elevated/80 backdrop-blur-sm text-text-muted hover:text-text hover:border-accent-blue/50 transition-colors text-sm font-medium"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
