import { Link } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";

const deals = [
  { title: "Flash bundles", text: "Save up to 25% on curated device pairings." },
  { title: "Weekend exclusives", text: "Premium accessories and home upgrades at limited pricing." },
  { title: "Member pricing", text: "Unlock extra savings when you join the loyalty program." },
];

export default function Sale() {
  return (
    <section className="bg-[#f7f7f2] py-24 sm:py-28">
      <PageContainer>
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(17,17,17,0.06)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Sale</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">Limited-time offers for smarter upgrades.</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#4b5563]">
            Shop the seasonal window for premium tech, home essentials, and delivery-ready bundles.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {deals.map((deal) => (
              <div key={deal.title} className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-6">
                <h2 className="text-xl font-semibold text-[#111111]">{deal.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#4b5563]">{deal.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/products" className="rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              Shop featured deals
            </Link>
            <Link to="/" className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]">
              Return home
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
