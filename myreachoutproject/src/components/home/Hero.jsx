// I use this hero section to introduce the storefront with my headline, supporting copy, and main call-to-action.
// If I want to change the messaging or image later, I can update the content here without affecting the rest of the page.

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import PageContainer from "../layout/PageContainer";
import OptimizedImage from "../ui/OptimizedImage";
import heroImage from "../../assets/images/hero/hero-banner.webp";

export default function Hero() {
  // I keep a reference to the hero image so I can update its transform without forcing a React rerender.
  const imageRef = useRef(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = heroImage;
    preloadLink.fetchPriority = "high";
    document.head.appendChild(preloadLink);

    return () => {
      preloadLink.remove();
    };
  }, []);

  // I use this effect to make the hero image feel slightly parallax-like as I scroll, while keeping the update efficient.
  useEffect(() => {
    const updateImageTransform = () => {
      if (!imageRef.current) return;

      const offset = Math.min(window.scrollY * 0.14, 24);
      const scale = 1 + Math.min(window.scrollY * 0.00012, 0.04);
      imageRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(${scale})`;
    };

    const handleScroll = () => {
      if (frameRef.current) return;

      frameRef.current = window.requestAnimationFrame(() => {
        updateImageTransform();
        frameRef.current = 0;
      });
    };

    updateImageTransform();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-[linear-gradient(135deg,#ffffff_0%,#fff9e8_100%)] py-20 sm:py-24 lg:py-28">
      <PageContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative max-w-2xl overflow-hidden rounded-[2rem] px-2 py-2 sm:px-4 sm:py-4 lg:overflow-visible lg:px-0 lg:py-0">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2rem] lg:hidden">
              <OptimizedImage
                src={heroImage}
                alt=""
                width={1600}
                height={1200}
                loading="eager"
                priority={false}
                className="h-full w-full scale-[1.15] object-cover opacity-20 blur-[38px]"
              />
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_65%)]" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Premium Shopping Experience
            </p>
            <h1 className="mt-5 text-4xl font-black leading-[0.95] text-[#111111] sm:text-5xl lg:text-7xl">
              Shop smarter.
              <br />
              Live better.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#4b5563]">
              Discover premium appliances, sports equipment, tools, furniture, televisions, flagship phones, gaming consoles, laptops,
              and kitchen essentials in a calm, modern shopping experience.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/search"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#111111] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e0bc45] hover:shadow-[0_14px_36px_rgba(212,175,55,0.28)]"
              >
                Explore Deals
              </Link>
              
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] bg-[#D4AF37]/20 blur-3xl" />
            <OptimizedImage
              ref={imageRef}
              src={heroImage}
              alt="Premium electronics display"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              priority
              srcSet={`${heroImage} 1600w`}
              sizes="(max-width: 1024px) 100vw, 50vw"
              width={1600}
              height={1200}
              style={{ willChange: "transform" }}
              className="relative w-full rounded-[2rem] border border-black/10 object-cover shadow-[0_40px_120px_rgba(17,17,17,0.12)] transition-transform duration-200 ease-out"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
