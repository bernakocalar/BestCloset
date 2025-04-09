// components/HeroSlider.jsx
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

const HeroSlider = () => {
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

  return (
    <div className="w-full max-h-[600px] overflow-hidden relative">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative w-full h-[500px] bg-blue-500">
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
            <h2 className="text-4xl font-bold">Mavi Arka Plan</h2>
            <p className="text-lg mt-2">Burası slider 1</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[500px] bg-green-500">
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
            <h2 className="text-4xl font-bold">Yeşil Arka Plan</h2>
            <p className="text-lg mt-2">Burası slider 2</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
