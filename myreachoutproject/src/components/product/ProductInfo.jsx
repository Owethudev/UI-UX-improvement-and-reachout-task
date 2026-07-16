import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Rating from "../ui/Rating";
import { useCart } from "../../context/CartContext";

export default function ProductInfo({ product }) {
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const saved = isWishlisted(product.id);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Featured device</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#111111] sm:text-4xl">{product.title}</h1>
        <p className="mt-4 text-base leading-8 text-[#4b5563]">{product.description}</p>
      </div>

      <div className="flex items-center gap-3 text-sm text-[#4b5563]">
        <Rating value={product.rating} />
        <span>•</span>
        <span>{product.reviews} verified reviews</span>
      </div>

      <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#4b5563]">From</p>
            <p className="mt-1 text-3xl font-semibold text-[#111111]">${product.price.toLocaleString()}</p>
          </div>
          <span className="rounded-full bg-[#D4AF37]/15 px-3 py-1 text-sm font-semibold text-[#111111]">
            Free delivery
          </span>
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-[0_12px_35px_rgba(17,17,17,0.04)]">
        <div className="flex items-center gap-2 text-sm text-[#4b5563]">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
          <span>Includes warranty, support, and easy returns.</span>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button variant="gold" className="flex-1 justify-center rounded-full px-5 py-3.5" onClick={() => addToCart(product, 1)}>
            Add to cart
          </Button>
          <Button variant="outline" className="flex-1 justify-center rounded-full px-5 py-3.5" onClick={() => {
            toggleWishlist(product);
            navigate("/wishlist");
          }}>
            {saved ? "Saved" : "Save for later"}
          </Button>
        </div>
      </div>
    </div>
  );
}
