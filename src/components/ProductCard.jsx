import { Heart, ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useStore from "../zustand/store";

export default function ProductCard({
  src,
  title,
  price,
  description,
  rating,
  id,
}) {
  const navigate = useNavigate();
  const { addToCart, toogleFavorite } = useStore();
  const handleAddToCart = () => {
    addToCart({ id, title, price, src });
  };
  const handleAddToFavorites = () => {
    toogleFavorite({ id, title, price, src }); // Favorilere ekleme işlemi
  };
  const handleClick = () => {
    navigate(`/products/${id}`); // Ürün detay sayfasına yönlendirme
  };
  const colors = ["blue-500", "green-500", "blue-500", "green-500"];
  return (
    <div
      onClick={handleClick}
      className="border rounded-lg p-4 shadow-md text-center space-y-2"
    >
      <div className="flex justify-between ">
        <ShoppingCart onClick={handleAddToCart} />
        <Heart onClick={handleAddToFavorites} />
      </div>
      <img src={src} alt="" className="w-full object-cover rounded" />
      <p className="font-semibold mt-2">{title}</p>
      <p className="text-gray-500">{description}</p>
      <div className="flex space-x-1 justify-around items-center">
        <p className="text-gray-500">{price} ₺</p>
        <div className="flex items-center space-x-1">
          <p className="text-[#23856D]">{rating}</p>
          <Star className="w-4 h-4 text-yellow-500" />
        </div>
      </div>
      <div className="flex space-x-2 justify-center">
        {colors.map((color, index) => (
          <div key={index} className={`w-4 h-4 rounded-full bg-${color}`} />
        ))}
      </div>
    </div>
  );
}
