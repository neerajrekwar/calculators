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
    <header className="w-full bg-primary text-tP">
      <nav className="container mx-auto px-4 py-4  z-50 flex justify-between items-center">
        <Link href="/" className="z-50 text-2xl font-bold">
          wellit
        </Link>

        {/* Hamburger Icon for small screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 text-primary focus:outline-none"
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 z-50 bg-tPrimary mb-1"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 z-50 bg-tPrimary mb-1"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 z-50 bg-tPrimary"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden z-50 md:flex font-semibold space-x-8">
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
            className="md:hidden z-50 absolute top-16 left-0 w-full  flex flex-col items-center space-y-4 p-4"
          >
            <Link href="/" className="hover:text-gray-400" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Health
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-400"
              onClick={toggleMenu}
            >
              Research
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
