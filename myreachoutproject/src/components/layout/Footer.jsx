// This footer closes the page with helpful brand and support information.
// It is easy to extend with more sections or legal links later.

import PageContainer from "./PageContainer";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-[#111111] text-white">
      <PageContainer>
        <div className="grid gap-10 py-14 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-xl font-black tracking-[0.2em] text-[#D4AF37] uppercase">
              MegaMall
            </h2>
            <p className="max-w-xs text-sm leading-7 text-white/70">
              Premium electronics shopping for modern homes, studios, and workspaces.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Customer Support</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>FAQs</li>
              <li>Returns</li>
              <li>Shipping</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Newsletter</h3>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
              <input
                placeholder="Email address"
                className="w-full rounded-xl border border-transparent bg-white px-3 py-2.5 text-sm text-[#111111] outline-none"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}