// This reusable button keeps the UI consistent across the homepage.
// Another developer can add new variants here without touching every call site.

const variants = {
  primary: "bg-[#111111] text-white hover:bg-[#D4AF37] hover:text-[#111111] active:scale-[0.98] shadow-[0_12px_35px_rgba(17,17,17,0.14)]",
  gold: "bg-[#D4AF37] text-[#111111] hover:bg-[#e0bc45] active:scale-[0.98] shadow-[0_12px_35px_rgba(212,175,55,0.25)]",
  outline: "border border-[#111111]/15 bg-white text-[#111111] hover:border-[#D4AF37] hover:bg-[#fff8e8] hover:text-[#111111] active:scale-[0.98] shadow-sm",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-lg ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}