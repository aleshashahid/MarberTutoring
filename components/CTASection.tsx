"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Editable copy
const HEADLINE = "Ready to Bring Tutoring to Your School?";
const SUBHEADING =
  "Reach out today and let's explore how Marber Learning can support your students through your school or program.";
const CTA_LABEL = "Partner With Us";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary-light to-primary">
      {/* Decorative background circles */}
      <div
        className="absolute top-8 left-10 w-36 h-36 rounded-full bg-white pointer-events-none"
        style={{ opacity: 0.06 }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-16 w-52 h-52 rounded-full bg-white pointer-events-none"
        style={{ opacity: 0.05 }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white pointer-events-none"
        style={{ opacity: 0.06 }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-28 h-28 rounded-full bg-white pointer-events-none"
        style={{ opacity: 0.04 }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          {HEADLINE}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {SUBHEADING}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-bg-cream px-10 py-4 rounded-full font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            {CTA_LABEL}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
