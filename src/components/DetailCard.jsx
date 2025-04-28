import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Heart,
  MoreVertical,
  ShoppingBasketIcon,
  StarIcon,
} from "lucide-react";
import { useProductStore } from "../services/productStore";
import { useEffect } from "react";
import useStore from "../zustand/store";

// Sol ok bileşeni
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-2 z-10"
  >
    <FaChevronLeft />
  </button>
);

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
  const { addToCart, toogleFavorite } = useStore();
  const handleAddToCart = () => {
    addToCart({ id, title, price, src });
  };
  const handleAddToFavorites = () => {
    toogleFavorite({ id, title, price, src }); // Favorilere ekleme işlemi
  };
  const { product, loading, fetchProduct } = useProductStore();

  useEffect(() => {
    fetchProduct("322"); // Sabit 322 ID'siyle ürünü çekiyoruz
  }, [fetchProduct]);

  if (loading || !product) {
    return <div>Loading...</div>; // Yüklenirken veya veri yokken göster
  }
  console.log(product); // Ürün verisini konsola yazdır
  const colors = ["blue-500", "green-500", "blue-500", "green-500"];

  return (
    <section className="flex flex-col md:flex-row w-11/12 mx-auto gap-4">
      {/* SLIDER */}
      <div className="w-full md:w-6/12 max-h-[600px] overflow-hidden relative">
        <Slider {...settings}>
          {product.images?.map((img, index) => (
            <div key={index}>
              <img
                src={img.url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center" />
            </div>
          ))}
        </Slider>
      </div>

      {/* BİLGİ BLOĞU */}
      <div className="w-full md:w-6/12 flex flex-col space-y-4">
        <h3 className="text-xl md:text-2xl text-[#252B42]">{product.name}</h3>

        <div className="flex space-x-2 items-center">
          {Array.from({ length: Math.round(product.rating || 0) }).map(
            (_, idx) => (
              <StarIcon key={idx} className="w-4 h-4 text-yellow-500" />
            )
          )}
          <p className="text-sm">{product.sell_count} sold</p>
        </div>

        <div className="flex space-x-2 items-center">
          <p className="text-[#858585]">Availability :</p>
          <p className="text-[#23A6F0]">
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </p>
        </div>

        <p className="text-sm md:text-base text-[#858585]">
          {product.description}
        </p>

        <div className="flex space-x-2">
          {colors.map((color, index) => (
            <div key={index} className={`w-8 h-8 rounded-full bg-${color}`} />
          ))}
        </div>

        <div className="flex space-x-4 items-center mt-6">
          <button className="rounded-md bg-[#23A6F0] px-8 py-3 text-white text-sm md:text-base">
            {product.price}₺ - Buy Now
          </button>
          <Heart onClick={handleAddToFavorites} />
          <ShoppingBasketIcon onClick={handleAddToCart} />
          <MoreVertical />
        </div>
      </div>
    </section>
  );
};

export default DetailCard;
