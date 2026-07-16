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
<<<<<<< Updated upstream
        <button type="submit" className="rounded-full bg-[#111111] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#111111]">
=======
        <button type="button" className="rounded-2xl bg-[#111111] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#111111]">
>>>>>>> Stashed changes
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
