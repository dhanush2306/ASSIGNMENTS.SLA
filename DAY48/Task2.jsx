import React from "react";

const CenteredLayout = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Centered Content</h1>
        <p>This content is perfectly centered using Flexbox!</p>
      </div>
    </div>
  );
};

export default CenteredLayout;