import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 text-white border-b border-gray-800">
      <Link to="/" className="hover:text-gray-400">
        Home
      </Link>
      <Link to="/login" className="hover:text-gray-400">
        Login
      </Link>
    </nav>
  );
}
