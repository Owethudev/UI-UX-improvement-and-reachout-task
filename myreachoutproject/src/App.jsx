import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ComingSoon from "./pages/ComingSoon";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/Products";
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import GrandOpeningSignup from "./pages/GrandOpeningSignup";

function App() {
  return (
    <MainLayout>
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
    </MainLayout>
  );
}

export default App;