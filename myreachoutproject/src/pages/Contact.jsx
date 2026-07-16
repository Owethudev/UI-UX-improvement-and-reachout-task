import { Link } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";

export default function Contact() {
  return (
    <section className="bg-[#f7f7f2] py-24 sm:py-28">
      <PageContainer>
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(17,17,17,0.06)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Contact</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">Need help with a purchase, return, or styling question?</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#4b5563]">
            Reach our support team and we will help you pick the right device, gift, or bundle.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-6">
              <h2 className="text-xl font-semibold text-[#111111]">Email</h2>
              <a href="mailto:hello@megamall.example" className="mt-3 block text-sm text-[#4b5563] transition hover:text-[#D4AF37]">
                hello@megamall.example
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-6">
              <h2 className="text-xl font-semibold text-[#111111]">Phone</h2>
              <a href="tel:+18005550199" className="mt-3 block text-sm text-[#4b5563] transition hover:text-[#D4AF37]">
                +1 (800) 555-0199
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="mailto:hello@megamall.example" className="rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              Send us an email
            </a>
            <Link to="/" className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]">
              Head back home
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
