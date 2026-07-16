import { Link } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";

export default function ComingSoon() {
  return (
    <section className="bg-[#f7f7f2] py-24 sm:py-28">
      <PageContainer>
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-black/10 bg-white p-8 text-center shadow-[0_18px_50px_rgba(17,17,17,0.06)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Coming soon</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">A fresh shopping experience is on the way.</h1>
          <p className="mt-4 text-base leading-8 text-[#4b5563]">
            We are getting ready to bring more of the mall experience to our store, with exciting new categories and everyday essentials soon to arrive.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#e0bc45] hover:shadow-[0_14px_36px_rgba(212,175,55,0.28)]">
              Back to home
            </Link>
            <Link to="/search" className="rounded-full border border-[#111111] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#fff8e8] hover:text-[#111111]">
              Explore what’s available now
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
