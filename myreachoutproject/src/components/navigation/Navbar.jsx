import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import cartIcon from "../../assets/images/cart-icon.svg";
import PageContainer from "../layout/PageContainer";
import { useCart } from "../../context/CartContext";

const links = [
  { label: "Home", to: "/" },
  { label: "Search", to: "/search" },
  { label: "Deals", to: "/products" },
  { label: "clothing", to: "/sale" },
  { label: "Family", to: "/kids" },
  { label: "Sports", to: "/kids" },
  { label: "Wishlist", to: "/wishlist" },
  { label: "Cart", to: "/cart" },
];

const mobilePrimaryLinks = links.filter((item) => ["Home", "Search"].includes(item.label));
const mobileDropdownLinks = links.filter((item) => !["Home", "Search"].includes(item.label));

export default function Navbar() {
  const { cartItems } = useCart();
  const [pulseCart, setPulseCart] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    if (!itemCount) return;
    setPulseCart(true);
    const timer = window.setTimeout(() => setPulseCart(false), 500);
    return () => window.clearTimeout(timer);
  }, [itemCount]);

  useEffect(() => {
    if (!mobileDropdownOpen) return;

    const handlePointerDown = (event) => {
      if (event.target.closest("[data-mobile-nav-menu]")) return;
      setMobileDropdownOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [mobileDropdownOpen]);

  return (
    <nav className="overflow-x-hidden border-b border-black/10 bg-[#222222] text-white shadow-[0_10px_30px_rgba(17,17,17,0.12)]">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
      <PageContainer>
        <div className="flex min-h-20 items-center justify-between gap-2 py-3 sm:gap-3">
          <Link to="/" className="flex shrink-0 items-center gap-2 text-base font-black tracking-[0.24em] uppercase text-white sm:text-lg">
            <span>Mega</span>
            <span className="text-[#D4AF37]">Mall</span>
          </Link>

          <div className="hidden items-center gap-8 text-lg font-semibold text-white/80 lg:flex">
            {links.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="group relative px-1 py-2 transition duration-300 hover:text-[#D4AF37]"
              >
                <span>{item.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 rounded-full bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto px-1 py-1 lg:hidden">
            {mobilePrimaryLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="shrink-0 rounded-full px-2.5 py-2 text-[11px] font-semibold text-white/90 transition hover:text-[#D4AF37] sm:px-3 sm:text-sm"
              >
                {item.label}
              </Link>
            ))}

            {mobileDropdownLinks.length > 0 && (
              <div className="relative z-50 shrink-0" data-mobile-nav-menu>
                <button
                  type="button"
                  aria-expanded={mobileDropdownOpen}
                  aria-haspopup="menu"
                  onClick={() => setMobileDropdownOpen((prev) => !prev)}
                  className="rounded-full px-2.5 py-2 text-[11px] font-semibold tracking-[0.02em] text-white/80 transition hover:text-[#D4AF37] sm:px-3 sm:text-sm"
                >
                  More
                </button>

                {mobileDropdownOpen && (
                  <div className="absolute right-0 top-full z-[60] mt-2 min-w-[10rem] rounded-2xl border border-white/10 bg-[#1a1a1a] p-2 shadow-[0_18px_55px_rgba(17,17,17,0.12)]">
                    {mobileDropdownLinks.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileDropdownOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-[#D4AF37]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              to="/cart"
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-none transition hover:-translate-y-0.5 hover:text-[#D4AF37] sm:h-11 sm:w-11"
            >
              <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white shadow-[0_8px_24px_rgba(17,17,17,0.08)] sm:h-10 sm:w-10">
                <img src={cartIcon} alt="Cart" className="h-4 w-4 object-contain sm:h-5 sm:w-5" />
              </span>
              {itemCount > 0 && (
                <span className={`absolute -right-1 -top-1 flex min-w-5 items-center justify-center rounded-full bg-[#D4AF37] px-1.5 py-0.5 text-[10px] font-semibold text-[#111111] ${pulseCart ? "animate-bounce" : ""}`}>
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </PageContainer>
      <div className="h-10 w-full bg-gradient-to-b from-[#222222] via-[#222222]/80 to-[#fff8e8]" />
    </nav>
  );
}
