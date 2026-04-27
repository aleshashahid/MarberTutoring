"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  FlaskConical,
  BookOpen,
  Landmark,
  Languages,
  GraduationCap,
} from "lucide-react";

// Editable section copy
const SECTION_TITLE = "Subjects We Teach";
const SECTION_SUB = "Expert tutors across every core subject your child needs.";

// Editable subject cards
const SUBJECTS = [
  {
    icon: Calculator,
    name: "Math",
    description: "Algebra, Geometry, Calculus, and beyond.",
  },
  {
    icon: FlaskConical,
    name: "Science",
    description: "Biology, Chemistry, Physics, and Earth Science.",
  },
  {
    icon: BookOpen,
    name: "English",
    description: "Reading, writing, grammar, and literature.",
  },
  {
    icon: Landmark,
    name: "History",
    description: "World, U.S., and social studies mastery.",
  },
  {
    icon: Languages,
    name: "Languages",
    description: "Spanish, French, and more.",
  },
  {
    icon: GraduationCap,
    name: "Test Prep",
    description: "SAT, ACT, and standardized exam coaching.",
  },
];

export default function SubjectsGrid() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject, i) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="group bg-white rounded-2xl shadow-sm p-7 flex flex-col gap-4 border border-transparent hover:border-primary-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full cursor-default">
                  {/* Icon badge */}
                  <div className="w-14 h-14 rounded-full bg-bg-soft flex items-center justify-center flex-shrink-0">
                    <Icon
                      size={26}
                      className="text-accent-mint group-hover:text-primary transition-colors duration-200"
                      strokeWidth={1.8}
                    />
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-text-dark mb-1.5">
                      {subject.name}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {subject.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
