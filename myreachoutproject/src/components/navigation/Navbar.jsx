import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PageContainer from "../layout/PageContainer";
import { useCart } from "../../context/CartContext";

const links = [
  { label: "Home", to: "/" },
  { label: "Search", to: "/search" },
  { label: "clothing", to: "/sale" },
  { label: "Deals", to: "/products" },
  { label: "Family", to: "/kids" },
  { label: "Sports", to: "/sports" },
  { label: "Wishlist", to: "/wishlist" },
  { label: "Cart", to: "/cart" },
];

const mobilePrimaryLinks = links.filter((item) => ["Home", "Search", "clothing"].includes(item.label));
const mobileDropdownLinks = links.filter((item) => !["Home", "Search", "clothing"].includes(item.label));

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

  return (
    <nav className="border-b border-black/10 bg-white/95">
      <PageContainer>
        <div className="flex h-20 items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2 text-lg font-black tracking-[0.24em] uppercase">
            <span className="text-[#111111]">Mega</span>
            <span className="text-[#D4AF37]">Mall</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-semibold text-[#4b5563] lg:flex">
            {links.map((item) => (
              <Link key={item.label} to={item.to} className="transition hover:text-[#D4AF37]">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 overflow-x-auto lg:hidden">
            {mobilePrimaryLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-full px-3 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#fff8e8] hover:text-[#D4AF37]"
              >
                {item.label}
              </Link>
            ))}

            {mobileDropdownLinks.length > 0 && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMobileDropdownOpen((prev) => !prev)}
                  className="rounded-full border border-[#111111]/10 px-3 py-2 text-sm font-semibold text-[#111111] transition hover:border-[#D4AF37] hover:bg-[#fff8e8] hover:text-[#D4AF37]"
                >
                  More
                </button>

                {mobileDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 min-w-[10rem] rounded-2xl border border-black/10 bg-white p-2 shadow-[0_18px_55px_rgba(17,17,17,0.12)]">
                    {mobileDropdownLinks.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileDropdownOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm font-semibold text-[#4b5563] transition hover:bg-[#fff8e8] hover:text-[#D4AF37]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/search" className="hidden rounded-full border border-[#111111] px-5 py-2.5 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#fff8e8] hover:text-[#111111] hover:shadow-[0_12px_30px_rgba(17,17,17,0.08)] focus-visible:outline-[#D4AF37] sm:inline-flex">
              Explore Deals
            </Link>
            <Link to="/cart" className="relative flex h-11 w-11 items-center justify-center rounded-full border border-transparent bg-transparent text-[#111111] shadow-none transition hover:-translate-y-0.5 hover:text-[#D4AF37]">
              <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f7f2] shadow-[0_8px_24px_rgba(17,17,17,0.08)]">
                <img src="/src/assets/images/cart-icon.svg" alt="Cart" className="h-5 w-5 object-contain" />
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
    </nav>
  );
}
