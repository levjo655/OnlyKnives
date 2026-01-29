import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../core";

export const Navbar = () => (
  <nav className="flex justify-between items-center p-6 border-b border-border bg-bg dark:bg-gray-900 dark:border-gray-700">
    <h1 className="text-3xl font-bold text-accent dark:text-blue-400">OnlyKnives </h1>
    <div className="flex gap-6 items-center">
      <Link to="/" className="hover:text-accent2 transition dark:text-gray-300 dark:hover:text-blue-400">Home</Link>
      <Link to="/shop" className="hover:text-accent2 transition dark:text-gray-300 dark:hover:text-blue-400">Become a member</Link>
      <Link to="/smithsignup" className="hover:text-accent2 transition dark:text-gray-300 dark:hover:text-blue-400">Apply as a smith</Link>
      <Link to="/login" className="hover:text-accent2 transition dark:text-gray-300 dark:hover:text-blue-400">Login</Link>
      <ThemeToggle />
    </div>
  </nav>
);

