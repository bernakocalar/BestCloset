import { useEffect } from "react";
import Brands from "../components/Brands";
import ProductCard from "../components/ProductCard";
import axiosinstance from "../services/axiosInstance";
import Pagination from "../shared/Pagination";
import { useState } from "react";

export default function ShopPage() {
  const [products, setProducts] = useState([]); // Veriyi saklamak için state

  useEffect(() => {
    axiosinstance
      .get("/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  products.forEach((product) => console.log(product.images));

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-left text-3xl mb-6">
        <h2>Shop</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-10/12 mx-auto">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-amber-400 aspect-square rounded-md"></div>
        ))}
      </div>
      <div className="my-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-9/12 mx-auto">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            src={item.images?.[0].url}
            title={item.name}
            description={item.description}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination totalPages={10} />
      </div>
      <Brands />
    </div>
  );
}
