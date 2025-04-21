import FreeTrial from "../components/FreeTrial";
import TeamCard from "../components/TeamCard";

export default function TeamPage() {
  return (
    <section className="my-20 px-4">
      <div className="text-center mb-10">
        <p className="text-[#23A6F0] uppercase tracking-wide">Our Team</p>
        <h3 className="text-3xl font-bold mt-2 mb-4">Meet the Experts</h3>
        <p className="text-[#737373] max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className="w-full md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <TeamCard key={i} />
        ))}
      </div>
      <FreeTrial />
    </section>
  );
}
