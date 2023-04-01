import React, { useEffect, useState } from "react";
import DashboardNavigation from "./DashboardNavigation";
import { Outlet, useLocation } from "react-router-dom";
import DashboardSubHeader from "./DashboardSubHeader";
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
} from "@heroicons/react/24/outline";
function Header() {
  // States
  const location = useLocation();
  const [subHeader, setSubHeader] = useState(setSubHeaderInfo());

  //   Functions
  function setSubHeaderInfo() {
    // funtion to set the heading, subheading and icon of the page based on the route
    const iconStyle = "w-6 h-6 mt-1";
    if (location.pathname === "/dashboard/search")
      return {
        title: "Search Tracks",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <MagnifyingGlassIcon className={iconStyle} />,
      };
    if (location.pathname === "/dashboard/used-tracking")
      return {
        title: "Used Tracking",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <ArchiveBoxIcon className={iconStyle} />,
      };
    if (location.pathname === "/dashboard/buy-a-plan")
      return {
        title: "Buy access for huzayfahhanif@gmail.com",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <ShoppingBagIcon className={iconStyle} />,
      };
    if (location.pathname === "/dashboard/tutorials")
      return {
        title: "Tutorials",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <AcademicCapIcon className={iconStyle} />,
      };
    if (location.pathname === "/dashboard/top-geo")
      return {
        title: "Top Geo",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <MapPinIcon className={iconStyle} />,
      };
    if (location.pathname === "/dashboard/contact-us")
      return {
        title: "Contact us",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <PhoneIcon className={iconStyle} />,
      };
    if (location.pathname === "/dashboard/api")
      return {
        title: "API",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <CodeBracketIcon className={iconStyle} />,
      };
    if (location.pathname === "/dashboard/extension")
      return {
        title: "Extention",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <ComputerDesktopIcon className={iconStyle} />,
      };
    else
      return {
        title: "Settings",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <Cog6ToothIcon className={iconStyle} />,
      };
  }
  useEffect(() => {
    setSubHeader(setSubHeaderInfo());
  }, [location]);
  return (
    <>
      <DashboardNavigation />
      <DashboardSubHeader
        title={subHeader.title}
        subText={subHeader.subText}
        childerns={subHeader.icon}
      />
      <Outlet />
    </>
  );
}

export default Header;
