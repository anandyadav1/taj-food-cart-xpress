
import React, { useState, useEffect } from "react";
import { X, CreditCard, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/FoodCartContext";
import { formatCurrency } from "@/utils/formatCurrency";

const PaymentModal: React.FC = () => {
  const { orderHistory, isPaymentOpen, setIsPaymentOpen, completePayment } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const unpaidTotal = orderHistory
    .filter(order => !order.isPaid)
    .reduce((sum, order) => sum + order.total, 0);

  const handlePayment = () => {
    if (!paymentMethod) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      
      // Auto redirect after payment
      setTimeout(() => {
        completePayment();
      }, 2000);
    }, 2000);
  };

  useEffect(() => {
    if (isPaymentOpen) {
      setPaymentMethod("");
      setIsProcessing(false);
      setIsComplete(false);
    }
  }, [isPaymentOpen]);

  if (!isPaymentOpen) return null;

  const paymentMethods = [
    { id: "upi", name: "UPI", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" },
    { id: "card", name: "Credit/Debit Card", icon: "https://img.icons8.com/color/48/000000/visa.png" },
    { id: "paytm", name: "Paytm", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png" },
    { id: "gpay", name: "Google Pay", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/1024px-Google_Pay_Logo_%282020%29.svg.png" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={() => !isProcessing && !isComplete && setIsPaymentOpen(false)}
    >
      <div
        className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {isComplete ? (
          <div className="p-8 flex flex-col items-center justify-center">
            <CheckCircle size={64} className="text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Payment Successful!
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Thank you for your payment. Redirecting you back...
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-4 border-b bg-taj-burgundy text-taj-cream">
              <div className="flex items-center gap-2">
                <CreditCard size={20} />
                <h2 className="text-xl font-semibold font-serif">Payment</h2>
              </div>
              {!isProcessing && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-taj-cream hover:bg-taj-burgundy/80"
                  onClick={() => setIsPaymentOpen(false)}
                >
                  <X size={20} />
                </Button>
              )}
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-2 text-gray-800">
                  Amount to Pay
                </h3>
                <div className="text-3xl font-bold text-taj-burgundy">
                  {formatCurrency(unpaidTotal)}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-lg mb-3 text-gray-800">
                  Select Payment Method
                </h3>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                        paymentMethod === method.id
                          ? "border-taj-gold bg-taj-gold/10"
                          : "border-gray-200 hover:border-taj-gold/50"
                      }`}
                      onClick={() => setPaymentMethod(method.id)}
                    >
                      <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center">
                        <img
                          src={method.icon}
                          alt={method.name}
                          className="max-h-full max-w-full"
                        />
                      </div>
                      <span className="font-medium text-gray-800">
                        {method.name}
                      </span>
                      <div className="ml-auto">
                        <div
                          className={`h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center ${
                            paymentMethod === method.id
                              ? "bg-taj-burgundy border-taj-burgundy"
                              : ""
                          }`}
                        >
                          {paymentMethod === method.id && (
                            <div className="h-3 w-3 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                className="w-full bg-taj-burgundy hover:bg-taj-burgundy/80 text-taj-cream h-12 font-medium"
                disabled={!paymentMethod || isProcessing}
                onClick={handlePayment}
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 border-2 border-taj-cream border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  "Pay Now"
                )}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
