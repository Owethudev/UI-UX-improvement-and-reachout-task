import { useNavigate } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";
import Button from "../components/ui/Button";

function Checkout() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f7f7f2] py-16 sm:py-20">
      <PageContainer>
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-black/10 bg-white p-8 text-center shadow-[0_18px_50px_rgba(17,17,17,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Checkout</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#111111] sm:text-4xl">Payment gateway is coming soon.</h1>
          <p className="mt-4 text-base leading-8 text-[#4b5563]">
            Your order is safe in the cart while we finish the payment experience. We will connect secure checkout soon.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="gold" className="justify-center px-6 py-3.5" onClick={() => navigate("/cart")}>
              Take me back to cart
            </Button>
            <Button variant="outline" className="justify-center px-6 py-3.5" onClick={() => navigate("/")}>
              Continue shopping
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default Checkout;
