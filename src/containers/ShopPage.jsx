import Brands from "../components/Brands";
import ProductCard from "../components/ProductCard";
import Pagination from "../shared/Pagination";

export default function ShopPage() {
  const images = [
    { src: "/assets/product-cover-5.png" },
    { src: "/assets/product-cover-5 (1).png" },
    { src: "/assets/product-cover-5 (2).png" },
    { src: "/assets/product-cover-5 (3).png" },
    { src: "/assets/product-cover-5 (4).png" },
    { src: "/assets/product-cover-5 (5).png" },
    { src: "/assets/product-cover-5 (6).png" },
    { src: "/assets/product-cover-5 (7).png" },
    { src: "/assets/product-cover-5.png" },
    { src: "/assets/product-cover-5 (1).png" },
    { src: "/assets/product-cover-5 (2).png" },
    { src: "/assets/product-cover-5 (3).png" },
    { src: "/assets/product-cover-5 (4).png" },
    { src: "/assets/product-cover-5 (5).png" },
    { src: "/assets/product-cover-5 (6).png" },
    { src: "/assets/product-cover-5 (7).png" },
  ];
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
        {images.map((item, index) => (
          <ProductCard key={index} src={item.src} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination totalPages={10} />
      </div>
      <Brands />
    </div>
  );
}
