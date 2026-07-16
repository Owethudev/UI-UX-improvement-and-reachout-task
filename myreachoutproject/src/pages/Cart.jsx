import { Link } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";
import CartItem from "../components/cart/CartItem";
import CouponBox from "../components/cart/CouponBox";
import OrderSummary from "../components/cart/OrderSummary";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <section className="bg-[#f7f7f2] py-24 sm:py-28">
      <PageContainer>
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Your bag</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">A premium checkout experience starts here.</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-black/15 bg-white p-10 text-center shadow-[0_16px_45px_rgba(17,17,17,0.04)]">
            <h2 className="text-2xl font-semibold text-[#111111]">Your cart is empty</h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-8 text-[#4b5563]">
              Choose a featured device to add it to your bag and continue to checkout.
            </p>
            <Link to="/" className="mt-6 inline-flex rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#111111]">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <CouponBox />
            </div>

            <div className="space-y-6 lg:sticky lg:top-24">
              <OrderSummary />
            </div>
          </div>
        )}
      </PageContainer>
    </section>
  );
}
