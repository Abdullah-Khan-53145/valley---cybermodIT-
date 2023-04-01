import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ArchiveBoxIcon,
  ShoppingBagIcon,
  AcademicCapIcon,
  MapPinIcon,
  PhoneIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
function DashboardNavigation() {
  // states
  const [isOpen, setOpen] = useState(false);
  return (
    <header
      className={`bg-header md:h-20 md:flex-row flex-col md:p-0   md:px-16  pb-3 overflow-hidden transition-all duration-300 ${
        isOpen ? "h-128" : "h-20"
      } header-nav flex justify-between items-center`}
    >
      {/* Side logo */}

      <div className="md:h-20  h-20 m-0 py-4 w-full md:w-fit md:p-0   flex items-center justify-between">
        <img
          className="w-24   md:ml-0 ml-6 object-contain"
          src={Logo}
          alt="Valley"
        />
        <div className="md:hidden block ">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#FFFFFF"
            size={17}
          />
        </div>
      </div>
      {/* Navigation */}
      <nav className="md:h-full h-max w-full md:w-3/4 lg:w-2/3 md:px-0 px-5">
        <ul className="flex md:flex-row flex-col  text-white w-full px-3 justify-around">
          <li className="header-nav-item ">
            <NavLink className="header-nav-item-a " to="search">
              <MagnifyingGlassIcon className="w-4 h-4" />
              <div>Search</div>
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink to="used-tracking" className="header-nav-item-a">
              <ArchiveBoxIcon className="w-4 h-4" />

              <div>Used Tracks</div>
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink to="buy-a-plan" className="header-nav-item-a">
              <ShoppingBagIcon className="w-4 h-4" />

              <div>Buy a plan</div>
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink to="tutorials" className="header-nav-item-a">
              <AcademicCapIcon className="w-4 h-4" />

              <div>Tutorials</div>
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink to="top-geo" className="header-nav-item-a">
              <MapPinIcon className="w-4 h-4" />

              <div>Top Geo</div>
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink to="contact-us" className="header-nav-item-a">
              <PhoneIcon className="w-4 h-4" />

              <div>Contact us</div>
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink to="api" className="header-nav-item-a">
              <CodeBracketIcon className="w-4 h-4" />

              <div>API</div>
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink to="extension" className="header-nav-item-a">
              <ComputerDesktopIcon className="w-4 h-4" />

              <div>Extention</div>
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink to="settings" className="header-nav-item-a">
              <Cog6ToothIcon className="w-4 h-4" />

              <div>Settings</div>
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* User Profile */}
      <div className="flex pb-4 md:p-0 items-center space-x-2 text-white">
        <img
          src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
          alt="user"
          className="w-9 h-9 rounded-full"
        />

        <ChevronDownIcon className="w-6 h-6 md:block hidden" />
        <button className="flex  space-x-1 md:hidden items-center  cursor-pointer text-gray-300 ">
          <span className="h-fit">Sign out</span>
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}

export default DashboardNavigation;
