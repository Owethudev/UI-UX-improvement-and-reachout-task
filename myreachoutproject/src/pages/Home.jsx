// This page is the entry point for the homepage foundation.
// It composes the hero section and keeps the page easy to extend with more sections.

// This page composes the hero, trust highlights, and the featured products grid.
// It keeps the homepage visually structured while remaining easy to extend.

import Brands from "../components/home/Brands";
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import PageContainer from "../components/layout/PageContainer";
import TrustSection from "../components/home/TrustSection";

const highlights = [
  { title: "Fast delivery", text: "Premium shipping for urgent electronics purchases." },
  { title: "Trusted quality", text: "Curated products with polished, modern presentation." },
  { title: "Flexible support", text: "Live guidance for product discovery and order help." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(17,17,17,0.05)] transition duration-300 hover:-translate-y-1"
              >
                <h2 className="text-lg font-semibold text-[#111111]">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#4b5563]">{item.text}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <Brands />
      <TrustSection />
      <FeaturedProducts />
    </>
  );
}