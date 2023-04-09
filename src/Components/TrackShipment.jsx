import React from "react";
import Side from "../assets/side-bg.png";
import ServiceOne from "../assets/serviceOne.png";
import ServiceTwo from "../assets/serviceTwo.png";
import ServiceThree from "../assets/serviceThree.png";
import ServiceFour from "../assets/serviceFour.png";
import ServiceFive from "../assets/serviceFive.png";
import ServiceSix from "../assets/serviceSix.png";

function TrackShipment() {
  return (
    <section className="relative flex flex-col gap-14 mt-16 justify-center  items-center z-50 px-10">
      {/* Top text */}
      <img
        src={Side}
        className="  absolute md:top-0 top-32 left-0 -z-10 w-40 md:w-72"
        alt=""
      />
      <div className=" flex flex-col  justify-center  items-center gap-3">
        <h1 className="text-5xl font-extrabold ">
          Track Shipment By Any Courier
        </h1>
        <p className="text-xl text-gray-500">
          A courier company is responsible for the delivery of packages,
          documents, and mail between two parties.
        </p>
      </div>
      {/* stats on the website services */}
      <div className="grid grid-cols-2 ">
        <div className="border-b-2 border-r-2 pb-12 pt-8 h-40">
          <h2 className="text-4xl">10000+</h2>
          <span>happy Customer</span>
        </div>
        <div className="border-b-2 pl-16 pb-12 pt-8 h-40">
          <h2 className="text-4xl">500+</h2>
          <span>Reviews</span>
        </div>
        <div className="pr-16 border-r-2 h-40 pt-16">
          <h2 className="text-4xl ">25+</h2>
          <span>Courler Services Linked</span>
        </div>
        <div className="pl-16 h-40 pt-16">
          <h2 className="text-4xl">10000+</h2>
          <span>Trackings</span>
        </div>
      </div>
      {/* Imgs for curiers */}
      <div className="flex gap-8">
        <img className="md:w-24 w-16 object-contain" src={ServiceOne} alt="" />
        <img className="md:w-24 w-16 object-contain" src={ServiceTwo} alt="" />
        <img
          className="md:w-24 w-16 object-contain"
          src={ServiceThree}
          alt=""
        />
        <img className="md:w-24 w-16 object-contain" src={ServiceFour} alt="" />
        <img className="md:w-24 w-16 object-contain" src={ServiceFive} alt="" />
        <img className="md:w-24 w-16 object-contain" src={ServiceSix} alt="" />
      </div>
    </section>
  );
}

export default TrackShipment;
