export default function CouponBox() {
  return (
    <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-5">
      <h3 className="text-lg font-semibold text-[#111111]">Coupon code</h3>
      <p className="mt-2 text-sm leading-7 text-[#4b5563]">Add a promo code for extra savings on premium electronics.</p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Enter code"
          className="flex-1 rounded-full border border-black/10 bg-white px-4 py-3 text-sm text-[#111111] outline-none focus:border-[#D4AF37]"
        />
        <button type="button" className="rounded-full bg-[#111111] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#111111]">
          Apply
        </button>
      </div>
    </div>
  );
}
