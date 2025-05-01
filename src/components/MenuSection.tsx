
import React, { useState } from "react";
import { menuItems } from "@/data/menuItems";
import MenuItemCard from "./MenuItemCard";

const categories = [
  { id: "all", label: "All Items" },
  { id: "main", label: "Main Course" },
  { id: "breakfast", label: "Breakfast" },
  { id: "bread", label: "Breads" },
  { id: "dessert", label: "Desserts" },
  { id: "beverage", label: "Beverages" },
];

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = 
      item.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nameHi.includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-12 bg-taj-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-taj-burgundy font-serif">
          Our <span className="text-taj-gold">Menu</span>
        </h2>
        
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for dishes..."
              className="w-full px-4 py-2 border border-taj-gold/30 rounded-full focus:outline-none focus:ring-2 focus:ring-taj-gold/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        
        <div className="flex overflow-x-auto py-2 mb-6 gap-2 md:justify-center scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? "bg-taj-burgundy text-taj-cream"
                  : "bg-taj-cream text-taj-burgundy hover:bg-taj-burgundy/10"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))
          ) : (
            <p className="col-span-full text-center py-12 text-taj-burgundy">
              No items found. Please try a different search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
