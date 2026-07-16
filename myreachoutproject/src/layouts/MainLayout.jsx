// This is the shared shell for every page.
// It keeps the navigation, content area, and footer consistent across the redesign.

import { useEffect, useState } from "react";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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