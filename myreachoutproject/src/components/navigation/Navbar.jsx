// This navbar provides the premium top-level experience for the store.
// It is intentionally simple so it can be reused and extended later.

import PageContainer from "../layout/PageContainer";

const links = ["Home", "Products", "Categories", "Deals"];

export default function Navbar() {
  return (
    <nav className="bg-white/95">
      <PageContainer>
        <div className="flex h-20 items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 text-lg font-black tracking-[0.24em] uppercase">
            <span className="text-[#111111]">Mega</span>
            <span className="text-[#D4AF37]">Mall</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-[#4b5563] lg:flex">
            {links.map((item) => (
              <a key={item} href="/" className="transition hover:text-[#D4AF37]">
                {item}
              </a>
            ))}
          </div>

          <button className="rounded-full border border-[#111111] px-5 py-2.5 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#111111] hover:text-white focus-visible:outline-[#D4AF37]">
            Explore Deals
          </button>
        </div>
      </PageContainer>
    </nav>
  );
}