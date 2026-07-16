// This footer closes the page with helpful brand and support information.
// It is easy to extend with more sections or legal links later.

import { ArrowRight, CreditCard, BadgeCheck, MapPin, Phone, ShieldCheck, Truck, MessagesSquare } from "lucide-react";

import PageContainer from "./PageContainer";

const supportLinks = ["FAQs", "Returns", "Shipping", "Warranty"];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-[#111111] text-white">
      <PageContainer>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xl font-black uppercase tracking-[0.3em] text-[#D4AF37]">MegaMall</h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/70">
              Premium electronics shopping for modern homes, studios, and workspaces.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/75">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Phone size={16} className="text-[#D4AF37]" />
              </div>
              <span>0800 555 1212</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-[0.24em] text-white">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {supportLinks.map((item) => (
                <li key={item} className="transition hover:text-[#D4AF37]">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-[0.24em] text-white">Visit</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2"><MapPin size={16} className="text-[#D4AF37]" /> 12 Electron Close , Kya Sand Randburg, Johannesburg South Africa 2163</li>
              <li className="flex items-center gap-2"><Truck size={16} className="text-[#D4AF37]" /> Next-day delivery</li>
              <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#D4AF37]" /> 2-year service coverage</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-[0.24em] text-white">Newsletter</h3>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-3">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-transparent bg-white px-3 py-2.5 text-sm text-[#111111] outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
              />
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 font-semibold text-[#111111] transition hover:bg-[#e0bc45]">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
            <div className="mt-5 flex items-center gap-3 text-white/70">
              <BadgeCheck size={16} className="transition hover:text-[#D4AF37]" />
              <MessagesSquare size={16} className="transition hover:text-[#D4AF37]" />
              <CreditCard size={16} className="transition hover:text-[#D4AF37]" />
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}