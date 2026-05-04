import React from "react";

const Banner = () => {
  return (
    <div className="w-[90%] max-w-6xl mx-auto mt-8">
      <div className="bg-gray-100 rounded-3xl px-16 py-14 flex flex-col md:flex-row items-center justify-between shadow-sm">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn bg-lime-500 hover:bg-lime-600 border-none text-white px-8 text-lg font-semibold rounded-lg shadow-md">
            View The List
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img
            className="w-52 md:w-64 object-contain"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Book"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;