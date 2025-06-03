import React, { useState } from "react";
import { Plus, Minus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/context/FoodCartContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { MenuItem } from "@/types";
interface MenuItemCardProps {
  item: MenuItem;
}
const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const {
    addToCart
  } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      nameEn: item.nameEn,
      nameHi: item.nameHi,
      price: item.price,
      quantity,
      image: item.image
    });
    setIsAdded(true);

    // Reset after animation
    setTimeout(() => {
      setIsAdded(false);
      setIsExpanded(false);
      setQuantity(1);
    }, 1500);
  };
  return <Card className={`menu-item-card overflow-hidden border border-taj-gold/20 transition-all duration-300 ${isExpanded ? 'shadow-lg' : 'hover:shadow-md'}`} onClick={() => !isExpanded && setIsExpanded(true)}>
      <div className="relative h-48 overflow-hidden">
        
        <div className="absolute top-2 right-2 flex gap-1">
          {item.isVeg && <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">Veg</span>}
          {item.isSpicy && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">Spicy</span>}
          {item.isPopular && <span className="bg-taj-gold text-taj-dark text-xs px-2 py-0.5 rounded-full">Popular</span>}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-taj-burgundy font-serif">{item.nameEn}</h3>
          <p className="text-sm text-taj-burgundy/70 font-serif">{item.nameHi}</p>
        </div>
        
        <p className="text-taj-gold font-medium mb-2">{formatCurrency(item.price)}</p>
        
        {isExpanded && <div className="mt-4 space-y-3 animate-fade-in">
            <p className="text-sm text-taj-burgundy/80">{item.description}</p>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <Button variant="outline" size="icon" className="h-8 w-8 border-taj-burgundy text-taj-burgundy" onClick={e => {
              e.stopPropagation();
              setQuantity(Math.max(1, quantity - 1));
            }}>
                  <Minus size={16} />
                </Button>
                
                <span className="mx-3 font-medium">{quantity}</span>
                
                <Button variant="outline" size="icon" className="h-8 w-8 border-taj-burgundy text-taj-burgundy" onClick={e => {
              e.stopPropagation();
              setQuantity(quantity + 1);
            }}>
                  <Plus size={16} />
                </Button>
              </div>
              
              <Button className={`bg-taj-burgundy hover:bg-taj-burgundy/80 text-taj-cream ${isAdded ? "bg-green-600 hover:bg-green-600" : ""}`} onClick={e => {
            e.stopPropagation();
            handleAddToCart();
          }}>
                {isAdded ? <Check className="mr-1" size={16} /> : null}
                {isAdded ? "Added" : "Add to Cart"}
              </Button>
            </div>
          </div>}
      </CardContent>
    </Card>;
};
export default MenuItemCard;