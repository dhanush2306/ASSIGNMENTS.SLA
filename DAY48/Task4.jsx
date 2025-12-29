import React from "react";

const ResponsiveText = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Responsive Heading
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl">
        This paragraph text scales depending on the screen size.
      </p>
    </div>
  );
};

export default ResponsiveText;