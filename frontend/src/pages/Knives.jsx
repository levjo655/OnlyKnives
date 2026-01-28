import React from "react";
import { Navbar, Footer, KnifeCard } from '../components';

const Knives = () => (
  <div className="bg-bg min-h-screen text-primaryText flex flex-col">
      <Navbar />

      {/* Page content */}
      <div className="max-w-5xl mx-auto p-10 flex-grow">
        {/* Filter bar */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-black text-sm">Filter ↓</span>

          <div className="bg-white px-2 py-1 flex items-center gap-2 border border-gray-400">
            <input className="outline-none text-sm text-black" placeholder="" />
          </div>
        </div>

        {/* Knife grid */}
        <div className="grid grid-cols-3 gap-16">
          <KnifeCard name="knife name 1" />
          <KnifeCard name="knife name 2" />
          <KnifeCard name="knife name 3" />
        </div>
      </div>

      <Footer />
    </div>
);

export default Knives;
