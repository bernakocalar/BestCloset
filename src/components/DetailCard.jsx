// components/HeroSlider.jsx
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Heart,
  MoreVertical,
  ShoppingBasketIcon,
  StarIcon,
} from "lucide-react";

// Sol ok bileşeni
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-2 z-10"
  >
    <FaChevronLeft />
  </button>
);

// Sağ ok bileşeni
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-2 z-10"
  >
    <FaChevronRight />
  </button>
);

const DetailCard = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const colors = ["blue-500", "green-500", "blue-500", "green-500"];
  return (
    <section className="flex flex-col md:flex-row w-11/12 mx-auto gap-4">
      {/* SLIDER */}
      <div className="w-full md:w-6/12 max-h-[600px] overflow-hidden relative">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-blue-500">
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
              <h2 className="text-2xl md:text-4xl font-bold">Mavi Arka Plan</h2>
              <p className="text-base md:text-lg mt-2">Burası slider 1</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-green-500">
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
              <h2 className="text-2xl md:text-4xl font-bold">
                Yeşil Arka Plan
              </h2>
              <p className="text-base md:text-lg mt-2">Burası slider 2</p>
            </div>
          </div>
        </Slider>
      </div>

      {/* BİLGİ BLOĞU */}
      <div className="w-full md:w-6/12 flex flex-col space-y-4">
        <h3 className="text-xl md:text-2xl text-[#252B42]">Floating Phone</h3>

        <div className="flex space-x-2 items-center">
          <StarIcon className="w-4 h-4 text-yellow-500" />
          <StarIcon className="w-4 h-4 text-yellow-500" />
          <StarIcon className="w-4 h-4 text-yellow-500" />
          <StarIcon className="w-4 h-4 text-yellow-500" />
          <StarIcon className="w-4 h-4 text-yellow-500" />
          <p className="text-sm">15 Reviews</p>
        </div>

        <div className="flex space-x-2 items-center">
          <p className="text-[#858585]">Availability : </p>
          <p className="text-[#23A6F0]">in stock</p>
        </div>

        <p className="text-sm md:text-base text-[#858585]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>

        <div className="flex space-x-2">
          {colors.map((color, index) => (
            <div key={index} className={`w-8 h-8 rounded-full bg-${color}`} />
          ))}
        </div>

        <div className="flex space-x-4 items-center mt-6">
          <button className="rounded-md bg-[#23A6F0] px-8 py-3 text-white text-sm md:text-base">
            Select options
          </button>
          <Heart />
          <ShoppingBasketIcon />
          <MoreVertical />
        </div>
      </div>
    </section>
  );
};

export default DetailCard;
