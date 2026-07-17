import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

import cartIcon from "../../assets/images/cart-icon.svg";
import PageContainer from "../layout/PageContainer";
import { useCart } from "../../context/CartContext";
import MobileMenu from "./MobileMenu";

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

export default function Navbar() {
  const { cartItems } = useCart();
  const location = useLocation();
  const [pulseCart, setPulseCart] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    if (!itemCount) return;
    setPulseCart(true);
    const timer = window.setTimeout(() => setPulseCart(false), 500);
    return () => window.clearTimeout(timer);
  }, [itemCount]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="relative z-[70] overflow-visible border-b border-black/10 bg-[#222222] text-white shadow-[0_10px_30px_rgba(17,17,17,0.12)]">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
        <PageContainer>
          <div className="flex flex-col gap-3 py-3 sm:gap-3">
            <div className="flex items-center justify-between gap-2">
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

              <div className="flex shrink-0 items-center gap-2 lg:hidden">
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

                <button
                  type="button"
                  onClick={handleMobileMenuToggle}
                  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileMenuOpen}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:-translate-y-0.5 hover:text-[#D4AF37]"
                >
                  <Menu size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </PageContainer>
        <div className="h-10 w-full bg-gradient-to-b from-[#222222] via-[#222222]/80 to-[#fff8e8]" />
      </nav>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} items={links} />
    </>
  );
}
