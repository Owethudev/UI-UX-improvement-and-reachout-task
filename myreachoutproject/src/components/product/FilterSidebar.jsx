const categories = ["All", "Mobiles", "Gaming", "Home", "Fitness"];
const priceRanges = ["All", "Under R 10k", "Under R 20k", "Premium"];

export default function FilterSidebar({ activeCategory, onCategoryChange, selectedPrice, onPriceChange, mobile = false, isOpen = true, onClose }) {
  const content = (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Categories</h3>
        <div className="mt-4 space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#111111] text-white shadow-lg shadow-black/10"
                  : "bg-[#f5f5f0] text-[#4b5563] hover:bg-[#eceae1]"
              }`}
            >
              <span>{category}</span>
              <span className="text-xs opacity-70">{category === "All" ? "↺" : "→"}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Price range</h3>
        <div className="mt-4 space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => onPriceChange(range)}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                selectedPrice === range
                  ? "bg-[#111111] text-white shadow-lg shadow-black/10"
                  : "bg-[#f5f5f0] text-[#4b5563] hover:bg-[#eceae1]"
              }`}
            >
              <span>{range}</span>
              <span className="text-xs opacity-70">{range === "All" ? "•" : "R"}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  if (mobile) {
    return (
      <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
        <button
          type="button"
          onClick={onClose}
          className="absolute inset-0 bg-black/30"
          aria-label="Close filters"
        />
        <aside className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#111111]">Filter products</h2>
            <button type="button" onClick={onClose} className="text-sm font-semibold text-[#111111]">
              Close
            </button>
          </div>
          <div className="mt-8">{content}</div>
        </aside>
      </div>
    );
  }

  return (
    <aside className="hidden rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(17,17,17,0.05)] lg:block">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#111111]">Filters</h2>
        <span className="text-sm text-[#4b5563]">Refine</span>
      </div>
      <div className="mt-8">{content}</div>
    </aside>
  );
}
