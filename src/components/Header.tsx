
import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/FoodCartContext";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="relative py-4 px-6 flex items-center justify-between bg-taj-cream border-b border-taj-gold/20 z-10">
      <div className="flex items-center gap-2">
        <img
          src="https://i.ibb.co/Kz0jCSr/taj-logo-gold.png"
          alt="Taj Hotel Logo"
          className="h-14 w-auto hidden md:block"
        />
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-taj-burgundy font-serif tracking-wider">
            The Taj <span className="text-taj-gold">Flavours</span>
          </h1>
          <p className="text-xs md:text-sm text-taj-burgundy/70 font-serif italic">
            Exquisite Dining Experience
          </p>
        </div>
      </div>

      <Button 
        variant="outline" 
        className="text-taj-burgundy border-taj-burgundy flex items-center gap-2 hover:bg-taj-burgundy hover:text-taj-cream transition-all"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingCart size={18} />
        <span className="hidden md:inline">Cart</span>
        {cartCount > 0 && (
          <span className="flex items-center justify-center bg-taj-burgundy text-taj-cream text-xs font-bold rounded-full h-5 w-5 ml-1">
            {cartCount}
          </span>
        )}
      </Button>
    </header>
  );
};

export default Header;
