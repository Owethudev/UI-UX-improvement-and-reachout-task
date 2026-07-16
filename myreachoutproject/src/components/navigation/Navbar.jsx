import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PageContainer from "../layout/PageContainer";
import { useCart } from "../../context/CartContext";

const links = [
  { label: "Home", to: "/" },
  { label: "Search", to: "/search" },
  { label: "Shopping", to: "/sale" },
  { label: "Deals", to: "/products" },
  { label: "Family", to: "/kids" },
  { label: "Sports", to: "/sports" },
  { label: "Wishlist", to: "/wishlist" },
  { label: "Cart", to: "/cart" },
];

export default function Navbar() {
  const { cartItems } = useCart();
  const [pulseCart, setPulseCart] = useState(false);
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
        <div className="flex h-20 items-center justify-between gap-4">
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

          <div className="flex items-center gap-3">
            <Link to="/search" className="rounded-full border border-[#111111] px-5 py-2.5 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#fff8e8] hover:text-[#111111] hover:shadow-[0_12px_30px_rgba(17,17,17,0.08)] focus-visible:outline-[#D4AF37]">
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
