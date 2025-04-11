import React from "react";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Side Menu */}
      <div
        className={`bg-gray-200 transition-all duration-300 ease-in-out ${
          menuOpen ? "w-64" : "w-8"
        } flex items-center justify-center cursor-pointer relative`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-l px-1 py-2 shadow-md">
          {menuOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </div>
        {menuOpen && <div className="p-4">Menu Content</div>}
      </div>

      {/* Main Content */}
      <div className="flex flex-1 transition-all duration-300 ease-in-out">
        {/* Discussion Forums */}
        <div
          className={`transition-all duration-300 ease-in-out p-4 bg-white border-r ${
            menuOpen ? "w-[60%]" : "w-[70%]"
          }`}
        >
          <h2 className="text-xl font-bold mb-4">Discussion Forums</h2>
          {/* Forum components go here */}
        </div>

        {/* Market Stories */}
        <div
          className={`transition-all duration-300 ease-in-out p-4 bg-gray-100 ${
            menuOpen ? "w-[40%]" : "w-[30%]"
          }`}
        >
          <h2 className="text-xl font-bold mb-4">Market Stories</h2>
          {/* Market story components go here */}
        </div>
      </div>
    </div>
  );
}
