
import React from "react";

const FlowChartImage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-taj-burgundy font-serif mb-4">
        Taj Flavours Website Concept Overview
      </h2>
      <div className="w-full max-w-4xl overflow-hidden">
        <img 
          src="https://i.ibb.co/h8RkVYJ/taj-flavours-simplified-flowchart.png" 
          alt="Taj Flavours Website Concept Overview" 
          className="w-full h-auto object-contain"
        />
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        A simplified overview of the Taj Flavours restaurant website functionality.
      </p>
    </div>
  );
};

export default FlowChartImage;
