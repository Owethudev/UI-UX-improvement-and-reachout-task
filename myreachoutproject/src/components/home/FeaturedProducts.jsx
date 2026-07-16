// This section displays a premium product grid for the homepage.
// It uses shared mock data and reusable UI primitives for a consistent presentation.

import PageContainer from "../layout/PageContainer";
import ProductCard from "../product/ProductCard";
import { featuredProducts } from "../../data/featuredProducts";

export default function FeaturedProducts() {
  return (
    <section className="py-20 sm:py-24">
      <PageContainer>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Featured picks
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#111111] sm:text-4xl">
              Modern essentials for a smarter home.
            </h2>
          </div>
          <a href="/" className="text-sm font-semibold text-[#111111] transition hover:text-[#D4AF37]">
            View all
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
