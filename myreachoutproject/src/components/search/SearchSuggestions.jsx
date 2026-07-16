export default function SearchSuggestions({ suggestions, onSelect, query }) {
  if (!query) return null;

  if (!suggestions.length) {
    return (
      <div className="rounded-[1.5rem] border border-black/10 bg-white p-5 text-sm text-[#4b5563] shadow-sm">
        No products match “{query}”.
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-black/10 bg-white p-2 shadow-sm">
      {suggestions.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item)}
          className="flex w-full items-center justify-between rounded-[1rem] px-4 py-3 text-left transition hover:bg-[#f7f7f2]"
        >
          <span className="font-medium text-[#111111]">{item.title}</span>
          <span className="text-sm text-[#4b5563]">{item.category}</span>
        </button>
      ))}
    </div>
  );
}
