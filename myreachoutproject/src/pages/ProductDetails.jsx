import { useMemo } from "react";

import PageContainer from "../components/layout/PageContainer";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductTabs from "../components/product/ProductTabs";
import { featuredProducts } from "../data/featuredProducts";
import ProductCard from "../components/product/ProductCard";

const productImages = [
  "/src/assets/images/products/iphone16.webp",
  "/src/assets/images/products/macbook-air.webp",
  "/src/assets/images/products/samsung-tv.webp",
  "/src/assets/images/products/ps5.webp",
];

export default function ProductDetails() {
  const product = useMemo(() => ({
    ...featuredProducts[1],
    description:
      "A beautifully crafted premium smartphone with advanced processing, pro-grade photography, and a refined, seamless experience.",
    specs: ["A18 chip", "48MP camera", "Titanium frame", "USB-C charging", "All-day battery"],
    reviews: 284,
    images: productImages,
  }), []);

  return (
    <section className="bg-[#f7f7f2] py-16 sm:py-20">
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ProductGallery images={product.images} title={product.title} />

          <div className="lg:sticky lg:top-24">
            <ProductInfo product={product} />
          </div>
        </div>

        <div className="mt-10">
          <ProductTabs product={product} />
        </div>

        <div className="mt-12">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Related picks</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#111111] sm:text-3xl">Complete your setup.</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.slice(0, 3).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
