"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 border-t border-border/50 overflow-hidden"
    >
      <div
        className="absolute inset-x-0 bottom-0 h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 100%, rgba(122, 183, 255, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs uppercase tracking-[0.2em] text-text-subtle font-mono mb-4">
            // get in touch
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.05]">
            Let&apos;s build <span className="gradient-text">something</span>.
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Have a product idea, a role to fill, or a project that needs an
            extra hand? My inbox is open.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 bg-white text-bg px-8 py-4 rounded-xl font-semibold hover:bg-text transition-colors mb-12"
          >
            <Mail className="w-5 h-5" />
            {profile.email}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="flex items-center justify-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl border border-border bg-bg-card flex items-center justify-center text-text-muted hover:text-text hover:border-border-strong transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl border border-border bg-bg-card flex items-center justify-center text-text-muted hover:text-text hover:border-border-strong transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="relative max-w-6xl mx-auto mt-32 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-subtle font-mono">
        <div>© {new Date().getFullYear()} Abdullah Ahsen</div>
        <div>built with next.js · deployed on vercel</div>
      </footer>
    </section>
  );
}
