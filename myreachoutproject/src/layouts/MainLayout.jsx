// I import React because I am creating a React component.
import React from "react";

// I import Navbar.
import Navbar from "../components/navigation/Navbar";

// I import Footer.
import Footer from "../components/layout/Footer";

// I create one layout used across every page.
// The next developer only changes this file once if every page layout changes.

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* I show the navigation first */}
      <Navbar />

      {/* I render every page here */}
      <main className="flex-1">
        {children}
      </main>

      {/* I finish with the footer */}
      <Footer />

    </div>
  );
}