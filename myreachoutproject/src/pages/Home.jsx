// I use this page to compose my homepage sections in a lightweight way so the initial page load stays efficient.
// If I want to add or remove a section later, I can update this single file and keep the rest intact.
import { lazy, Suspense } from "react";

const Categories = lazy(() => import("../components/home/Categories"));
const Hero = lazy(() => import("../components/home/Hero"));
const Brands = lazy(() => import("../components/home/Brands"));
const FeaturedProducts = lazy(() => import("../components/home/FeaturedProducts"));
const TrustSection = lazy(() => import("../components/home/TrustSection"));
const Newsletter = lazy(() => import("../components/home/Newsletter"));

function Section({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export default function Home() {
  return (
    <>
      <Section><Categories /></Section>
      <Section><Hero /></Section>
      <Section><Brands /></Section>
      <Section><FeaturedProducts /></Section>
      <Section><TrustSection /></Section>
      <Section><Newsletter /></Section>
    </>
  );
}