import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; 

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="w-full bg-blue-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" width={120} height={50} className="cursor-pointer" />
        </Link>

        <div className="hidden lg:flex gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="lg:hidden relative">
          <button
            className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Menu <Menu className="ml-2 w-5 h-5" />
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-48">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block px-4 py-2 text-blue-900 hover:bg-gray-200 transition-all"
                  onClick={() => setShowDropdown(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const navLinks = [
  { label: "About Us", path: "/about-us" },
  { label: "Our Stories", path: "/our-stories" },
  { label: "Adoption Process", path: "/adoption-process" },
  { label: "Adopt/Foster a Furkid", path: "/adopt-foster" },
  { label: "Be Involved", path: "/be-involved" },
  { label: "Kernel Sponsorship", path: "/kernel-sponsorship" },
  { label: "Contact Us", path: "/contact" },
  { label: "Adoption Form", path: "/adoption-form" },
];

export default Navbar;
