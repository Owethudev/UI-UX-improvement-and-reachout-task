// This component renders a single category card with a rich hero image.
// Another developer can extend it by changing the text, image treatment, or CTA.

export default function CategoryCard({ title, description, image, className = "" }) {
  return (
    <article className={`group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_70px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(17,17,17,0.14)] ${className}`.trim()}>
      <img
        src={image}
        alt={title}
        className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          Curated picks
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-white/80">{description}</p>
      </div>
    </article>
  );
}
