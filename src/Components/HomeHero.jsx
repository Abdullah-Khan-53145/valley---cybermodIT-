import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Hero from "../assets/hero.svg";
function HomeHero() {
  return (
    <section className="flex md:flex-row flex-col-reverse gap-8  items-center  md:justify-between lg:justify-around p-10 ">
      {/* Left section of text */}
      <div className="w-full  md:max-w-[40rem] md:text-left text-center flex flex-col items-start gap-12">
        <h1 className="text-5xl font-extrabold md:max-w-[40rem] leading-12">
          Premium Global Package Tracking For{" "}
          <span className="text-orange-400">e-Commerce business</span>
        </h1>
        <p className="text-xl md:max-w-[40rem] leading-8 text-gray-500">
          Track packages from China, USPS, Canada Post, Royal Mail, Deutsche
          Post, LBC, Aliexpress, UPS, Shein, FedEx, Pitney Bowes, eBay, Amazon
        </p>
        <button className="btn-primary md:w-fit w-full flex justify-center">
          <span>Get Started</span> <ArrowLongRightIcon className="w-5" />
        </button>
      </div>
      {/* Hero section image */}
      <div className="w-[40rem] ">
        <img src={Hero} className="w-full object-contain" alt="" />
      </div>
    </section>
  );
}

export default HomeHero;
