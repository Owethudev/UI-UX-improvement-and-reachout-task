// This component renders a premium product card.
// It keeps the UI reusable and easy to extend with new product details.

import { useNavigate } from "react-router-dom";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Rating from "../ui/Rating";
import { useCart } from "../../context/CartContext";

import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const wishlistActive = isWishlisted(product.id);

  const handleBuyNow = () => {
    addToCart(product, 1);
    navigate("/cart");
  };

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_20px_60px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(17,17,17,0.14)] motion-safe:transform-gpu">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-[4/3] w-full object-cover transition duration-700 motion-safe:group-hover:scale-105"
        />

        <div className="absolute left-4 top-4">
          <Badge>{product.badge}</Badge>
        </div>

<<<<<<< Updated upstream
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full ${wishlistActive ? "bg-[#D4AF37] text-white" : "bg-white/90 text-[#111111]"} shadow-md transition hover:scale-105 hover:text-[#D4AF37] focus-visible:outline-[#D4AF37]`}
        >
          ♡
=======
        <button type="button" aria-label={`Save ${product.title} for later`} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#111111] shadow-md transition hover:scale-105 hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50">
          <Heart size={16} />
>>>>>>> Stashed changes
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-[#111111]">{product.title}</h3>
            <p className="mt-2 text-sm text-[#4b5563]">{product.category || "Premium collection"}</p>
          </div>
          <span className="rounded-full bg-[#fff8e8] px-3 py-1 text-sm font-semibold text-[#D4AF37]">Save 10%</span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-[#4b5563]">
          <Rating value={product.rating} />
          <span className="text-black/30">•</span>
          <span>Free delivery</span>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#4b5563]">From</p>
            <p className="text-xl font-bold text-[#111111]">R {product.price.toLocaleString()}</p>
          </div>

<<<<<<< Updated upstream
          <Button variant="outline" className="rounded-full px-4 py-2.5 text-sm hover:-translate-y-0.5" onClick={handleBuyNow}>
            Buy now
=======
          <Button type="button" variant="gold" className="rounded-xl px-4 py-2.5 text-sm hover:-translate-y-0.5">
            Add to cart
>>>>>>> Stashed changes
          </Button>
        </div>
      </div>
    </article>
  );
}
