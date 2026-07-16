// This section showcases the most important product categories with large lifestyle imagery.
// The data is supplied from the shared categories file so the section can evolve easily.

import { Link } from "react-router-dom";

import PageContainer from "../layout/PageContainer";
import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories";

export default function Categories() {
  return (
    <section className="py-24 sm:py-28">
      <PageContainer>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Shop by category
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
              Find the right tech for every moment.
            </h2>
          </div>
          <Link to="/search" className="text-sm font-semibold text-[#111111] transition hover:text-[#D4AF37]">
            Browse all
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
