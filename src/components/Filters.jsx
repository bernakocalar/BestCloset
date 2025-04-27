import React, { useState } from "react";

const FilterCard = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const colors = ["Blue", "Green", "Orange", "Dark Blue"];
  const categories = [
    "Bedroom",
    "Decor",
    "Decoration",
    "Kitchen",
    "Lamp",
    "lighting",
  ];
  const popularTags = [
    { name: "Agata", count: 9 },
    { name: "Furniture", count: 18 },
    { name: "Tag", count: 0 },
  ];

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="w-2/12 bg-white shadow-md rounded-lg p-6 space-y-6">
      <h2 className="text-xl font-bold">Filter</h2>

      {/* Search */}
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Accessories Section */}
      <div className="space-y-2">
        <h3 className="font-semibold">Accessories</h3>
        <div className="flex flex-col gap-2 items-start">
          {["Bags", "Belts", "Cosmetics", "Hats"].map((item) => (
            <button
              key={item}
              className="px-3 py-1 text-sm text-gray-400 hover:bg-gray-200 rounded"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Product Section */}
      <div className="space-y-2">
        <h3 className="font-semibold">Product</h3>
        <div className="flex flex-col gap-2 items-start">
          {["Clothing"].map((item) => (
            <button
              key={item}
              className="px-3 py-1 text-sm text-gray-400 hover:bg-gray-200 rounded"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="space-y-2">
        <h3 className="font-semibold">Features</h3>
        <div className="flex flex-col gap-2 items-start">
          {["Brands"].map((item) => (
            <button
              key={item}
              className="px-3 py-1 text-sm text-gray-400 hover:bg-gray-200 rounded"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="space-y-2">
        <h3 className="font-semibold">Color</h3>
        <div className="flex flex-col gap-2 items-start">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => toggleColor(color)}
              className={`px-3 py-1 text-sm rounded border ${
                selectedColors.includes(color)
                  ? "text-blue-300 border-blue-500"
                  : "text-gray-400 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <h3 className="font-semibold">Category</h3>
        <div className="flex flex-col gap-2 items-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-3 py-1 text-sm rounded border ${
                selectedCategories.includes(category)
                  ? "text-blue-300 border-blue-500"
                  : "text-gray-400 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="space-y-2">
        <h3 className="font-semibold">Popular Tags</h3>
        <div className="flex flex-col gap-2 items-start">
          {popularTags.map((tag) => (
            <button
              key={tag.name}
              onClick={() => toggleTag(tag.name)}
              className={`px-3 py-1 text-sm rounded border flex items-center ${
                selectedTags.includes(tag.name)
                  ? "text-blue-300 border-blue-500"
                  : "text-gray-400 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {tag.name} ({tag.count}){" "}
              {selectedTags.includes(tag.name) && (
                <span className="ml-1">×</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="space-y-4">
        <h3 className="font-semibold">Filter By Price</h3>
        <div className="flex items-center justify-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], parseInt(e.target.value)])
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
