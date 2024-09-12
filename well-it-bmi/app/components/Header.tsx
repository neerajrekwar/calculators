"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full  text-tp  ">
      <nav className="container mx-auto px-4 py-4  z-50 flex justify-between items-center">
        <div className={alata.className}>
          <Link href="/" className="z-50 text-2xl font-semibold">
            <span>w</span>ellite
          </Link>
        </div>
        {/* Hamburger Icon for small screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 text-tS focus:outline-none"
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 z-50 text-tP  bg-accent mb-1"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 z-50 bg-accent mb-1"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 z-50 bg-accent"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden z-50 md:flex  space-x-8">
          <Link href="/bmi" className="hover:text-tS">
            Home
          </Link>
          <Link href="/about" className="hover:text-tS">
            BMI chart
          </Link>
          <Link href="/contact" className="hover:text-tS">
            blog
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden z-50 backdrop-blur-sm min-h-screen bg-primary absolute top-16 left-0 w-full  flex flex-col  space-y-4 p-4"
          >
            <Link href="/" className="hover:text-tS" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="hover:text-tS" onClick={toggleMenu}>
              BMI chart
            </Link>
            <Link
              href="/contact"
              className="hover:text-tS"
              onClick={toggleMenu}
            >
              blog
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
