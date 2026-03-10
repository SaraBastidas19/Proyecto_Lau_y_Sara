import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Digital Agency
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition">
              Portfolio
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-2"
          >
            <span className={`h-0.5 w-6 bg-gray-700 transition ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-gray-700 transition ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-gray-700 transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
