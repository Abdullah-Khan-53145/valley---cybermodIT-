import React from "react";
import AcceptRefundPolicy from "./AcceptRefundPolicy";

function Package({ price, trackings }) {
  return (
    <div className="p-12 flex flex-col gap-4 w-full md:max-w-[20rem] hover:shadow-lg cursor-pointer">
      <h3 className="text-sm font-bold ">{trackings} Tracks</h3>
      <h1 className="text-3xl font-bold flex items-center gap-2">
        $ {price} <span className="text-xs text-gray-400">/ Month</span>
      </h1>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur </p>
      <AcceptRefundPolicy />
      <button className="btn-primary hover:bg-header transition-colors w-full justify-center">
        Choose Plan
      </button>
    </div>
  );
}

export default Package;
