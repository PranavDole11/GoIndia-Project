"use client";

import React from "react";
import { Bell, CircleDollarSign, MessageSquare, Bookmark, Building, Calendar, Newspaper,TrendingUp, Book } from "lucide-react";
const SidebarMenu = ({ menuOpen }: { menuOpen: boolean }) => {
  return (
    <div
      className={`bg-blue-900 transition-all duration-300 ease-in-out ${
        menuOpen ? "w-64" : "w-8"
      } flex flex-col items-start px-4 py-6 text-white h-screen relative`}
    >

      {menuOpen && (
        <div className="flex items-center mb-6 w-full justify-between">
          <span className="text-lg font-semibold">Hello, User</span>
          <Bell size={20} className="text-white" />
        </div>
      )}

      {menuOpen && (
        <nav className="flex flex-col gap-4 w-full">
          <button className="flex items-center gap-2 text-left hover:bg-blue-950 px-3 py-2 rounded"><MessageSquare size= {15}/> Discussion Forum</button>
          <button className="flex items-center gap-2 text-left hover:bg-blue-950 px-3 py-2 rounded"><CircleDollarSign size= {15}/>Market Stories</button>
          <button className="flex items-center gap-2 text-left hover:bg-blue-950 px-3 py-2 rounded"><TrendingUp size= {15}/>Sentiment</button>
          <button className="flex items-center gap-2 text-left hover:bg-blue-950 px-3 py-2 rounded"><Book size= {15}/>Market</button>
          <button className="flex items-center gap-2 text-left hover:bg-blue-950 px-3 py-2 rounded"><Building size= {15}/>Sector</button>
          <button className="flex items-center gap-2 text-left hover:bg-blue-950 px-3 py-2 rounded"><Bookmark size= {15}/>Watchlist</button>
          <button className="flex items-center gap-2 text-left hover:bg-blue-950 px-3 py-2 rounded"><Calendar size= {15}/>Events</button>
          <button className="flex items-center gap-2 text-left hover:bg-blue-950 px-3 py-2 rounded"><Newspaper size= {15}/>News/Interviews</button>
        </nav>
      )}
    </div>
  );
};
  
export default SidebarMenu;