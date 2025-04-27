// stores/authStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { toast } from 'react-toastify';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      error: null,
      
      login: async (email, password, rememberMe) => {
        set({ loading: true, error: null });
        try {
          const response = await axios.post('https://reqres.in/api/workintech/verify', { email, password });
          
          set({ 
            user: response.data.user,
            token: response.data.token,
            loading: false 
          });
          
          if (rememberMe) {
            localStorage.setItem('authToken', response.data.token);
          } else {
            sessionStorage.setItem('authToken', response.data.token);
          }
          
          return response.data.user;
        } catch (error) {
          set({ 
            error: error.response?.data?.message || 'Login failed',
            loading: false 
          });
          toast.error(error.response?.data?.message || 'Login failed');
          throw error;
        }
      },
      
      logout: () => {
        set({ user: null, token: null });
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');
      },
      
      initializeAuth: () => {
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        if (token) {
          axios.get('/user-info', {
            headers: { Authorization: token }

          }).then(response => {
            set({ user: response.data, token });
          }).catch(() => {
            localStorage.removeItem('authToken');
            sessionStorage.removeItem('authToken');
          });
        }
      }
    }),
    {
      name: 'auth-storage', // localStorage key
      partialize: (state) => ({ token: state.token }), // Sadece token'ı persist et
    }
  )
);