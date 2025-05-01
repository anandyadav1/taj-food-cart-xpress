
import React from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/FoodCartContext";
import { formatCurrency } from "@/utils/formatCurrency";

const OrderConfirmation: React.FC = () => {
  const {
    cartItems,
    cartTotal,
    placeOrder,
    isOrderConfirmOpen,
    setIsOrderConfirmOpen,
  } = useCart();

  if (!isOrderConfirmOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={() => setIsOrderConfirmOpen(false)}
    >
      <div
        className="w-full max-w-md bg-taj-cream rounded-lg shadow-xl p-6 animate-bounce-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center mb-6">
          <AlertCircle size={48} className="text-taj-gold mb-3" />
          <h3 className="text-2xl font-semibold text-taj-burgundy font-serif">
            Confirm Your Order
          </h3>
          <p className="text-taj-burgundy/70 text-center mt-1">
            Are you sure you want to place this order?
          </p>
        </div>

        <div className="max-h-64 overflow-y-auto mb-6">
          <p className="font-medium text-taj-burgundy mb-2">Order Summary:</p>
          <div className="space-y-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between py-1 border-b border-taj-gold/10"
              >
                <span className="text-taj-burgundy">
                  {item.quantity} × {item.nameEn}
                </span>
                <span className="font-medium text-taj-burgundy">
                  {formatCurrency(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4 font-bold text-taj-burgundy">
            <span>Total:</span>
            <span>{formatCurrency(cartTotal)}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1 border-taj-burgundy text-taj-burgundy hover:bg-taj-burgundy/10"
            onClick={() => setIsOrderConfirmOpen(false)}
          >
            Cancel
          </Button>

          <Button
            className="flex-1 bg-taj-burgundy hover:bg-taj-burgundy/80 text-taj-cream"
            onClick={placeOrder}
          >
            Confirm Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
