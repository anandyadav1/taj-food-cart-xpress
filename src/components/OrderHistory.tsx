
import React from "react";
import { Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/FoodCartContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { Separator } from "@/components/ui/separator";

const OrderHistory: React.FC = () => {
  const { orderHistory, setIsPaymentOpen } = useCart();

  if (orderHistory.length === 0) {
    return null;
  }

  const totalAmount = orderHistory.reduce((sum, order) => sum + order.total, 0);
  const unpaidOrders = orderHistory.filter((order) => !order.isPaid);

  return (
    <div className="bg-taj-burgundy/5 py-8 px-4 rounded-lg mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-taj-burgundy font-serif">
          Order History
        </h2>
        {unpaidOrders.length > 0 && (
          <Button
            className="bg-taj-gold hover:bg-taj-gold/80 text-taj-burgundy flex items-center gap-2"
            onClick={() => setIsPaymentOpen(true)}
          >
            <CreditCard size={18} />
            Proceed to Payment
          </Button>
        )}
      </div>

      <Separator className="mb-4 bg-taj-burgundy/10" />

      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {orderHistory.map((order) => (
          <div
            key={order.id}
            className={`bg-white rounded-lg shadow p-4 border-l-4 ${
              order.isPaid ? "border-green-500" : "border-taj-gold"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-taj-burgundy/70" />
                <span className="text-sm text-taj-burgundy/70">
                  {new Date(order.date).toLocaleString()}
                </span>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  order.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {order.isPaid ? "Paid" : "Payment Pending"}
              </span>
            </div>

            <Separator className="my-2 bg-taj-burgundy/10" />

            <div className="space-y-1 mb-3">
              {order.items.map((item) => (
                <div
                  key={`${order.id}-${item.id}`}
                  className="flex justify-between text-sm"
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

            <div className="flex justify-between font-semibold">
              <span className="text-taj-burgundy">Total:</span>
              <span className="text-taj-burgundy">{formatCurrency(order.total)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 bg-white p-4 rounded-lg border border-taj-gold/30">
        <span className="text-lg font-semibold text-taj-burgundy">
          Total Amount:
        </span>
        <span className="text-xl font-bold text-taj-burgundy">
          {formatCurrency(totalAmount)}
        </span>
      </div>
    </div>
  );
};

export default OrderHistory;
