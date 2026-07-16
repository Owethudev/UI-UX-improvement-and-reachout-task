import Button from "../ui/Button";

export default function OrderSummary() {
  const subtotal = 42998;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(17,17,17,0.06)]">
      <h2 className="text-xl font-semibold text-[#111111]">Order summary</h2>

      <div className="mt-6 space-y-4 text-sm text-[#4b5563]">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-medium text-[#111111]">${subtotal.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span className="font-medium text-[#111111]">{shipping === 0 ? "Free" : `$${shipping}`}</span>
        </div>
        <div className="flex items-center justify-between border-t border-black/10 pt-4 text-base font-semibold text-[#111111]">
          <span>Total</span>
          <span>${total.toLocaleString()}</span>
        </div>
      </div>

      <Button variant="gold" className="mt-6 w-full justify-center rounded-full px-5 py-3.5">
        Proceed to checkout
      </Button>
      <Button variant="outline" className="mt-3 w-full justify-center rounded-full px-5 py-3.5">
        Continue shopping
      </Button>
    </div>
  );
}
