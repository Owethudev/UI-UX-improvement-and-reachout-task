import { useEffect, useMemo, useState } from "react";

import PageContainer from "../layout/PageContainer";
import SkeletonCard from "../ui/SkeletonCard";
import { featuredProducts } from "../../data/featuredProducts";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import SortingBar from "./SortingBar";

const catalogProducts = featuredProducts.map((product, index) => {
  const category = index % 2 === 0 ? "Mobiles" : index % 3 === 0 ? "Home" : "Gaming";

  return {
    ...product,
    category,
  };
});

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 250);
    return () => window.clearTimeout(timer);
  }, []);

  const visibleProducts = useMemo(() => {
    const filtered = catalogProducts.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesPrice =
        selectedPrice === "All" ||
        (selectedPrice === "Under R 10k" && product.price < 10000) ||
        (selectedPrice === "Under R 20k" && product.price < 20000) ||
        (selectedPrice === "Premium" && product.price >= 20000);

      return matchesCategory && matchesPrice;
    });

    const sorted = [...filtered];
    sorted.sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

    return sorted;
  }, [activeCategory, selectedPrice, sortBy]);

  return (
    <section className="bg-[#f7f7f2] py-20 sm:py-24">
      <PageContainer>
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Shop the collection</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#111111] sm:text-4xl">
              Browse premium electronics with effortless filters.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-8 text-[#4b5563] sm:text-base">
            Discover expertly curated devices with a layout designed for quick discovery on desktop and smooth browsing on mobile.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
          <FilterSidebar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            selectedPrice={selectedPrice}
            onPriceChange={setSelectedPrice}
          />

          <div>
            <SortingBar
              resultCount={visibleProducts.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onOpenFilters={() => setMobileFilterOpen(true)}
            />
            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            ) : visibleProducts.length ? (
              <ProductGrid products={visibleProducts} />
            ) : (
              <div className="rounded-[2rem] border border-dashed border-black/15 bg-white p-8 text-center shadow-[0_12px_35px_rgba(17,17,17,0.04)]">
                <p className="text-lg font-semibold text-[#111111]">No products match these filters.</p>
                <p className="mt-2 text-sm leading-7 text-[#4b5563]">Try another category or price range to see more options.</p>
              </div>
            )}
          </div>
        </div>
      </PageContainer>

      {mobileFilterOpen && (
        <FilterSidebar
          mobile
          isOpen={mobileFilterOpen}
          onClose={() => setMobileFilterOpen(false)}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          selectedPrice={selectedPrice}
          onPriceChange={setSelectedPrice}
        />
      )}
    </section>
  );
}
