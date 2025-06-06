
import React, { useEffect } from "react";
import { Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import OrderHistory from "@/components/OrderHistory";
import Cart from "@/components/Cart";
import OrderConfirmation from "@/components/OrderConfirmation";
import OrderSuccess from "@/components/OrderSuccess";
import PaymentModal from "@/components/PaymentModal";
import Footer from "@/components/Footer";
import FlowChartImage from "@/components/FlowChartImage";
import { FoodCartProvider } from "@/context/FoodCartContext";

const Index: React.FC = () => {
  // When page loads, scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FoodCartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <div className="container mx-auto px-4 py-8">
            <OrderHistory />
            <MenuSection />
            <div className="py-8">
              <FlowChartImage />
              <div className="flex justify-center mt-6">
                <Button asChild className="bg-taj-burgundy hover:bg-taj-burgundy/80 text-white flex items-center gap-2">
                  <Link to="/presentation">
                    <Presentation size={18} />
                    View Full Presentation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        
        {/* Overlays */}
        <Cart />
        <OrderConfirmation />
        <OrderSuccess />
        <PaymentModal />
      </div>
    </FoodCartProvider>
  );
};

export default Index;
