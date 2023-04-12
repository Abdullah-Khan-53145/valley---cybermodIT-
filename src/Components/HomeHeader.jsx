import React, { useState } from "react";
import Logo from "../assets/homeLogo.png";
import Hamburger from "hamburger-react";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function HomeHeader() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header
        className={`flex flex-col md:shadow-none  md:gap-0 shadow-md md:flex-row bg-white items-center justify-between px-8  md:py-8 pt-5 transition-all overflow-hidden md:h-fit ${
          isOpen ? "h-[30rem]" : "h-24"
        }`}
      >
        {/* Left Logo Portion */}
        <div className="md:w-fit w-full md:h-fit h-14 flex justify-between items-center ">
          <img
            className="h-full md:ml-0 ml-3 w-24 object-contain"
            src={Logo}
            alt=""
          />
          {/* Hamburger icon to toggle navigation menu for mobile and tablet  */}
          <div className="md:hidden block ">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="black"
              size={17}
            />
          </div>
        </div>
        {/* Mid navigation section */}
        <nav className="md:static flex flex-col md:flex-row md:w-fit w-full md:px-0 px-4 md:py-0 py-16">
          <ul className="flex flex-col md:flex-row md:text-lg text-2xl font-bold gap-8">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>

            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
          <div className="md:hidden gap-4 flex text-2xl mt-6">
            <button
              onClick={() => navigate("/accounts/login")}
              className="rounded-s-full rounded-e-full py-2 px-6 text-white bg-orange-400"
            >
              Sign in
            </button>
            <button
              onClick={() => navigate("/accounts/register")}
              className="rounded-s-full rounded-e-full py-2 px-6 text-white bg-header"
            >
              Sign up
            </button>
          </div>
        </nav>
        {/* Right signin/signup Buttons portion */}
        <div className="md:flex gap-4 hidden">
          <button
            onClick={() => navigate("/accounts/login")}
            className="rounded-s-full rounded-e-full py-2 px-6 text-white bg-orange-400"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/accounts/register")}
            className="rounded-s-full rounded-e-full py-2 px-6 text-white bg-header"
          >
            Sign up
          </button>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default HomeHeader;
