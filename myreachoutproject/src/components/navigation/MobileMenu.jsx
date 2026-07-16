import { X } from "lucide-react";

export default function MobileMenu({ open, onClose, items = [] }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="ml-auto flex h-full w-[85%] max-w-sm flex-col bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="text-lg font-black uppercase tracking-[0.3em] text-[#111111]">
            Mega<span className="text-[#D4AF37]">Mall</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[#111111] transition hover:bg-[#f7f7f2] hover:text-[#D4AF37]"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#fff8e8] hover:text-[#D4AF37]"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
