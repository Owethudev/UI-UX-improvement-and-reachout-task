import PageContainer from "../components/layout/PageContainer";
import ProductCard from "../components/product/ProductCard";
import { featuredProducts } from "../data/featuredProducts";

const wishlistItems = featuredProducts.slice(0, 3);

export default function Wishlist() {
  return (
    <section className="bg-[#f7f7f2] py-24 sm:py-28">
      <PageContainer>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Wishlist</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
              Your saved picks, ready whenever you are.
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#4b5563] sm:text-base">
            Keep your favorite devices and upgrades close by. This wishlist is designed to feel calm, premium, and easy to browse.
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="rounded-[2.5rem] border border-dashed border-black/15 bg-white p-10 text-center shadow-[0_16px_45px_rgba(17,17,17,0.04)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f7f7f2] text-3xl text-[#D4AF37]">
              ♡
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-[#111111]">Your wishlist is empty</h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-8 text-[#4b5563]">
              Save premium products you love and return here anytime to compare, buy, or share your favorites.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
            {wishlistItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </PageContainer>
    </section>
  );
}
