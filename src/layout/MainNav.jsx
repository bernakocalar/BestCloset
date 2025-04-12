import { User } from "lucide-react";
import { useEffect, useState } from "react";

export default function MainNav() {
    const [prevScroll, setPrevScroll] = useState(0);
  const [topValue, setTopValue] = useState("top-16");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScroll) {
        // Aşağı scroll
        setTopValue("top-0");
      } else {
        // Yukarı scroll
        setTopValue("top-16");
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

    return (
        <nav
      className={`bg-white py-4 px-6 shadow-sm text-black fixed w-full z-50 transition-all duration-300 ease-in-out ${topValue}`}
    >
            <div className="container mx-auto flex items-center justify-between">
                {/* Left side - Brand name and navigation links */}
                <div className="flex items-center space-x-8 mr-4">
                    {/* Brand name */}
                    <h1 className="text-2xl font-bold justify-start">BESTCLOSET</h1>
                    
                    {/* Navigation links */}
                    <div className="text-sm space-x-6 justify-start">
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
                <a to="/register" className="ml-2 text-sm text-gray-600 hover:text-gray-800">Login/Register</a>
                </div>
            </div>
        </nav>
    );
}