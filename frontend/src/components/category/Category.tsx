import React from "react";

const Category: React.FC = () => {
  const categories = Array(7).fill("text");

  return (
    <div className="w-full px-10">
      <div className="flex justify-between items-start h-52">
        {categories.map((text, index) => (
          <div key={index} className="flex flex-col items-center w-24 h-full text-center">
            <div className="h-24 w-24 shadow-lg border-2 rounded-xl"></div>
            <div className="mt-2">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;