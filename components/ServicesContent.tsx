"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Users,
  ClipboardCheck,
  GraduationCap,
  Calculator,
  PenLine,
  FlaskConical,
  Brain,
  ArrowRight,
  Search,
  Shuffle,
  Lightbulb,
  BarChart3,
} from "lucide-react";

// Editable
const HERO_EYEBROW = "WHAT WE OFFER";
const HERO_HEADLINE = "Academic Support & Enrichment Services";
const HERO_SUB =
  "At Marber Learning Foundation, we believe every student deserves access to personalized academic support that builds confidence, strengthens skills, and fosters long-term educational success. Our programs complement classroom instruction and address individual learning gaps through structured, student-centered tutoring and enrichment services.";

const SERVICES = [
  {
    icon: BookOpen,
    title: "After-School Tutoring & Academic Enrichment",
    description:
      "Structured academic support programs designed to reinforce classroom learning and improve student performance in core academic subjects.",
    items: [],
  },
  {
    icon: Users,
    title: "One-to-One & Small Group Instruction",
    description:
      "Personalized tutoring sessions delivered in-home, online, or on campus, tailored to each student's learning style and academic goals.",
    items: [],
  },
  {
    icon: ClipboardCheck,
    title: "TEKS-Aligned Academic Support",
    description:
      "Instruction aligned with the Texas Essential Knowledge and Skills (TEKS) to support classroom success and readiness for state assessments.",
    items: [],
  },
  {
    icon: GraduationCap,
    title: "Test Preparation Programs",
    description: "Targeted preparation for standardized exams:",
    items: ["STAAR", "SAT", "ACT", "PSAT", "Advanced Placement (AP) Exams"],
  },
  {
    icon: Calculator,
    title: "Mathematics Support",
    description: "Comprehensive support from elementary math through advanced coursework:",
    items: ["Pre-Algebra", "Algebra I & II", "Geometry", "Pre-Calculus", "Calculus", "Statistics"],
  },
  {
    icon: PenLine,
    title: "English Language Arts",
    description: "Support across all areas of literacy and writing:",
    items: [
      "Reading comprehension",
      "Writing skills",
      "Grammar and language development",
      "Essay writing",
      "Study and organizational skills",
    ],
  },
  {
    icon: FlaskConical,
    title: "Science Tutoring",
    description: "Instruction in core science disciplines:",
    items: ["Biology", "Chemistry", "Physics", "General Science"],
  },
  {
    icon: Brain,
    title: "Executive Function & Academic Coaching",
    description: "Guidance focused on the skills behind academic success:",
    items: [
      "Time management",
      "Organization",
      "Study habits",
      "Accountability",
      "Academic confidence and motivation",
    ],
  },
];

const APPROACH_STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Assess",
    description:
      "We identify academic strengths, learning gaps, and performance objectives through consultation and assessment.",
  },
  {
    icon: Shuffle,
    step: "02",
    title: "Match",
    description:
      "Students are paired with qualified instructors based on subject expertise, personality, and learning needs.",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Instruct",
    description:
      "Customized instruction is delivered through engaging, standards-aligned teaching strategies.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Monitor",
    description:
      "We provide ongoing communication, progress tracking, and instructional adjustments to support measurable growth.",
  },
];

const WHY_US = [
  "Personalized tutor matching process",
  "Flexible scheduling options",
  "In-home, virtual, and on-campus delivery models",
  "TEKS-aligned instruction",
  "Scalable enrichment program design",
  "Progress monitoring and accountability",
  "Experience supporting students in the Houston and Fort Bend areas",
];

const BLOBS = [
  { left: "5%", top: "15%", size: 180, color: "#8B7AAB", opacity: 0.08, duration: 5, delay: 0 },
  { left: "80%", top: "8%", size: 120, color: "#5BA89A", opacity: 0.07, duration: 6, delay: 0.8 },
];

export default function ServicesContent() {
  return (
    <main className="bg-bg-cream">

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-bg-soft via-bg-cream to-bg-cream pt-32 pb-20 md:pb-28 overflow-hidden">
        {BLOBS.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{ left: b.left, top: b.top, width: b.size, height: b.size, backgroundColor: b.color, opacity: b.opacity }}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: b.duration, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
          />
        ))}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent-mint font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {HERO_EYEBROW}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-6"
          >
            {HERO_HEADLINE}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg leading-relaxed max-w-3xl mx-auto"
          >
            {HERO_SUB}
          </motion.p>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark">
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ icon: Icon, title, description, items }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-bg-cream rounded-2xl p-6 border border-primary/10 flex flex-col gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="font-heading text-lg font-bold text-text-dark leading-snug">
                  {title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{description}</p>
                {items.length > 0 && (
                  <ul className="flex flex-col gap-1 mt-1">
                    {items.map((item) => (
                      <li key={item} className="text-text-muted text-sm flex items-start gap-2">
                        <span className="text-accent-mint mt-1 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instructional Approach ── */}
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
              HOW IT WORKS
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark">
              Our Instructional Approach
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {APPROACH_STEPS.map(({ icon: Icon, step, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="text-center flex flex-col items-center gap-4"
              >
                <div className="relative w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <Icon size={30} className="text-primary" strokeWidth={1.6} />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent-mint text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-dark">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark">
              Why Families &amp; Schools Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex items-start gap-3 bg-bg-cream rounded-xl px-5 py-4 border border-primary/10"
              >
                <span className="w-5 h-5 rounded-full bg-accent-mint/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-accent-mint block" />
                </span>
                <p className="text-text-dark text-sm font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partnership CTA ── */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary-light to-primary">
        <div className="absolute top-8 left-10 w-36 h-36 rounded-full bg-white pointer-events-none" style={{ opacity: 0.06 }} aria-hidden="true" />
        <div className="absolute bottom-10 right-16 w-52 h-52 rounded-full bg-white pointer-events-none" style={{ opacity: 0.05 }} aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Partnership Opportunities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Marber Learning Foundation partners with schools, community organizations, and educational partners to expand access to high-quality academic support services for students and families.
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
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
