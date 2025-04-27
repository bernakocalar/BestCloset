import React from "react";
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import useStore from "../zustand/store";

const Favorites = () => {
  const { favorites, toggleFavorite, addToCart } = useStore();

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Heart className="w-6 h-6 fill-red-500 text-red-500" />
          Favori Ürünlerim
        </h1>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="mx-auto w-12 h-12 text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg mb-4">
            Henüz favori ürününüz yok
          </p>
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
          >
            Alışverişe Başla
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => toggleFavorite(product)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-50"
                >
                  <Heart className="w-5 h-5" fill="#ef4444" stroke="#ef4444" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.price} TL</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Sepete Ekle
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
