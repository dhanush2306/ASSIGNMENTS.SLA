import React from "react";

const SimpleCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x200"
        alt="Card Image"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">Card Title</h2>
        <p className="text-gray-700 mb-4">
          This is a simple card example using Tailwind CSS. You can add any content here.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Action
        </button>
      </div>
    </div>
  );
};

export default SimpleCard;