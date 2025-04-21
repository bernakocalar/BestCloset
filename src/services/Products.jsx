import { useEffect } from "react";
import axiosinstance from "./axiosInstance";

export default function Products() {
  const [products, setProducts] = useState([]); // Veriyi saklamak için state

  useEffect(() => {
    axiosinstance
      .get("/products")
      .then((res) => {
        setProducts(res.data); // Veriyi state'e atıyoruz
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return products;
}
