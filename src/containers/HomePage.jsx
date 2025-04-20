import BestSeller from "../components/BestSeller";
import BlogCard from "../components/BlogCard";
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
      <div className="my-10" />
      <div className="flex-flex justify-center text-center mt-4 my-5 w-4/12 mx-auto">
        <h2 className="text-3xl">Featured Posts</h2>
        <p className="text-[#737373] text-sm md:text-base">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <section className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <BlogCard key={i} />
        ))}
      </section>
    </section>
  );
}
