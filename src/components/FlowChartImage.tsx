import React, { useState } from "react";
const FlowChartImage: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  return <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-taj-burgundy font-serif mb-4">
        Taj Flavours Website Concept Overview
      </h2>
      <div className="w-full max-w-4xl overflow-hidden">
        {!imageError ? <img alt="Taj Flavours Website Concept Overview" className="w-full h-auto object-contain" onError={() => setImageError(true)} src="/lovable-uploads/b8e58e7d-e2ba-4ae2-acd4-d86907fa7194.jpg" /> : <div className="border border-gray-300 rounded-lg p-8 text-center bg-gray-50 w-full">
            <p className="text-gray-600 font-medium">
              Flowchart image could not be loaded.
            </p>
            <p className="text-gray-500 mt-2">
              Please check your internet connection or contact support.
            </p>
          </div>}
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        A simplified overview of the Taj Flavours restaurant website functionality.
      </p>
    </div>;
};
export default FlowChartImage;