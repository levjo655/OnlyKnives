import React from "react";
import { Link } from "react-router-dom";

export const KnifeCard = ({ name }) => (
  <div className="flex flex-col items-center gap-4">
    <div className="w-40 h-28 bg-gray-600"></div>
    <Link to="/knifePage">
      <p className="text-black text-sm">{name}</p>
    </Link>
    <Link to="/smiths">
      <button className="bg-gray-500 text-white px-4 py-1 text-xs">
        visit smith
      </button>
    </Link>
  </div>
);
