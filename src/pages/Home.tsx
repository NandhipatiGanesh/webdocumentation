import React, { Suspense, lazy } from "react";
import ResponsiveSearchBar from "../components/search";

// Lazy load the other components
const ReactComponents = lazy(
  () => import("../components/snippetscomp/Reactdesigns")
);
const Review = lazy(() => import("../components/Review"));
const PricingCard = lazy(() => import("../components/pricingcard/price"));
const Faqs = lazy(() => import("../components/faq/faq"));

export default function Home() {
  return (
    <>
      <ResponsiveSearchBar />
      <Suspense fallback={<div>Loading...</div>}>
        <ReactComponents />
        <Review />
        <PricingCard />
        <Faqs />
      </Suspense>
    </>
  );
}
