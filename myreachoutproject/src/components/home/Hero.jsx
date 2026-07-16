// This hero section introduces the redesigned storefront with a premium headline and CTA.
// Another developer can extend it by swapping in a new image or changing the featured copy.

import PageContainer from "../layout/PageContainer";
import heroImage from "../../assets/images/hero/hero-banner.webp";

export default function Hero() {
  return (
    <section className="bg-[linear-gradient(135deg,#ffffff_0%,#fff9e8_100%)] py-20 sm:py-24 lg:py-28">
      <PageContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Premium Electronics
            </p>
            <h1 className="mt-5 text-4xl font-black leading-[0.95] text-[#111111] sm:text-5xl lg:text-7xl">
              Shop smarter.
              <br />
              Live better.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#4b5563]">
              Discover premium televisions, flagship phones, gaming consoles, laptops,
              and kitchen essentials in a calm, modern shopping experience.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:text-[#111111]"
              >
                Explore Deals
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[#111111] px-7 py-3.5 text-sm font-semibold text-[#111111] transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                View Collections
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] bg-[#D4AF37]/20 blur-3xl" />
            <img
              src={heroImage}
              alt="Premium electronics display"
              className="relative w-full rounded-[2rem] border border-black/10 object-cover shadow-[0_40px_120px_rgba(17,17,17,0.12)]"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}