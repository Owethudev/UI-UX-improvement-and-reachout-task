// This reusable button keeps the UI consistent across the homepage.
// Another developer can add new variants here without touching every call site.

import { memo } from "react";

const variants = {
  primary: "bg-[#D4AF37] text-[#111111] border border-[#D4AF37] hover:-translate-y-0.5 hover:bg-[#e0bc45] hover:shadow-[0_14px_36px_rgba(212,175,55,0.28)] active:scale-[0.98] shadow-[0_12px_35px_rgba(212,175,55,0.2)]",
  gold: "bg-[#D4AF37] text-[#111111] hover:-translate-y-0.5 hover:bg-[#e0bc45] hover:shadow-[0_14px_36px_rgba(212,175,55,0.28)] active:scale-[0.98] shadow-[0_12px_35px_rgba(212,175,55,0.2)]",
  outline: "border border-[#111111]/15 bg-white text-[#111111] hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#fff8e8] hover:text-[#111111] hover:shadow-[0_12px_30px_rgba(17,17,17,0.08)] active:scale-[0.98] shadow-sm",
};

function Button({
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

export default memo(Button);
