import Brands from "../components/home/Brands";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Hero from "../components/home/Hero";
import Newsletter from "../components/home/Newsletter";
import TrustSection from "../components/home/TrustSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <FeaturedProducts />
      <Categories />
      <TrustSection />
      <Newsletter />
    </>
  );
}