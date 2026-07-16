// This rating component renders a simple star-based review display.
// It can be extended later with a custom star icon library.

export default function Rating({ value = 5 }) {
  return (
    <div className="flex items-center gap-1 text-sm font-semibold text-[#111111]">
      <span className="text-[#D4AF37]">★</span>
      <span>{value.toFixed(1)}</span>
    </div>
  );
}
