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

  const handleMobileDropdownToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setMobileDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="relative z-[70] overflow-visible border-b border-black/10 bg-[#222222] text-white shadow-[0_10px_30px_rgba(17,17,17,0.12)]">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
      <PageContainer>
        <div className="flex flex-col gap-3 py-3 sm:gap-3">
          <div className="flex items-center justify-between gap-2">
            <Link to="/" className="flex shrink-0 items-center gap-2 text-base font-black tracking-[0.24em] uppercase text-white sm:text-lg">
              <span>Mega</span>
              <span className="text-[#D4AF37]">Mall</span>
            </Link>

            <div className="hidden items-center gap-8 text-2xl font-semibold text-white/80 lg:flex">
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

            <div className="flex shrink-0 items-center gap-3 lg:hidden">
              <Link
                to="/cart"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-none transition hover:-translate-y-0.5 hover:text-[#D4AF37]"
              >
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white shadow-[0_8px_24px_rgba(17,17,17,0.08)]">
                  <img src={cartIcon} alt="Cart" className="h-4 w-4 object-contain" />
                </span>
                {itemCount > 0 && (
                  <span className={`absolute -right-1 -top-1 flex min-w-5 items-center justify-center rounded-full bg-[#D4AF37] px-1.5 py-0.5 text-[10px] font-semibold text-[#111111] ${pulseCart ? "animate-bounce" : ""}`}>
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:hidden">
            <div className="flex flex-wrap items-center gap-2">
              {mobilePrimaryLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-full bg-white/10 px-3 py-2 text-base font-semibold text-white/90 transition hover:bg-white/15 hover:text-[#D4AF37]"
                >
                  {item.label}
                </Link>
              ))}

              {mobileDropdownLinks.length > 0 && (
                <div className="relative z-[90]" data-mobile-nav-menu>
                  <button
                    type="button"
                    aria-expanded={mobileDropdownOpen}
                    aria-haspopup="menu"
                    onMouseDown={(event) => event.stopPropagation()}
                    onClick={handleMobileDropdownToggle}
                    className="rounded-full bg-white/10 px-3 py-2 text-base font-semibold tracking-[0.02em] text-white/80 transition hover:bg-white/15 hover:text-[#D4AF37]"
                  >
                    More
                  </button>

                  {mobileDropdownOpen && (
                    <div className="absolute left-0 top-full z-[120] mt-2 w-[min(16rem,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-[#1a1a1a] p-2 shadow-[0_18px_55px_rgba(17,17,17,0.12)]">
                      {mobileDropdownLinks.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setMobileDropdownOpen(false)}
                          className="block rounded-xl px-3 py-2 text-base font-semibold text-white/80 transition hover:bg-white/10 hover:text-[#D4AF37]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </PageContainer>
      <div className="h-10 w-full bg-gradient-to-b from-[#222222] via-[#222222]/80 to-[#fff8e8]" />
    </nav>
  );
}
