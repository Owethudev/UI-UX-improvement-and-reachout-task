// This reusable button keeps the UI consistent across the homepage.
// Another developer can add new variants here without touching every call site.

const variants = {
  primary: "bg-[#111111] text-white hover:bg-[#D4AF37] hover:text-[#111111] active:scale-[0.98]",
  gold: "bg-[#D4AF37] text-[#111111] hover:bg-[#c79f2b] active:scale-[0.98]",
  outline: "border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white active:scale-[0.98]",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-lg ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}