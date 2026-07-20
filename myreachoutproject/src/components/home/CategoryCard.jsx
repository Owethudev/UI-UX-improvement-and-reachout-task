// This component renders a single category card with a rich hero image.
// Another developer can extend it by changing the text, image treatment, or CTA.

import { memo } from "react";

import OptimizedImage from "../ui/OptimizedImage";

function CategoryCard({ title, description, image, className = "", isCenter = false, onClick = () => {} }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-[2rem] border border-black/10 bg-white text-left shadow-[0_24px_70px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(17,17,17,0.14)] ${isCenter ? "ring-2 ring-[#D4AF37]/25 shadow-[0_32px_90px_rgba(17,17,17,0.14)]" : ""} ${className}`.trim()}
    >
      {isCenter && (
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_70%)]" />
      )}
      <OptimizedImage
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        width={800}
        height={1000}
        className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-white/80">{description}</p>
      </div>
    </button>
  );
}

export default memo(CategoryCard);
