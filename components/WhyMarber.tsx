"use client";

import { motion } from "framer-motion";
import { UserCheck, Award, CalendarClock } from "lucide-react";

// Editable section copy
const SECTION_TITLE = "Why Choose Marber Learning?";
const SECTION_SUB =
  "We combine experienced tutors with a personal touch to help every student succeed.";

// Editable features
const FEATURES = [
  {
    icon: UserCheck,
    title: "Personalized Learning",
    description:
      "Every student gets a learning plan tailored to their pace, goals, and learning style.",
  },
  {
    icon: Award,
    title: "Certified Tutors",
    description:
      "Our tutors are vetted, experienced educators who genuinely love teaching.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling",
    description:
      "Sessions designed to fit your school's schedule and program calendar — we work around you.",
  },
];

export default function WhyMarber() {
  return (
    <section className="relative pt-0 pb-20 md:pb-28 bg-bg-cream">
      {/* Wave divider from white section above */}
      <div className="overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 72"
          height="72"
          preserveAspectRatio="none"
          className="w-full block"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M0,0 C480,72 960,0 1440,56 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            {SECTION_TITLE}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">{SECTION_SUB}</p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="text-center flex flex-col items-center gap-5"
              >
                <div className="w-20 h-20 rounded-full bg-bg-soft flex items-center justify-center shadow-sm flex-shrink-0">
                  <Icon size={36} className="text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-text-dark">
                  {feature.title}
                </h3>
                <p className="text-text-muted leading-relaxed max-w-xs mx-auto">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
