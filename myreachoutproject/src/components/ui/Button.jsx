// ------------------------------------------------------------
// Button.jsx
// ------------------------------------------------------------
// I am the project's reusable button component.
// Every button in the application should use me.
// If another developer wants to change button styles,
// they only need to update this file.
// ------------------------------------------------------------

import React from "react";

// I store all button styles in one object.
const variants = {
  primary:
    "bg-black text-white hover:bg-yellow-600",

  gold:
    "bg-yellow-500 text-black hover:bg-yellow-400",

  outline:
    "border border-black text-black hover:bg-black hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        px-6
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        shadow-sm
        hover:shadow-lg
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}