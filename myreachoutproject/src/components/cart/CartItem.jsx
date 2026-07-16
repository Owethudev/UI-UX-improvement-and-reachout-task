import Button from "../ui/Button";

export default function CartItem({ item }) {
  return (
    <div className="flex flex-col gap-4 rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-[0_16px_45px_rgba(17,17,17,0.05)] sm:flex-row sm:items-center">
      <img src={item.image} alt={item.title} className="h-24 w-full rounded-[1rem] object-cover sm:h-24 sm:w-24" />

      <div className="flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-[#111111]">{item.title}</h3>
            <p className="mt-1 text-sm text-[#4b5563]">{item.subtitle}</p>
          </div>
          <p className="text-lg font-semibold text-[#111111]">${item.price.toLocaleString()}</p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-[#f7f7f2] px-3 py-2 text-sm text-[#4b5563]">
            <button type="button" className="h-6 w-6 rounded-full bg-white text-lg leading-none">−</button>
            <span className="min-w-5 text-center">{item.quantity}</span>
            <button type="button" className="h-6 w-6 rounded-full bg-white text-lg leading-none">+</button>
          </div>
          <button type="button" className="text-sm font-semibold text-[#111111] transition hover:text-[#D4AF37]">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
