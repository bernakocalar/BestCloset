import TeamCard from "../components/TeamCard";

export default function AboutPage() {
  return (
    <section className="w-8/12 mx-auto">
      <div className="flex">
        <div className="w-1/2 flex flex-col items-start justify-center space-y-10 pr-24 text-left">
          <h2>ABOUT COMPANY</h2>
          <h1 className="text-3xl font-bold text-center">About Us</h1>
          <p className="text-left text-[#737373] text-sm md:text-base">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md mt-4 border border-white">
            {" "}
            Get Now
          </button>
        </div>
        <div>
          <img
            src="/assets/technology 1.png"
            alt="about"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-20 p-30 space-y-4">
        <h2 className="text-4xl">Meet Our Team</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mx-auto md:w-8/12 mt-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <TeamCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
