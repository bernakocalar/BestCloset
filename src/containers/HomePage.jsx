import BestSeller from "../components/BestSeller";
import Campaign from "../components/Campaign";
import EditorsPick from "../components/EditorsPick";
import HeroSlider from "../components/HeroSlider";

export default function HomePage() {
  return (
    <section>
      <HeroSlider />
      <div className="my-10" />
      <EditorsPick />
      <div className="my-10" />
      <BestSeller />
      <div className="my-10" />
      <HeroSlider />
      <div className="my-10" />
      <Campaign />
    </section>
  );
}
