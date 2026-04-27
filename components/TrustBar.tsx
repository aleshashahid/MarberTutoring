import { Check } from "lucide-react";

// Editable trust items
const TRUST_ITEMS = [
  "Certified Tutors",
  "In-Person Sessions",
  "K-12 All Subjects",
  "Free Consultation",
];

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 md:flex md:justify-center md:items-center gap-3 md:gap-0">
          {TRUST_ITEMS.map((item, i) => (
            <div key={item} className="flex items-center justify-center gap-0 md:gap-0">
              <div className="flex items-center gap-2 py-1">
                <Check
                  size={15}
                  className="text-accent-mint flex-shrink-0"
                  strokeWidth={2.5}
                />
                <span className="text-text-dark text-sm font-medium">{item}</span>
              </div>
              {i < TRUST_ITEMS.length - 1 && (
                <span
                  className="hidden md:block text-text-muted/30 mx-5 text-xl select-none"
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
