import { Link } from "react-router-dom";
import KnifePage from "../pages/knifePage";

export default function KnifeCard({ name }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* image placeholder */}
      <div className="w-40 h-28 bg-gray-600"></div>

      {/* knife name */}
      <Link to="/knifePage">
        <p className="text-black text-sm">{name}</p>
      </Link>

      {/* visit smith */}
      <Link to="/smiths">
        <button className="bg-gray-500 text-white px-4 py-1 text-xs">
          visit smith
        </button>
      </Link>
    </div>
  );
}
