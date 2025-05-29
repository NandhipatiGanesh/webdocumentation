import ReactComponents from "../components/snippetscomp/Reactdesigns";
import PricingCard from "../components/pricingcard/price";
import Review from "../components/Review";
import ResponsiveSearchBar from "../components/search";
import Faqs from "../components/faq/faq";

export default function Home() {
  return (
    <>
      <ResponsiveSearchBar />
      <ReactComponents />
      <Review />
      <PricingCard />
      <Faqs />
    </>
  );
}
