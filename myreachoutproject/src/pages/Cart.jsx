import PageContainer from "../components/layout/PageContainer";
import CartItem from "../components/cart/CartItem";
import CouponBox from "../components/cart/CouponBox";
import OrderSummary from "../components/cart/OrderSummary";
import { featuredProducts } from "../data/featuredProducts";

const cartItems = [
  {
    id: 1,
    title: "Apple iPhone 16 Pro",
    subtitle: "Titanium • 256GB • Midnight",
    price: 27999,
    quantity: 1,
    image: featuredProducts[1].image,
  },
  {
    id: 2,
    title: "MacBook Air M4",
    subtitle: "14-inch • Silver • 16GB RAM",
    price: 31999,
    quantity: 1,
    image: featuredProducts[3].image,
  },
];

export default function Cart() {
  return (
    <section className="bg-[#f7f7f2] py-16 sm:py-20">
      <PageContainer>
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Your bag</p>
          <h1 className="mt-2 text-3xl font-semibold text-[#111111] sm:text-4xl">A premium checkout experience starts here.</h1>
        </div>

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
      </PageContainer>
    </section>
  );
}
