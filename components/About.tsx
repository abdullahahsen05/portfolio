"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto md:mx-0 photo-ring w-[280px] h-[280px]"
          >
            <Image
              src="/abdullah.jpg"
              alt={profile.name}
              width={560}
              height={560}
              priority
              className="w-full h-full object-cover"
              style={{ aspectRatio: "1 / 1" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-text-subtle font-mono mb-4">
              // about
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Engineer, builder, <span className="gradient-text">shipper</span>.
            </h2>
            <p className="text-text-muted text-xl leading-relaxed mb-8">
              {profile.about}
            </p>

            <div className="flex flex-wrap gap-3">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-2.5 rounded-xl border border-border bg-bg-card"
                >
                  <div className="text-text font-semibold text-sm">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
