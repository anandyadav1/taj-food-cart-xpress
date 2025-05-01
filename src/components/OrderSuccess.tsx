
import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useCart } from "@/context/FoodCartContext";

const OrderSuccess: React.FC = () => {
  const { isSuccessOpen, setIsSuccessOpen } = useCart();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSuccessOpen) {
      timer = setTimeout(() => {
        setIsSuccessOpen(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isSuccessOpen, setIsSuccessOpen]);

  if (!isSuccessOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full order-success">
        <div className="flex flex-col items-center">
          <CheckCircle size={64} className="text-green-500 mb-4" />
          <h3 className="text-2xl font-bold text-taj-burgundy mb-2">
            Order Placed Successfully!
          </h3>
          <p className="text-center text-gray-600 mb-1">
            Your order will be served to you soon.
          </p>
          <p className="text-center text-gray-500 text-sm">
            This message will disappear in a few seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
