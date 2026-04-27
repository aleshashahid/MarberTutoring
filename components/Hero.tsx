"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Editable copy
const EYEBROW = "K-12 IN-PERSON TUTORING";
const HEADLINE = "Where students learn, grow, and succeed.";
const SUBHEADING =
  "Personalized in-person tutoring that builds confidence, sharpens skills, and helps your child thrive — one lesson at a time.";
const CTA_PRIMARY = "Get Started Today";
const CTA_SECONDARY = "Explore Services";

const FLOATING_SHAPES = [
  { left: "8%", top: "18%", size: 140, color: "#8B7AAB", opacity: 0.1, duration: 5, delay: 0 },
  { left: "82%", top: "12%", size: 100, color: "#5BA89A", opacity: 0.08, duration: 6, delay: 1 },
  { left: "70%", top: "76%", size: 160, color: "#8B7AAB", opacity: 0.07, duration: 7, delay: 2 },
  { left: "2%", top: "68%", size: 80, color: "#5BA89A", opacity: 0.10, duration: 4.5, delay: 0.8 },
];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-bg-soft via-bg-cream to-bg-cream flex items-center overflow-hidden">
      {/* Decorative floating shapes */}
      {FLOATING_SHAPES.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: shape.left,
            top: shape.top,
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            opacity: shape.opacity,
          }}
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-accent-mint font-semibold text-sm tracking-widest uppercase mb-4"
            >
              {EYEBROW}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-6"
            >
              {HEADLINE}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-text-muted text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              {SUBHEADING}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {CTA_PRIMARY}
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-bg-soft px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {CTA_SECONDARY}
              </Link>
            </motion.div>
          </div>

          {/* Right: illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <StudentIllustration />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StudentIllustration() {
  return (
    <svg
      viewBox="0 0 420 420"
      className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px]"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustration of a student at a desk studying"
      role="img"
    >
      {/* Background circle */}
      <circle cx="210" cy="210" r="190" fill="#F0EBF7" />

      {/* Desk surface */}
      <rect x="80" y="278" width="260" height="18" rx="7" fill="#8B7AAB" opacity="0.65" />
      {/* Desk legs */}
      <rect x="92" y="294" width="14" height="56" rx="5" fill="#8B7AAB" opacity="0.45" />
      <rect x="314" y="294" width="14" height="56" rx="5" fill="#8B7AAB" opacity="0.45" />

      {/* Book stack (left side) */}
      <rect x="102" y="248" width="58" height="30" rx="5" fill="#5BA89A" />
      <rect x="105" y="232" width="52" height="18" rx="5" fill="#8FC9BD" />
      <rect x="103" y="218" width="54" height="16" rx="5" fill="#5BA89A" opacity="0.75" />
      {/* Book spines */}
      <rect x="102" y="248" width="6" height="30" rx="2" fill="white" opacity="0.25" />
      <rect x="105" y="232" width="6" height="18" rx="2" fill="white" opacity="0.2" />

      {/* Open notebook */}
      <rect x="168" y="232" width="132" height="46" rx="7" fill="white" opacity="0.95" />
      <line x1="234" y1="232" x2="234" y2="278" stroke="#E5DFF0" strokeWidth="2" />
      {/* Left page lines */}
      <line x1="178" y1="244" x2="224" y2="244" stroke="#D1C8E8" strokeWidth="1.5" />
      <line x1="178" y1="252" x2="224" y2="252" stroke="#D1C8E8" strokeWidth="1.5" />
      <line x1="178" y1="260" x2="220" y2="260" stroke="#D1C8E8" strokeWidth="1.5" />
      <line x1="178" y1="268" x2="222" y2="268" stroke="#D1C8E8" strokeWidth="1.5" />
      {/* Right page lines */}
      <line x1="244" y1="244" x2="290" y2="244" stroke="#D1C8E8" strokeWidth="1.5" />
      <line x1="244" y1="252" x2="290" y2="252" stroke="#D1C8E8" strokeWidth="1.5" />
      <line x1="244" y1="260" x2="284" y2="260" stroke="#D1C8E8" strokeWidth="1.5" />
      <line x1="244" y1="268" x2="288" y2="268" stroke="#D1C8E8" strokeWidth="1.5" />

      {/* Pencil */}
      <g transform="rotate(-18, 310, 255)">
        <rect x="304" y="228" width="9" height="50" rx="4.5" fill="#FAF7F2" />
        <polygon points="304,278 313,278 308.5,294" fill="#F5B942" />
        <rect x="304" y="226" width="9" height="7" rx="2" fill="#C0C0C0" />
        <circle cx="308.5" cy="294" r="2" fill="#C0A080" />
      </g>

      {/* Student torso/shirt */}
      <rect x="172" y="160" width="76" height="96" rx="22" fill="#8B7AAB" opacity="0.88" />

      {/* Student head */}
      <circle cx="210" cy="128" r="40" fill="#FDDBB4" />

      {/* Hair */}
      <ellipse cx="210" cy="98" rx="40" ry="22" fill="#4A3728" />
      <rect x="170" y="98" width="80" height="18" fill="#4A3728" />

      {/* Eyes */}
      <circle cx="197" cy="128" r="4.5" fill="#333" />
      <circle cx="223" cy="128" r="4.5" fill="#333" />
      {/* Eye highlights */}
      <circle cx="199" cy="126" r="1.5" fill="white" />
      <circle cx="225" cy="126" r="1.5" fill="white" />

      {/* Smile */}
      <path d="M200 142 Q210 150 220 142" stroke="#555" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Graduation cap board */}
      <rect x="183" y="84" width="54" height="11" rx="3" fill="#2D2A3E" />
      {/* Cap top */}
      <polygon points="210,60 183,84 237,84" fill="#2D2A3E" />
      {/* Tassel string */}
      <line x1="237" y1="84" x2="246" y2="108" stroke="#5BA89A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="246" cy="110" r="5.5" fill="#5BA89A" />

      {/* Arms */}
      <path d="M172 176 Q145 192 150 235" stroke="#FDDBB4" strokeWidth="20" fill="none" strokeLinecap="round" />
      <path d="M248 176 Q274 192 268 235" stroke="#FDDBB4" strokeWidth="20" fill="none" strokeLinecap="round" />

      {/* Hands resting on desk */}
      <ellipse cx="151" cy="268" rx="16" ry="12" fill="#FDDBB4" />
      <ellipse cx="268" cy="268" rx="16" ry="12" fill="#FDDBB4" />

      {/* Sparkles */}
      <g opacity="0.75" fill="#5BA89A">
        <path d="M358 128 l4 13 l4 -13 l-4 -13 z" />
        <path d="M358 128 l13 4 l-13 4 l-13 -4 z" />
      </g>
      <g opacity="0.65" fill="#8B7AAB">
        <path d="M56 162 l3 9 l3 -9 l-3 -9 z" />
        <path d="M56 162 l9 3 l-9 3 l-9 -3 z" />
      </g>
      <circle cx="368" cy="178" r="7" fill="#B8A9D9" opacity="0.45" />
      <circle cx="46" cy="258" r="5" fill="#8FC9BD" opacity="0.5" />
      <circle cx="340" cy="320" r="9" fill="#B8A9D9" opacity="0.35" />
      <circle cx="75" cy="340" r="6" fill="#5BA89A" opacity="0.3" />
    </svg>
  );
}
