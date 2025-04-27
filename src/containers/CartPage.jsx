import React from "react";

import {
  Trash2,
  ShoppingCart,
  Heart,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import useStore from "../zustand/store";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart,
    user,
    favorites,
    toggleFavorite,
  } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();
  const handlePayment = () => {
    // Ödeme işlemleri burada yapılabilir
    navigate("/shipping");
  };
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <ShoppingCart className="w-8 h-8 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-800">
          Sepetim ({user ? user.name : "Misafir"})
        </h1>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingCart className="mx-auto w-12 h-12 text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">Sepetiniz boş</p>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow divide-y divide-gray-200 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="p-4 flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <div className="flex items-center mt-1">
                      <button
                        onClick={() => toggleFavorite(item)}
                        className="mr-3 text-red-500 hover:text-red-700"
                      >
                        <Heart
                          className="w-5 h-5"
                          fill={
                            favorites.some((fav) => fav.id === item.id)
                              ? "#ef4444"
                              : "none"
                          }
                        />
                      </button>
                      <span className="text-gray-500">{item.price} TL</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="font-medium w-20 text-right">
                    {(item.price * item.quantity).toFixed(2)} TL
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Özet */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Sipariş Özeti
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Ara Toplam</span>
                <span className="text-gray-900">{total.toFixed(2)} TL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Kargo</span>
                <span className="text-gray-900">Ücretsiz</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between">
                <span className="font-medium text-gray-900">Toplam</span>
                <span className="font-bold text-indigo-600">
                  {total.toFixed(2)} TL
                </span>
              </div>
            </div>
          </div>

          {/* Butonlar */}
          <div className="flex justify-between gap-4">
            <button
              onClick={clearCart}
              className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Sepeti Temizle
            </button>
            <button
              onClick={handlePayment}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md transition-colors"
            >
              Ödemeye Geç ({cart.length} Ürün)
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
