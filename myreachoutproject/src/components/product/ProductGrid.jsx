// I use this component to control how many products I show initially and how many more appear when I press load more.
// If I want to change the grid behavior, I can tweak the initialCount or increment values here.
import { memo, useCallback, useEffect, useMemo, useState } from "react";

import ProductCard from "./ProductCard";

function ProductGrid({ products, initialCount = 4, increment = 4 }) {
  // I keep track of how many items are visible so I can progressively reveal more products without changing the layout.
  const [visibleCount, setVisibleCount] = useState(initialCount);

  // I reset the visible count whenever the incoming product list changes so the grid stays consistent.
  useEffect(() => {
    setVisibleCount(initialCount);
  }, [initialCount, products.length]);

  const visibleProducts = useMemo(() => products.slice(0, visibleCount), [products, visibleCount]);
  const hasMore = visibleCount < products.length;
  const handleLoadMore = useCallback(() => {
    setVisibleCount((current) => Math.min(current + increment, products.length));
  }, [increment, products.length]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className="rounded-full border border-[#111111]/15 bg-white px-5 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#fff8e8]"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}

export default memo(ProductGrid);
