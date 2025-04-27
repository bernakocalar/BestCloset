import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'react-toastify';
import axiosinstance from '../services/axiosInstance';

export const useCategoryStore = create(
  persist(
    (set) => ({
      categories: [],
      loading: false,
      error: null,

      fetchCategories: async () => {
        set({ loading: true, error: null });

        try {
          const response = await axiosinstance.get('/categories');
          set({ categories: response.data, loading: false });
        } catch (error) {
          const errorMessage = error.response?.data?.message || 'Failed to fetch categories';
          set({ error: errorMessage, loading: false });
          toast.error(errorMessage);
        }
      },
    }),
    {
      name: 'category-storage',
      partialize: (state) => ({}),
    }
  )
);
