import BestSeller from "../pages/BestSeller";
import Campaign from "../pages/Campaign";
import EditorsPick from "../pages/EditorsPick";
import HeroSlider from "../pages/HeroSlider";

export default function HomePage() {
    return (
        <section>
       <HeroSlider />
       <div className="my-10"/>
       <EditorsPick/>
       <div className="my-10"/>
       <BestSeller/>
       <div className="my-10"/>
       <HeroSlider/>
       <div className="my-10"/>
       <Campaign/>
       </section>
    )
}