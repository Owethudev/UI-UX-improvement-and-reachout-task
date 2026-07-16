import { Link } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";

export default function NotFound() {
  return (
    <section className="bg-[#f7f7f2] py-20 sm:py-24">
      <PageContainer>
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-black/10 bg-white p-10 text-center shadow-[0_18px_50px_rgba(17,17,17,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">404</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#111111] sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base leading-8 text-[#4b5563]">
            The page you are looking for is unavailable or may have moved. Return to the storefront to continue exploring.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#111111]">
              Back to home
            </Link>
            <Link to="/search" className="rounded-full border border-[#111111] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white">
              Search products
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
