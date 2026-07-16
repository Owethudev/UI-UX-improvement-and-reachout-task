import { useState } from "react";

import { useCart } from "../../context/CartContext";

export default function CouponBox() {
  const [inputValue, setInputValue] = useState("");
  const { couponCode, couponMessage, applyCoupon, resetCoupon } = useCart();

  const handleApply = (event) => {
    event.preventDefault();
    applyCoupon(inputValue);
  };

  return (
    <div className="rounded-[1.75rem] border border-black/10 bg-[#f7f7f2] p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-[#111111]">Coupon code</h3>
      <p className="mt-2 text-sm leading-7 text-[#4b5563]">Add a promo code for extra savings on premium electronics.</p>

      <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={handleApply}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter code"
          className="flex-1 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[#111111] outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
        />
        <button type="submit" className="rounded-full bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#e0bc45] hover:shadow-[0_14px_36px_rgba(212,175,55,0.28)]">
          Apply
        </button>
      </form>

      {(couponCode || couponMessage) && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#111111]">
          <span>{couponMessage || `Applied ${couponCode}`}</span>
          <button type="button" onClick={resetCoupon} className="font-semibold text-[#D4AF37]">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
