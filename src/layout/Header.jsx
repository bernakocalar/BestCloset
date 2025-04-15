import {  Mail, Phone, } from "lucide-react";
import React, { useEffect, useState } from "react";
export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Eğer kullanıcı kaydırmaya başlamadıysa, scroll'u başlat
      if (!hasScrolled && currentScrollY > 0) {
        setHasScrolled(true);
        setShowHeader(true);
      }

      if (hasScrolled) {
        if (currentScrollY > lastScrollY) {
          // Aşağı kayıyor → gizle
          setShowHeader(false);
        } else {
          // Yukarı kayıyor → göster
          setShowHeader(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hasScrolled]);

    return (
        <header
        className={`
          hidden sm:block   // Mobilde gizle
          lg:fixed lg:top-0 // Sadece büyük ekranlarda sabitle
          w-full z-50
          transition-transform duration-300
          ${showHeader ? "lg:translate-y-0" : "lg:-translate-y-full"}
          bg-white shadow
        `}
      >
    <header className=" flex justify-between items-center w-full h-16 py-4 px-6 bg-[#23856D] text-white ">
        <div className="flex items-center space-x-2 justify-start">
            <Phone />
            <p>0 554 139 25 82</p>
            <Mail />
            <p>best.closet@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2 justify-center">
                <p>Follow Us  and get a chance to win 80% off</p>
            </div>
            <div className="flex items-center space-x-3 justify-end">
                <p>Follow us :</p>
                <a href="#"><i className="fab fa-facebook text-white"></i></a>
            <a href="#"><i className="fab fa-instagram text-white"></i></a>
            <a href="#"><i className="fab fa-twitter text-white"></i></a>
            </div>
        </header>
        </header>
    );
}