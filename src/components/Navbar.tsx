import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-6 bg-white shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo.png" alt="Logo" width={120} height={50} className="cursor-pointer" />
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6 px-4">
          <NavigationMenuItem>
            <Link to="/about-us" className="text-gray-700 hover:text-black">About Us</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/our-stories" className="text-gray-700 hover:text-black">Our Stories</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/adoption-process" className="text-gray-700 hover:text-black">Adoption Process</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/adopt-foster" className="text-gray-700 hover:text-black">Adopt/Foster a Furkid</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/be-involved" className="text-gray-700 hover:text-black">Be Involved</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/kennel-sponsorship" className="text-gray-700 hover:text-black">Kennel Sponsorship</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact-us" className="text-gray-700 hover:text-black">Contact Us</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/adoption-form" className="text-gray-700 hover:text-black">Adoption Form</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;