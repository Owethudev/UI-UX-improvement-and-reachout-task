// I use this shared layout to wrap every page with the same navigation, content area, footer, and scroll-to-top action.
// If I want to change the shell later, I can do it once here and it will reflect across the app.
import { useCallback, useEffect, useState } from "react";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const handleScroll = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        setShowScrollTop(window.scrollY > 300);
        frameId = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f1] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl">
        <Navbar />
      </header>

      <main className="flex-1">{children}</main>

      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#d4a017] bg-[#d4a017] text-xl text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#b88200] hover:shadow-xl"
        >
          ↑
        </button>
      )}

      <Footer />
    </div>
  );
}