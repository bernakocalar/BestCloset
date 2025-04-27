
import { create } from 'zustand';
import axiosinstance from '../services/axiosInstance';

// Ürünleri API'dan çekmek için mock fonksiyon (gerçekte axios/fetch kullanın)
const fetchProducts = async () => {
    try {
      const res = await axiosinstance.get("/products");
     
      console.log(res.data); // Veriyi kontrol etmek için konsola yazdır
      return res.data;
    } catch (err) {
      console.error("Ürünler çekilirken hata:", err);
      return []; // Hata durumunda boş array dön
    }
  };
// Zustand store'u
const useStore = create((set, get) => ({
  // Kullanıcı bilgisi
  user: null,
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),

  // Ürünler
  products: [],
  loading: false,
  fetchProducts: async () => {
    set({ loading: true });
    const products = await fetchProducts();
    set({ products, loading: false });
  },

  // Sepet
  cart: [],
  addToCart: (product) => {
    const { cart } = get();
    const existingItem = cart.find((item) => item.id === product.id);
    
    if (existingItem) {
      // Eğer ürün sepette varsa miktarını artır
      set({
        cart: cart.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ),
      });
    } else {
      // Yoksa yeni ürün ekle
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },
  removeFromCart: (productId) => {
    set({ cart: get().cart.filter((item) => item.id !== productId) });
  },
  clearCart: () => set({ cart: [] }),

    // Favori işlemleri
    favorites: [],
    toggleFavorite: (product) => {
      const { favorites } = get();
      const isFavorite = favorites.some((item) => item.id === product.id);
      
      if (isFavorite) {
        set({ favorites: favorites.filter((item) => item.id !== product.id) });
      } else {
        set({ favorites: [...favorites, product] });
      }
    },
  }),
  {
    name: 'ecommerce-store', // localStorage key
    partialize: (state) => ({ 
      cart: state.cart,
      favorites: state.favorites,
      user: state.user
    }), // Sadece bu alanları kaydet
  }
)
; // Zustand store'u oluşturma
export default useStore;