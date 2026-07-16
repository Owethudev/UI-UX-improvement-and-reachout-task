import { useMemo, useState } from "react";

import PageContainer from "../layout/PageContainer";
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

  const visibleProducts = useMemo(() => {
    const filtered = catalogProducts.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesPrice =
        selectedPrice === "All" ||
        (selectedPrice === "Under $10k" && product.price < 10000) ||
        (selectedPrice === "Under $20k" && product.price < 20000) ||
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
    <section className="bg-[#f7f7f2] py-16 sm:py-20">
      <PageContainer>
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Shop the collection</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#111111] sm:text-4xl">
              Browse premium electronics with effortless filters.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#4b5563] sm:text-base">
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
            <ProductGrid products={visibleProducts} />
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
