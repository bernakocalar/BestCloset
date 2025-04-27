import { useEffect } from "react";
import useStore from "../zustand/store";
import ProductCard from "./ProductCard";

export default function BestSeller() {
  const { products, loading, fetchProducts, addToCart } = useStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  const result = products.products;
  return (
    <section className="flex flex-col mx-auto">
      <div className="mx-auto text-center">
        <h3>Featured Products</h3>
        <h2>BESTSELLER PRODUCTS</h2>
        <p>Problems trying to resolve the conflict between </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-8/12 mx-auto">
        {result?.slice(0, 12).length > 0 ? (
          result
            .slice(0, 12)
            .map((item, index) => (
              <ProductCard
                key={index}
                src={item.images?.[0].url}
                title={item.name}
                description={item.description}
                price={item.price}
                rating={item.rating}
                id={item.id}
              />
            ))
        ) : (
          <div className="col-span-4 text-center text-lg text-gray-500">
            Ürün bulunamadı.
          </div>
        )}
      </div>
    </section>
  );
}
