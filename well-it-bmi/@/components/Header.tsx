"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-primary text-tPrimary">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          wellit
        </Link>

        {/* Hamburger Icon for small screens */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <motion.div
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-8 h-0.5 bg-white mb-1"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-0.5 bg-white mb-1"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-8 h-0.5 bg-white"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/bmi" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            Health
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Research
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden absolute top-16 left-0 w-full  flex flex-col items-center space-y-4 p-4"
          >
            <Link href="/" className="hover:text-gray-400" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
