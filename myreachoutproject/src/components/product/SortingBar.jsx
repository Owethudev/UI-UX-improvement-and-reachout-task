import Button from "../ui/Button";

export default function SortingBar({ resultCount, sortBy, onSortChange, onOpenFilters }) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-[1.5rem] border border-black/10 bg-white p-4 shadow-[0_12px_35px_rgba(17,17,17,0.04)] sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Catalog</p>
        <p className="mt-1 text-sm text-[#4b5563]">Showing {resultCount} premium picks</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button variant="outline" className="rounded-full px-4 py-2.5 text-sm lg:hidden" onClick={onOpenFilters}>
          Filters
        </Button>

        <label className="flex items-center gap-2 text-sm text-[#4b5563]">
          <span className="font-medium">Sort by</span>
          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="rounded-full border border-black/10 bg-[#f7f7f2] px-3 py-2 text-sm text-[#111111] focus:border-[#D4AF37] focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </label>
      </div>
    </div>
  );
}
