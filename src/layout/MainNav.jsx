import { Heart, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../zustand/authStore";
import { useCategoryStore } from "../zustand/categoryStore";

export default function MainNav() {
  const [showNav, setShowNav] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const { categories, loading, fetchCategories } = useCategoryStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const handleNavigate = (path) => {
    navigate("/cart");
  };
  const handleFavorite = (path) => {
    navigate("/favorites");
  };
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

  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(categories);
  if (loading) return <div>Loading...</div>;
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
            <a href="/" className="hover:text-gray-600">
              Home
            </a>

            <div className="relative">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="hover:text-gray-600 focus:outline-none"
              >
                Shop
              </button>

              {showDropdown && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 grid grid-cols-2 gap-4 z-50">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href={`/shop/${category.gender}/${category.title}/${category.id}`}
                      className="text-gray-700 hover:text-blue-500 text-sm"
                    >
                      {category.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/about" className="hover:text-gray-600">
              About
            </a>
            <a href="/blog" className="hover:text-gray-600">
              Blog
            </a>
            <a href="/contact" className="hover:text-gray-600">
              Contact
            </a>
            <a href="/team" className="hover:text-gray-600">
              Team
            </a>
          </div>
        </div>

        {/* Right side - Register button */}
        <div className="flex items-center space-x-4 justify-end">
          {user ? (
            <>
              <User className="text-gray-600" size={16} />
              <span className="ml-2 text-sm text-gray-600">
                {user.username}{" "}
                {/* veya user.name ya da user.email, backend nasıl dönüyorsa */}
              </span>
            </>
          ) : (
            <>
              <User className="text-gray-600" size={16} />
              <a
                href="/signup"
                className="ml-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Login/Register
              </a>
            </>
          )}
          <ShoppingCart
            onClick={handleNavigate}
            className="text-gray-600"
            size={16}
          />
          <Heart onClick={handleFavorite} className="text-gray-600" size={16} />
        </div>
      </div>
    </nav>
  );
}
