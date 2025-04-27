import React, { useState } from "react";
import { CreditCard, ShoppingCart, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../zustand/store";

const Checkout = () => {
  const { cart, user, paymentInfo, setPaymentInfo, completeOrder } = useStore();
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });
  const [orderCompleted, setOrderCompleted] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = total > 500 ? 0 : 29.99;
  const grandTotal = total + shippingCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentInfo(formData);
    completeOrder();
    setOrderCompleted(true);
  };

  if (cart.length === 0 && !orderCompleted) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <ShoppingCart className="mx-auto w-12 h-12 text-gray-300 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Sepetiniz Boş</h2>
        <p className="text-gray-600 mb-4">
          Ödeme yapabilmek için sepetinize ürün ekleyin
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
        >
          Alışverişe Dön
        </Link>
      </div>
    );
  }

  if (orderCompleted) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <CheckCircle className="mx-auto w-16 h-16 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          Siparişiniz Tamamlandı!
        </h2>
        <p className="text-gray-600 mb-6">
          Sipariş numaranız: #{Math.floor(Math.random() * 1000000)}
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <CreditCard className="w-6 h-6 text-indigo-600" />
        Ödeme İşlemi
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ödeme Formu */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Kart Bilgileri</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-1">
                    Kart Üzerindeki İsim
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-1">
                    Kart Numarası
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Son Kullanma Tarihi
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 font-medium"
              >
                Ödemeyi Tamamla ({grandTotal.toFixed(2)} TL)
              </button>
            </form>
          </div>
        </div>

        {/* Sipariş Özeti */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Sipariş Özeti</h2>
            <div className="space-y-3 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>{(item.price * item.quantity).toFixed(2)} TL</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-3 space-y-2">
              <div className="flex justify-between">
                <span>Ürün Toplamı</span>
                <span>{total.toFixed(2)} TL</span>
              </div>
              <div className="flex justify-between">
                <span>Kargo</span>
                <span>{shippingCost.toFixed(2)} TL</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2">
                <span>Toplam</span>
                <span>{grandTotal.toFixed(2)} TL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
