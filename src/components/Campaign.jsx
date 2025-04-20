export default function Campaign() {
  return (
    <section className="flex flex-col md:flex-row w-11/12 mx-auto items-center gap-8 py-8">
      {/* GÖRSEL */}
      <div className="w-full md:w-6/12">
        <img
          src="/assets/asian-woman-man-with-winter-clothes 1.png"
          alt="Model"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* METİN BLOĞU */}
      <div className="flex flex-col justify-center w-full md:w-5/12 space-y-4 text-center md:text-left">
        <h2 className="text-base md:text-lg text-[#737373] font-medium tracking-widest">
          SUMMER 2020
        </h2>
        <h2 className="text-3xl md:text-6xl font-bold leading-snug">
          Part of the Neural <br className="hidden md:block" />
          Universe
        </h2>
        <p className="text-sm md:text-base text-[#737373]">
          We know how large objects will act, but things on a small scale.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-2 mt-4">
          <button className="rounded-md bg-[#2DC071] px-8 py-3 text-white">
            BUY NOW
          </button>
          <button className="rounded-md bg-white px-8 py-3 text-[#2DC071] border border-[#2DC071]">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}
