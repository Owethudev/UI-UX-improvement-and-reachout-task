import PageContainer from "../layout/PageContainer";

const trustItems = [
  {
    title: "Secure Payments",
    description: "Protected checkout with encrypted transactions and trusted payment methods.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
        <path d="M16 24h32a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V28a4 4 0 0 1 4-4Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 24V18a8 8 0 1 1 16 0v6" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 36v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 40h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Warranty",
    description: "Coverage that keeps your investment protected long after purchase.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
        <path d="M32 10 50 18v14c0 10-6 18-18 22-12-4-18-12-18-22V18l18-8Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="m27 32 4 4 8-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description: "Quick dispatch and dependable delivery for urgent upgrades.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
        <rect x="10" y="18" width="28" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M38 24h10l6 6v8h-16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="44" r="4" fill="currentColor" />
        <circle cx="42" cy="44" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Easy Returns",
    description: "Simple returns and support for a stress-free shopping experience.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
        <path d="M22 20h20a8 8 0 0 1 8 8v8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 14 22 20l6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 44H22a8 8 0 0 1-8-8v-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M36 50 42 44l-6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 sm:py-28">
      <PageContainer>
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Why customers choose us
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
            Designed for confidence from discovery to delivery.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,17,17,0.12)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-[#D4AF37] shadow-sm">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#111111]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4b5563]">{item.description}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
