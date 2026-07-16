// This badge is used for sales and featured product labels.
// It gives the product cards a premium retail feel.

export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-[#D4AF37]/25 bg-[#111111]/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37] shadow-sm">
      {children}
    </span>
  );
}
