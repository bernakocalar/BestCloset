// components/AuthInitializer.js
import { useEffect } from "react";
import { useAuthStore } from "../zustand/authStore";

const AuthInitializer = () => {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return null;
};

export default AuthInitializer;
