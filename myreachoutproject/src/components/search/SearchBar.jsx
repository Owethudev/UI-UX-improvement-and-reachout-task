import { useEffect, useRef } from "react";

export default function SearchBar({ value, onChange, onFocus, onKeyDown, onClear, placeholder = "Search products" }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-3 shadow-sm">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#4b5563]" aria-hidden="true">
        <path d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-[#111111] outline-none placeholder:text-[#4b5563]"
        aria-label="Search products"
      />

      {value ? (
        <button type="button" onClick={onClear} className="text-sm font-semibold text-[#111111]" aria-label="Clear search">
          Clear
        </button>
      ) : null}
    </div>
  );
}
