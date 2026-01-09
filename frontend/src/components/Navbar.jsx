import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-border bg-bg">
      <h1 className="text-3xl font-bold text-accent">OnlyKnives </h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-accent2 transition">Home</Link>
        <Link to="/shop" className="hover:text-accent2 transition">Become a member</Link>
        <Link to="/login" className="hover:text-accent2 transition">Apply as a smith</Link>
         <Link to="/login" className="hover:text-accent2 transition">Login</Link>

      </div>
    </nav>
  );
}
