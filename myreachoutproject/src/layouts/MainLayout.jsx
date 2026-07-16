// This is the shared shell for every page.
// It keeps the navigation, content area, and footer consistent across the redesign.

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f7f7f1] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl">
        <Navbar />
      </header>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}