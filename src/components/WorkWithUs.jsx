export default function WorkWithUs() {
  return (
    <section className="bg-[#23A6F0] text-white px-4 lg:px-0 flex flex-col lg:flex-row items-center">
      <div className="flex flex-col w-full lg:w-8/12 justify-center items-center lg:items-center text-center lg:text-left space-y-4 py-8">
        <h2 className="text-2xl font-semibold">Work With Us</h2>
        <p className="text-3xl mt-2">Now Let’s grow Yours</p>
        <p className="px-2 max-w-xl">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>
        <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md mt-4 hover:bg-[#2DC071]/80 transition duration-300 border border-white">
          Button
        </button>
      </div>
      <div className="w-full lg:w-auto">
        <img
          src="/assets/workwithus.png"
          alt="Model"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
