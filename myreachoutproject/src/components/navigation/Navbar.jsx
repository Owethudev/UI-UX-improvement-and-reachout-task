import { Link } from "react-router-dom";

import PageContainer from "../layout/PageContainer";

const links = [
  { label: "Home", to: "/" },
  { label: "Search", to: "/search" },
  { label: "Wishlist", to: "/wishlist" },
  { label: "Cart", to: "/cart" },
];

export default function Navbar() {
  return (
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
  );
}
