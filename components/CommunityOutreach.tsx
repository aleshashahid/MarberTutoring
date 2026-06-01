"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Editable
const EYEBROW = "IN THE COMMUNITY";
const TITLE = "Visiting Schools Across Greater Houston";
const SUB =
  "Marber Learning Foundation actively visits local schools and programs to build partnerships and bring resources directly to students and educators.";

const VISITS = [
  {
    src: "/colony%20meadows%20elementary%20visit.jpg",
    label: "Colony Meadows Elementary",
  },
  {
    src: "/commonwealth%20elementary%20hall%20visit.jpg",
    label: "Commonwealth Elementary",
  },
  {
    src: "/first%20colony%20middle%20school%20visit.jpg",
    label: "First Colony Middle School",
  },
  {
    src: "/St.%20Francis%20de%20Sales%20School%20Stocking%20the%20Fridge.JPG",
    label: "St. Francis de Sales School",
  },
];

export default function CommunityOutreach() {
  return (
    <section className="bg-bg-soft py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent-mint font-semibold text-sm tracking-widest uppercase mb-3">
            {EYEBROW}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-4">
            {TITLE}
          </h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            {SUB}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {VISITS.map(({ src, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-dark/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm leading-tight">
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/about#visits"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
          >
            See all school visits <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
