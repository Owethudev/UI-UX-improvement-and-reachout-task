import PageContainer from "../layout/PageContainer";

const brands = [
  {
    name: "Apple",
    logo: (
      <svg viewBox="0 0 220 80" className="h-8 w-full" aria-label="Apple" role="img">
        <path
          d="M163.7 34.4c0-8.2 6.9-12.1 7.2-12.3-3.9-5.7-10-6.5-12.2-6.6-5.2-.5-10.1 3-12.7 3-2.6 0-6.7-2.9-11-2.8-5.7.1-10.9 3.3-13.8 8.4-5.9 10.2-1.5 25.3 4.2 33.6 2.8 4.1 6.2 8.7 10.6 8.5 4.2-.2 5.8-2.8 10.9-2.8 5.1 0 6.6 2.8 11.1 2.7 4.6-.1 7.5-4.1 10.3-8.2 3.2-4.7 4.5-9.2 4.6-9.4-.1-.1-8.7-3.3-8.7-13.4Z"
          fill="currentColor"
        />
        <path
          d="M151.4 15.4c2.2-2.7 3.7-6.4 3.3-10.1-3.1.1-6.9 2.1-9.1 4.8-2 2.4-3.8 6.2-3.3 9.8 3.5.3 7.1-1.8 9.1-4.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Samsung",
    logo: (
      <svg viewBox="0 0 220 80" className="h-8 w-full" aria-label="Samsung" role="img">
        <rect x="32" y="20" width="156" height="40" rx="20" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M70 30c10 0 18 8 18 18s-8 18-18 18c-8 0-15-5-17-12h10c1.5 3 4.7 5 8 5 5.5 0 10-4.5 10-10s-4.5-10-10-10c-3.3 0-6.5 2-8 5H53c2-7 9-12 17-12Z" fill="currentColor" />
        <path d="M150 30c10 0 18 8 18 18s-8 18-18 18c-8 0-15-5-17-12h10c1.5 3 4.7 5 8 5 5.5 0 10-4.5 10-10s-4.5-10-10-10c-3.3 0-6.5 2-8 5h10c2-7 9-12 17-12Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LG",
    logo: (
      <svg viewBox="0 0 220 80" className="h-8 w-full" aria-label="LG" role="img">
        <circle cx="110" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M93 28h14c6 0 10 4 10 10 0 6-4 10-10 10h-14V28Zm8 8v8h4c2 0 4-2 4-4s-2-4-4-4h-4Z" fill="currentColor" />
        <path d="M128 28h16l8 20 8-20h16v24h-8V39l-8 13h-8l-8-13v13h-8V28Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Sony",
    logo: (
      <svg viewBox="0 0 220 80" className="h-8 w-full" aria-label="Sony" role="img">
        <circle cx="110" cy="40" r="24" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M92 32c6-5 13-8 22-8 8 0 14 2 18 6-4 3-10 5-18 5-8 0-14-1-22-3Zm0 16c6-2 14-3 22-3 8 0 14 2 18 6-4 3-10 5-18 5-8 0-14-2-22-8Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Dell",
    logo: (
      <svg viewBox="0 0 220 80" className="h-8 w-full" aria-label="Dell" role="img">
        <rect x="34" y="20" width="152" height="40" rx="12" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M70 32h46c8 0 14 6 14 14 0 8-6 14-14 14H70V32Zm10 8v12h26c4 0 6-2 6-6s-2-6-6-6H80Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "HP",
    logo: (
      <svg viewBox="0 0 220 80" className="h-8 w-full" aria-label="HP" role="img">
        <path d="M55 28h110c10 0 18 8 18 18 0 10-8 18-18 18H55c-10 0-18-8-18-18 0-10 8-18 18-18Zm0 8c-5.5 0-10 4.5-10 10s4.5 10 10 10h110c5.5 0 10-4.5 10-10s-4.5-10-10-10H55Z" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M82 32h56c7 0 12 5 12 12s-5 12-12 12H82V32Zm10 8v8h36c2 0 4-2 4-4s-2-4-4-4H92Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Brands() {
  return (
    <section className="border-y border-black/10 bg-[#f7f7f2] py-24 sm:py-28">
      <PageContainer>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Trusted by leaders
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#111111] sm:text-4xl">
              Premium technology brands, presented with clarity.
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 sm:gap-5 lg:flex-wrap lg:overflow-visible">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex min-w-[160px] flex-shrink-0 items-center justify-center rounded-[1.5rem] border border-black/10 bg-white px-6 py-5 shadow-[0_16px_36px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(17,17,17,0.12)] sm:min-w-[180px] lg:min-w-[150px]"
              >
                {brand.logo}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
