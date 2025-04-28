import { create } from "zustand";
import axios from "axios";

export const useProductStore = create((set) => ({
  product: null,
  loading: false,
  error: null,

  fetchProduct: async (productId) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `https://workintech-fe-ecommerce.onrender.com/products/${productId}`
      );
      set({ product: response.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
