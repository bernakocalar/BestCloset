import ProductCard from "./ProductCard";

export default function BestSeller() {
  const images = [
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
    <section className="flex flex-col mx-auto">
      <div className="mx-auto text-center">
        <h3>Featured Products</h3>
        <h2>BESTSELLER PRODUCTS</h2>
        <p>Problems trying to resolve the conflict between </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-8/12 mx-auto">
        {images.map((item, index) => (
          <ProductCard key={index} src={item.src} />
        ))}
      </div>
    </section>
  );
}
