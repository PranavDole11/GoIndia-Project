"use client";
import DiscussionCard from "./components/DiscussionCard";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import SidebarMenu from "./components/sidebarmenu";
import MarketStoryCard from "./components/MarketStoryCard";
import stories from "./data/MarketStories.js";
import discussionData from "./data/DiscussionData.js";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"forum"|"stories">("forum");

  return (
    //Side menu
    <div className="flex h-screen overflow-hidden">
      <div className={`relative transition-all duration-500 ease-in-out ${menuOpen ? "w-64" : "w-8"} bg-blue-900`}>
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 border rounded-l px-1 py-2 z-10 shadow-md cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </div>

        {menuOpen && <SidebarMenu menuOpen={menuOpen} />}
      </div>

      {/*Mobile view tabs*/}
      <div className="md:hidden bg-white min-h-screen text-white">
        <div className="bg-blue-900 flex justify-around mb-4 border-b border-gray-700">
          <button
            className={`w-1/2 py-2 text-center transition-all duration-400 ${
              activeTab === "forum" ? "bg-blue-950 border-b-2 border-white font-semibold" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("forum")}
          >
            Forum
          </button>
          <button
            className={`w-1/2 py-2 text-center transition-all duration-400 ${
              activeTab === "stories" ? "bg-blue-950 border-b-2 border-white font-semibold" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("stories")}
          >
            Stories
          </button>
        </div>

        {/*Mobile view logic*/}
        {activeTab === "forum" && (
          <div className="flex flex-col gap-y-4 px-8">
            {discussionData.map((data,index) => (
              <DiscussionCard key={index} {...data}/>
            ))}
          </div>
        )}

        {activeTab === "stories" && (
          <div className="flex flex-col gap-y-4 px-4">
            {stories.map((story, index) => (
              <MarketStoryCard key={index} {...story} />
            ))}
          </div>
        )}
      </div>

      {/*desktop page*/}
      <div className="hidden md:flex w-full flex flex-1 transition-all duration-300 ease-in-out">
        <div
          className={`transition-all duration-500 ease-in-out p-4 bg-white border-r ${
            menuOpen ? "w-[70%]" : "w-[70%]"
          }`}
        >
          <h2 className="text-xl font-bold mb-4 text-red-400">DISCUSSION FORUM</h2>
          {
            <div className="w-[70%] p-4 overflow-y-auto">
              {discussionData.map((data,index) => (
              <DiscussionCard key={index} {...data}/>
            ))}
            </div>
          }
        </div>

        <div
          className={`transition-all duration-500 ease-in-out p-4 bg-gray-100 ${
            menuOpen ? "w-[30%]" : "w-[30%]"
          }`}
        >
          <h2 className="text-xl font-bold mb-4 text-red-400">MARKET STORIES</h2>
          <div className="flex flex-col gap-y-4">
            {stories.map((story, index) => (
              <MarketStoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
