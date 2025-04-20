import BestSeller from "../components/BestSeller";
import Brands from "../components/Brands";
import DetailCard from "../components/DetailCard";

export default function ProductDetailPage() {
  return (
    <section>
      <div className="my-20" />
      <DetailCard />
      <div className="my-10" />
      <BestSeller />
      <Brands />
    </section>
  );
}
