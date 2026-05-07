"use client";

import { motion } from "framer-motion";
import { Rocket, Brain, Code2 } from "lucide-react";
import { services } from "@/lib/data";

const icons = [Rocket, Brain, Code2];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-text-subtle font-mono mb-4">
            // services
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            How I can <span className="gradient-text">help</span>.
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Whether you&apos;re validating an idea or scaling a product, I plug
            in end-to-end and ship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl border border-border bg-bg-card hover:border-border-strong transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-bg-elevated border border-border flex items-center justify-center mb-5 group-hover:border-accent-blue/40 transition-colors">
                  <Icon className="w-5 h-5 text-accent-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
