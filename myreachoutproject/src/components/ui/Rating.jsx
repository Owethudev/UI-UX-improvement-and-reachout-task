// This rating component renders a simple star-based review display.
// It can be extended later with a custom star icon library.

import { Star } from "lucide-react";

export default function Rating({ value = 5 }) {
  return (
    <div className="flex items-center gap-1.5 text-sm font-semibold text-[#111111]">
      <span className="flex items-center text-[#D4AF37]">
        <Star size={15} fill="currentColor" strokeWidth={0} />
      </span>
      <span>{value.toFixed(1)}</span>
    </div>
  );
}
