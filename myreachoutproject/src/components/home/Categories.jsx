// This section showcases the most important product categories with large lifestyle imagery.
// The data is supplied from the shared categories file so the section can evolve easily.

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageContainer from "../layout/PageContainer";
import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories";

export default function Categories() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCategories = useMemo(() => {
    const maxVisible = 3;
    return [
      ...categories.slice(activeIndex, activeIndex + maxVisible),
      ...categories.slice(0, Math.max(0, maxVisible - Math.min(maxVisible, categories.length - activeIndex))),
    ];
  }, [activeIndex]);

  const moveLeft = () => {
    setActiveIndex((current) => (current === 0 ? categories.length - 1 : current - 1));
  };

  const moveRight = () => {
    setActiveIndex((current) => (current + 1) % categories.length);
  };

  const handleCategoryClick = (item) => {
    navigate("/grand-opening", { state: { selectedCategory: item.title } });
  };

  return (
    <section className="border-b border-black/10 bg-[linear-gradient(180deg,#fffdf7_0%,#fff8e8_100%)] py-8 sm:py-10">
      <PageContainer>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Featured categories
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Discover curated picks with a simple swipe of the arrows.
            </h2>
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={moveLeft}
            aria-label="Show previous categories"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-xl text-[#111111] shadow-sm transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            ←
          </button>

          <div className="flex flex-1 justify-center gap-4 overflow-x-auto pb-2 sm:gap-6">
            {visibleCategories.map((item, index) => (
              <div key={`${item.id}-${index}`} className="w-full min-w-[240px] max-w-[280px] flex-none sm:min-w-[260px]">
                <CategoryCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  className="h-full"
                  onClick={() => handleCategoryClick(item)}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={moveRight}
            aria-label="Show next categories"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-xl text-[#111111] shadow-sm transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            →
          </button>
        </div>

      </PageContainer>
    </section>
  );
}
