import { Heart, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function MainNav() {
  const [showNav, setShowNav] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScroll && currentScroll > 50) {
        // Aşağı scroll
        setShowNav(false);
      } else {
        // Yukarı scroll
        setShowNav(true);
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        bg-white shadow-sm text-black py-4 px-6
        transition-transform duration-300 ease-in-out
        mt-0 lg:mt-16
        ${showNav ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side - Brand name and navigation links */}
        <div className="flex items-center space-x-8 mr-4">
          <h1 className="text-2xl font-bold justify-start">BESTCLOSET</h1>

          <div className="hidden sm:flex md:text-sm space-x-6 justify-start">
            <a href="/" className="hover:text-gray-600">Home</a>
            <a href="/shop" className="hover:text-gray-600">Shop</a>
            <a href="/about" className="hover:text-gray-600">About</a>
            <a href="/blog" className="hover:text-gray-600">Blog</a>
            <a href="/contact" className="hover:text-gray-600">Contact</a>
            <a href="/pages" className="hover:text-gray-600">Pages</a>
          </div>
        </div>

        {/* Right side - Register button */}
        <div className="flex items-center space-x-4 justify-end">
          <User className="text-gray-600" size={16} />
          <a href="/register" className="ml-2 text-sm text-gray-600 hover:text-gray-800">Login/Register</a>
          <ShoppingCart className="text-gray-600" size={16}/>
          <Heart className="text-gray-600" size={16}/>
        </div>
      </div>
    </nav>
  );
}
