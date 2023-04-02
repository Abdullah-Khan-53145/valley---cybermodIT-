import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { XMarkIcon } from "@heroicons/react/24/outline";
function CountTrackingModal({ status, setStatus }) {
  // States for controling the input components of form
  const [shippedToDate, setShippedToDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [shippedFromDate, setShippedFromDate] = useState({
    startDate: null,
    endDate: null,
  });
  // Functions for controling the input components of form

  const handleShippedToDateChange = (newShippedToDate) => {
    // Functions for controling shipped to, date

    setShippedToDate(newShippedToDate);
  };
  const handleShippedFromDateChange = (newShippedFromDate) => {
    // Functions for controling shipped from, date
    setShippedFromDate(newShippedFromDate);
  };
  return (
    // Main background
    <div
      className={` ${
        status ? "flex" : "hidden"
      } fixed z-10 inset-0  bg-modal  items-center justify-center`}
    >
      {/* More filter modal */}
      <div className="bg-white  flex flex-col items-center gap-6 py-4 rounded-2xl">
        {/* Modal Header */}
        <div className="flex w-full px-8 pb-4  border-b justify-between ">
          <h2 className="text-lg font-extrabold  ">
            Counting Tracking no for period
          </h2>
          <XMarkIcon
            onClick={() => setStatus(!status)}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        {/* Total number of trackings */}
        <div className="flex flex-col px-8 w-full">
          <h1 className="text-7xl text-orange-400 ">53</h1>
          <h1 className="text-sm  underline font-bold">Total Trackings</h1>
        </div>
        {/* Counter */}
        <div className="flex gap-6 px-8 w-fit ">
          <Datepicker
            useRange={false}
            primaryColor="blue"
            asSingle={true}
            placeholder={"Shipped to, Date"}
            toggleClassName="text-gray-900 w-8"
            inputClassName="outline-none border-0 bg-white focus:ring-0  focus:border-0  placeholder:text-lg text-lg pl-0"
            containerClassName="border-b border-gray-400 w-full "
            value={shippedToDate}
            onChange={handleShippedToDateChange}
          />
          <Datepicker
            useRange={false}
            primaryColor="blue"
            asSingle={true}
            placeholder={"Shipped from, Date"}
            toggleClassName="text-gray-900 w-8"
            inputClassName="outline-none border-0 bg-white focus:ring-0  focus:border-0  placeholder:text-lg text-lg pl-0"
            containerClassName="border-b border-gray-400 w-full"
            value={shippedFromDate}
            onChange={handleShippedFromDateChange}
          />
        </div>
        {/* Modal footer */}
        <div className="flex w-full px-8  mb-2  justify-start ">
          <button className="btn-secondary px-8 text-sm">Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default CountTrackingModal;
