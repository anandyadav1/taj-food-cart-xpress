
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Presentation: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Taj Flavours - Authentic Indian Restaurant",
      content: (
        <div className="flex flex-col items-center">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Restaurant" 
            className="rounded-lg shadow-xl w-full max-w-3xl mb-8"
          />
          <p className="text-xl text-taj-burgundy text-center max-w-2xl">
            Experience the rich, authentic flavors of India with our curated menu of 
            traditional dishes prepared by expert chefs.
          </p>
        </div>
      )
    },
    {
      title: "Interactive Digital Menu",
      content: (
        <div className="flex flex-col items-center">
          <div className="bg-white p-8 rounded-lg shadow-xl mb-8 w-full max-w-3xl">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="Food Menu" 
              className="rounded-lg shadow-md w-full mb-6"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-taj-cream p-4 rounded-lg">
                <h3 className="font-bold text-taj-burgundy mb-1">Filter & Search</h3>
                <p className="text-sm">Find dishes by category or keywords</p>
              </div>
              <div className="bg-taj-cream p-4 rounded-lg">
                <h3 className="font-bold text-taj-burgundy mb-1">Instant Cart</h3>
                <p className="text-sm">Add items with just one click</p>
              </div>
              <div className="bg-taj-cream p-4 rounded-lg">
                <h3 className="font-bold text-taj-burgundy mb-1">Bilingual Support</h3>
                <p className="text-sm">Menu in English and Hindi</p>
              </div>
              <div className="bg-taj-cream p-4 rounded-lg">
                <h3 className="font-bold text-taj-burgundy mb-1">Real-time Updates</h3>
                <p className="text-sm">See your order instantly</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Seamless Ordering Experience",
      content: (
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-8">
            <div className="bg-taj-burgundy text-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-2">Browse Menu</h3>
              <p>Explore our wide variety of authentic Indian dishes</p>
            </div>
            <div className="bg-taj-gold text-taj-burgundy p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-2">Place Order</h3>
              <p>Add items to cart and confirm your selection</p>
            </div>
            <div className="bg-taj-cream text-taj-burgundy p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-2">Enjoy Food</h3>
              <p>Receive your order and indulge in the flavors</p>
            </div>
          </div>
          <p className="text-lg text-taj-burgundy text-center max-w-2xl">
            Our digital ordering system provides a fast, error-free experience
            from selection to service.
          </p>
        </div>
      )
    },
    {
      title: "System Architecture",
      content: (
        <div className="flex flex-col items-center">
          <img 
            src="https://i.ibb.co/h8RkVYJ/taj-flavours-simplified-flowchart.png" 
            alt="System Architecture Flowchart" 
            className="w-full max-w-4xl rounded-lg shadow-xl mb-6"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              document.getElementById('flowchart-error')!.style.display = 'block';
            }}
          />
          <div 
            id="flowchart-error" 
            className="hidden border border-gray-300 rounded-lg p-8 text-center bg-gray-50 w-full max-w-4xl mb-6"
          >
            <p className="text-gray-600 font-medium">
              Flowchart image could not be loaded.
            </p>
            <p className="text-gray-500 mt-2">
              Please check your internet connection or contact support.
            </p>
          </div>
          <p className="text-lg text-taj-burgundy text-center max-w-2xl">
            Our intuitive system design ensures a smooth user journey from browsing to checkout.
          </p>
        </div>
      )
    },
    {
      title: "Order Management & Payment",
      content: (
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl mb-8 w-full max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-xl text-taj-burgundy mb-4">Order History</h3>
                <ul className="space-y-2">
                  <li className="bg-taj-burgundy/10 p-3 rounded">View past orders</li>
                  <li className="bg-taj-burgundy/10 p-3 rounded">Track payment status</li>
                  <li className="bg-taj-burgundy/10 p-3 rounded">Quick reorder</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl text-taj-burgundy mb-4">Payment Options</h3>
                <ul className="space-y-2">
                  <li className="bg-taj-gold/20 p-3 rounded">Credit/Debit Cards</li>
                  <li className="bg-taj-gold/20 p-3 rounded">Digital Wallets</li>
                  <li className="bg-taj-gold/20 p-3 rounded">Pay at Counter</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-lg text-taj-burgundy text-center max-w-2xl">
            Our secure payment system and comprehensive order management 
            ensures a hassle-free dining experience.
          </p>
        </div>
      )
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-taj-cream to-white flex flex-col">
      <div className="p-4 flex justify-between items-center">
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={() => navigate('/')}
        >
          <Home size={18} />
          Back to Website
        </Button>
        <h1 className="text-2xl font-bold text-taj-burgundy">Taj Flavours Presentation</h1>
        <div className="w-[100px]"></div> {/* Spacer for balance */}
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-5xl w-full">
          <h2 className="text-3xl font-bold text-center text-taj-burgundy mb-8 font-serif">
            {slides[currentSlide].title}
          </h2>
          
          <div className="min-h-[400px] flex items-center justify-center py-4">
            {slides[currentSlide].content}
          </div>
          
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
            <Button 
              onClick={prevSlide}
              className="bg-taj-burgundy hover:bg-taj-burgundy/80 text-white flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Previous
            </Button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? "w-8 bg-taj-burgundy" 
                      : "w-3 bg-gray-300 hover:bg-taj-gold"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              onClick={nextSlide}
              className="bg-taj-burgundy hover:bg-taj-burgundy/80 text-white flex items-center gap-2"
            >
              Next
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
      
      <footer className="p-4 text-center text-sm text-gray-500">
        © 2025 Taj Flavours. All rights reserved.
      </footer>
    </div>
  );
};

export default Presentation;
