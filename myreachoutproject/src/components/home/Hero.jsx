// This hero section introduces the redesigned storefront with a premium headline and CTA.
// Another developer can extend it by swapping in a new image or changing the featured copy.

<<<<<<< Updated upstream
import { Link } from "react-router-dom";
=======
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
>>>>>>> Stashed changes

import PageContainer from "../layout/PageContainer";
import heroImage from "../../assets/images/hero/hero-banner.webp";

export default function Hero() {
  return (
    <section className="bg-[linear-gradient(135deg,#ffffff_0%,#fff9e8_100%)] py-24 sm:py-28 lg:py-32">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37] shadow-sm">
              <Sparkles size={14} />
              Premium Electronics
            </div>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">
              Shop smarter.
              <br />
              Live better.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#4b5563] sm:text-lg">
              Discover premium televisions, flagship phones, gaming consoles, laptops, and kitchen essentials in a calm, modern shopping experience.
            </p>

<<<<<<< Updated upstream
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/search"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:text-[#111111]"
              >
                Explore Deals
              </Link>
              <Link
                to="/wishlist"
                className="inline-flex items-center justify-center rounded-full border border-[#111111] px-7 py-3.5 text-sm font-semibold text-[#111111] transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
=======
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/products" className="inline-flex items-center justify-center rounded-2xl bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(17,17,17,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:text-[#111111]">
                Explore Deals
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="/" className="inline-flex items-center justify-center rounded-2xl border border-[#111111]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#111111] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]">
>>>>>>> Stashed changes
                View Collections
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#4b5563]">
              <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" />
                <span>Secure delivery</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" />
                <span>Extended warranty</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] bg-[#D4AF37]/20 blur-3xl" />
            <img
              src={heroImage}
              alt="Premium electronics display"
              className="relative w-full rounded-[2rem] border border-black/10 object-cover shadow-[0_40px_120px_rgba(17,17,17,0.12)]"
            />
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}