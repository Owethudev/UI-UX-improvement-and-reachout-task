import { useEffect, useMemo, useState } from "react";

import ProductCard from "./ProductCard";

export default function ProductGrid({ products, initialCount = 4, increment = 4 }) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  useEffect(() => {
    setVisibleCount(initialCount);
  }, [initialCount, products]);

  const visibleProducts = useMemo(() => products.slice(0, visibleCount), [products, visibleCount]);
  const hasMore = visibleCount < products.length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((current) => Math.min(current + increment, products.length))}
            className="rounded-full border border-[#111111]/15 bg-white px-5 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#fff8e8]"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
