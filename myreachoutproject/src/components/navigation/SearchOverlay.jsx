import { useEffect } from "react";

import SearchBar from "../search/SearchBar";
import SearchSuggestions from "../search/SearchSuggestions";

export default function SearchOverlay({ open, query, onQueryChange, suggestions, onSelect, onClose, onKeyDown }) {
  useEffect(() => {
    if (!open) return;

    const handler = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/45 px-4 py-8 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Search products">
      <div className="mx-auto flex max-w-2xl flex-col gap-4 rounded-[2.5rem] border border-black/10 bg-[#f7f7f2] p-4 shadow-2xl sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#111111]">Search</h2>
          <button type="button" onClick={onClose} className="rounded-full px-3 py-2 text-sm font-semibold text-[#111111] transition hover:bg-white hover:text-[#D4AF37]">
            Close
          </button>
        </div>

        <SearchBar
          value={query}
          onChange={onQueryChange}
          onFocus={() => {}}
          onKeyDown={onKeyDown}
          onClear={() => onQueryChange({ target: { value: "" } })}
          placeholder="Search phones, TVs, laptops, and more"
        />

        <SearchSuggestions suggestions={suggestions} onSelect={onSelect} query={query} />
      </div>
    </div>
  );
}
