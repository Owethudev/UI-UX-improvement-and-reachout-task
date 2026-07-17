// I use this file to define the app's route structure and to keep my page transitions lightweight.
// If I want to add a new page later, I can add another lazy-loaded route here without changing the layout.
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const ProductsPage = lazy(() => import("./pages/Products"));
const Search = lazy(() => import("./pages/Search"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const GrandOpeningSignup = lazy(() => import("./pages/GrandOpeningSignup"));

function App() {
  // I track the current location so I can reset the scroll position whenever I move between pages.
  const location = useLocation();

  // I use this effect to make sure each route starts at the top of the page when I navigate.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <MainLayout>
      <Suspense fallback={<div className="min-h-screen bg-[#f7f7f1]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/sale" element={<ComingSoon />} />
          <Route path="/kids" element={<ComingSoon />} />
          <Route path="/careers" element={<ComingSoon />} />
          <Route path="/contact" element={<ComingSoon />} />
          <Route path="/grand-opening" element={<GrandOpeningSignup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;