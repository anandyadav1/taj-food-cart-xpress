
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-8 bg-taj-burgundy text-taj-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <img
              src="https://i.ibb.co/Kz0jCSr/taj-logo-gold.png"
              alt="Taj Hotel Logo"
              className="h-12 w-auto mr-3"
            />
            <div>
              <p className="text-lg font-serif font-bold">The Taj Flavours</p>
              <p className="text-sm text-taj-cream/70">Exquisite Dining Experience</p>
            </div>
          </div>
          
          <div className="mb-6 md:mb-0">
            <p className="text-taj-gold font-serif font-medium mb-2">Hours</p>
            <p className="text-sm">Mon-Thu: 11:00 AM - 10:00 PM</p>
            <p className="text-sm">Fri-Sun: 11:00 AM - 11:00 PM</p>
          </div>
          
          <div>
            <p className="text-taj-gold font-serif font-medium mb-2">Contact</p>
            <p className="text-sm">+91 (123) 456-7890</p>
            <p className="text-sm">info@tajflavours.com</p>
          </div>
        </div>
        
        <div className="border-t border-taj-cream/20 mt-6 pt-6 text-center">
          <p className="text-sm text-taj-cream/70">
            © {new Date().getFullYear()} The Taj Flavours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
