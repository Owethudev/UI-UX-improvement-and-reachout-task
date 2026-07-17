// This component renders a premium product card.
// It keeps the UI reusable and easy to extend with new product details.

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Rating from "../ui/Rating";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);
  const wishlistActive = isWishlisted(product.id);

  const handleBuyNow = () => {
    addToCart(product, 1);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    navigate("/cart", { replace: false });
  };

  const handleCardToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleActionClick = (event, callback) => {
    event.stopPropagation();
    callback();
  };

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <article
      onClick={handleCardToggle}
      className={`group cursor-pointer overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_18px_55px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(17,17,17,0.12)] motion-safe:transform-gpu ${isExpanded ? "ring-2 ring-[#D4AF37]/40" : ""}`}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-[4/3] w-full object-cover transition duration-700 motion-safe:group-hover:scale-105"
        />

        <div className="absolute left-4 top-4">
          <Badge>{product.badge}</Badge>
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full ${wishlistActive ? "bg-[#D4AF37] text-white" : "bg-white/90 text-[#111111]"} shadow-md transition hover:scale-105 hover:text-[#D4AF37] focus-visible:outline-[#D4AF37]`}
        >
          ♡
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#111111]">{product.title}</h3>
          <span className="text-sm font-semibold text-[#D4AF37]">Save 10%</span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-[#4b5563]">
          <Rating value={product.rating} />
          <span>•</span>
          <span>Free delivery</span>
        </div>

        <div className="mt-6 flex items-center justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#4b5563]">From</p>
            <p className="text-xl font-bold text-[#111111]">R{product.price.toLocaleString()}</p>
          </div>
        </div>

        <div className={`mt-4 overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-wrap justify-end gap-2">
            <Button
              variant="gold"
              className="rounded-full px-3.5 py-2 text-sm hover:-translate-y-0.5"
              onClick={(event) => handleActionClick(event, handleAddToCart)}
            >
              Add to cart
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-3.5 py-2 text-sm hover:-translate-y-0.5"
              onClick={(event) => handleActionClick(event, handleBuyNow)}
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
