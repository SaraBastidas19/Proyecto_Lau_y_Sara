import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-[#F2BDC7] border-b-2 border-[#F2BDC7] pb-0.5 font-semibold transition'
      : 'text-gray-700 hover:text-[#E192A7] transition';

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? 'block py-2 text-[#F2BDC7] border-b-2 border-[#F2BDC7] font-semibold transition'
      : 'block py-2 text-gray-700 hover:text-[#E192A7] transition';

  const contactBtnClass = ({ isActive }) =>
    isActive
      ? 'inline-block px-6 py-3 font-semibold rounded-lg cursor-not-allowed opacity-80 transition text-white'
      : 'btn-primary';

  const contactBtnStyle = ({ isActive }) =>
    isActive ? { backgroundColor: '#d87a93' } : {};

  return (
    <nav className="fixed top-0 w-full bg-[#F9FAFB] shadow-md z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="text-2xl font-bold text-[#E192A7]">
            Digital Agency
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={contactBtnClass} style={contactBtnStyle}>
              Contact Us
            </NavLink>
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
            <NavLink
              to="/"
              end
              className={mobileNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={mobileNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/portfolio"
              className={mobileNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/about"
              className={mobileNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'block px-6 py-3 font-semibold rounded-lg cursor-not-allowed opacity-80 text-white text-center'
                  : 'block btn-primary text-center'
              }
              style={contactBtnStyle}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
