// This section displays a premium product grid for the homepage.
// It uses shared mock data and reusable UI primitives for a consistent presentation.

import { Link } from "react-router-dom";

import PageContainer from "../layout/PageContainer";
import ProductCard from "../product/ProductCard";
import { featuredProducts } from "../../data/featuredProducts";

export default function FeaturedProducts() {
  return (
    <section className="py-24 sm:py-28">
      <PageContainer>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Featured picks
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
              Modern essentials for a smarter home.
            </h2>
          </div>
          <Link to="/search" className="text-sm font-semibold text-[#111111] transition hover:text-[#D4AF37]">
            View all
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
