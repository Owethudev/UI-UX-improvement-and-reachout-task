import { useEffect, useMemo, useState } from "react";

import PageContainer from "../components/layout/PageContainer";
import ProductGrid from "../components/product/ProductGrid";
import SearchBar from "../components/search/SearchBar";
import SearchOverlay from "../components/search/SearchOverlay";
import SearchSuggestions from "../components/search/SearchSuggestions";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { featuredProducts } from "../data/featuredProducts";

const searchCatalog = featuredProducts.map((product) => ({
  ...product,
  category: product.title.includes("TV") ? "Home" : product.title.includes("MacBook") ? "Computers" : product.title.includes("iPhone") ? "Mobiles" : "Electronics",
}));

export default function Search() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const suggestions = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    if (!searchText) return [];

    return searchCatalog.filter((item) => {
      const title = item.title.toLowerCase();
      const category = item.category.toLowerCase();
      return title.includes(searchText) || category.includes(searchText);
    });
  }, [query]);

  const visibleProducts = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    if (!searchText) return searchCatalog;

    return searchCatalog.filter((item) => {
      const title = item.title.toLowerCase();
      const category = item.category.toLowerCase();
      return title.includes(searchText) || category.includes(searchText);
    });
  }, [query]);

  useEffect(() => {
    if (!query.trim()) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 180);
    return () => window.clearTimeout(timer);
  }, [query]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClear = () => {
    setQuery("");
    setIsLoading(false);
  };

  const handleSelect = (item) => {
    setQuery(item.title);
    setOpen(false);
    setIsLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && suggestions[0]) {
      event.preventDefault();
      handleSelect(suggestions[0]);
    }
  };

  const handleGoToCart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.assign("/cart");
  };

  return (
    <section className="bg-[#f7f7f2] py-24 sm:py-28">
      <PageContainer>
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(17,17,17,0.06)] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Search</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">Find the perfect device quickly.</h1>
            </div>
            <button
              type="button"
              onClick={handleGoToCart}
              className="rounded-full border border-[#111111]/10 bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#222222]"
            >
              Go to cart
            </button>
          </div>
          <p className="mt-4 text-base leading-8 text-[#4b5563]">
            Live filtering, keyboard support, and a responsive interface make product discovery effortless.
          </p>

          <div className="mt-8 space-y-4">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3.5 text-left text-sm text-[#4b5563] shadow-sm"
            >
              Try searching for “iPhone”, “TV”, or “MacBook”
            </button>

            <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-4">
              <SearchBar
                value={query}
                onChange={handleQueryChange}
                onFocus={() => setOpen(true)}
                onKeyDown={handleKeyDown}
                onClear={handleClear}
              />
              <div className="mt-4">
                {isLoading ? <LoadingSpinner label="Filtering products" /> : <SearchSuggestions suggestions={suggestions} onSelect={handleSelect} query={query} />}
              </div>
            </div>
          </div>

          <div className="mt-8">
            {visibleProducts.length ? (
              <ProductGrid products={visibleProducts} />
            ) : (
              <div className="rounded-[2rem] border border-dashed border-black/15 bg-white p-8 text-center shadow-[0_12px_35px_rgba(17,17,17,0.04)]">
                <p className="text-lg font-semibold text-[#111111]">No products match your search.</p>
              </div>
            )}
          </div>
        </div>
      </PageContainer>

      <SearchOverlay
        open={open}
        query={query}
        onQueryChange={handleQueryChange}
        suggestions={suggestions}
        onSelect={handleSelect}
        onClose={() => setOpen(false)}
        onKeyDown={handleKeyDown}
      />
    </section>
  );
}
