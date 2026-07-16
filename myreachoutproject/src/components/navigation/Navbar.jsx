import { useState } from "react";
import { Menu, Search, ShoppingBag, Heart } from "lucide-react";

import { Link } from "react-router-dom";

import PageContainer from "../layout/PageContainer";
import MobileMenu from "./MobileMenu";

const links = [
<<<<<<< Updated upstream
  { label: "Home", to: "/" },
  { label: "Search", to: "/search" },
  { label: "Wishlist", to: "/wishlist" },
  { label: "Cart", to: "/cart" },
=======
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/products" },
  { label: "Deals", href: "/products" },
>>>>>>> Stashed changes
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<<<<<<< Updated upstream
    <nav className="bg-white/95">
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

          <Link to="/search" className="rounded-full border border-[#111111] px-5 py-2.5 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#111111] hover:text-white focus-visible:outline-[#D4AF37]">
            Explore Deals
          </Link>
        </div>
      </PageContainer>
    </nav>
=======
    <>
      <nav className="border-b border-black/5 bg-white/85 backdrop-blur-xl">
        <PageContainer>
          <div className="flex h-20 items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-2 text-lg font-black uppercase tracking-[0.3em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50">
              <span className="text-[#111111]">Mega</span>
              <span className="text-[#D4AF37]">Mall</span>
            </a>

            <div className="hidden items-center gap-2 text-sm font-semibold text-[#4b5563] lg:flex">
              {links.map((item) => (
                <a key={item.label} href={item.href} className="rounded-full px-4 py-2.5 transition hover:bg-[#fff8e8] hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a href="/search" className="hidden items-center rounded-full border border-black/10 bg-[#f7f7f2] px-3.5 py-2.5 text-sm text-[#4b5563] shadow-sm transition hover:border-[#D4AF37] hover:text-[#D4AF37] sm:flex" aria-label="Open search">
                <Search size={16} className="mr-2 text-[#D4AF37]" />
                <span>Search</span>
              </a>
              <a href="/wishlist" className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#111111] shadow-sm transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50" aria-label="View wishlist">
                <Heart size={18} />
              </a>
              <a href="/cart" className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#111111] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50" aria-label="View cart">
                <ShoppingBag size={18} />
              </a>
              <button type="button" onClick={() => setMenuOpen(true)} className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#111111] shadow-sm transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 lg:hidden" aria-label="Open menu">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </PageContainer>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} items={links} />
    </>
>>>>>>> Stashed changes
  );
}