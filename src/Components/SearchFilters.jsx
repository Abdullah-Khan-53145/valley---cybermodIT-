import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import Datepicker from "react-tailwindcss-datepicker";
import GoogleLogo from "../assets/google.svg";
function SearchFilters() {
  const [shippedToDate, setShippedToDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [shippedFromDate, setShippedFromDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [deliveryDate, setDeliveryDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [shippedFromCity, setshippedFromCity] = useState();

  const handleShippedToDateChange = (newShippedToDate) => {
    setShippedToDate(newShippedToDate);
  };
  const handleShippedFromDateChange = (newShippedFromDate) => {
    setShippedFromDate(newShippedFromDate);
  };
  const handleDeliveryDateChange = (newDeliveryDate) => {
    setDeliveryDate(newDeliveryDate);
  };
  return (
    // Filter Section to Search Tracks
    <section className="md:mx-16 flex flex-col gap-10 mx-5 mt-10 p-8  bg-white">
      {/* Changing the service of USPS to FEDEX or FEDEX to USPS */}
      <div className="flex justify-between">
        {/* left side buttons  */}
        <div>
          <button className="bg-orange-100 font-semibold text-orange-400 text-xl px-4 py-2 rounded-md">
            USPS
          </button>
          <button className="font-semibold text-gray-400 text-xl px-4 py-2 rounded-md">
            {" "}
            FEDEX
          </button>
        </div>
        {/* Right side button to open more filters  */}
        <button className="flex items-center gap-2 text-white font-semibold bg-orange-400 text-sm px-6 py-2 rounded-md">
          <AdjustmentsHorizontalIcon className="w-5 h-5" />
          <span>More Filters</span>
        </button>
      </div>
      {/* Form containing main filters which are most useful */}
      <form className="flex flex-col gap-10">
        {/* Top row of input fields containing shipped to shipped from and delivery date along with destination zip */}
        <div className="flex justify-center gap-16 ">
          <Datepicker
            useRange={false}
            asSingle={true}
            placeholder={"Shipped to, Date"}
            toggleClassName="text-black"
            inputClassName="outline-none focus:ring-0  focus:border-0  placeholder:text-lg text-lg pl-0"
            containerClassName="border-b border-gray-400 w-full "
            value={shippedToDate}
            onChange={handleShippedToDateChange}
          />
          <Datepicker
            useRange={false}
            asSingle={true}
            placeholder={"Shipped from, Date"}
            toggleClassName="text-black"
            inputClassName="outline-none focus:ring-0  focus:border-0  placeholder:text-lg text-lg pl-0"
            containerClassName="border-b border-gray-400 w-full"
            value={shippedFromDate}
            onChange={handleShippedFromDateChange}
          />
          <Datepicker
            useRange={false}
            asSingle={true}
            placeholder={"Delivery By"}
            toggleClassName="text-black"
            inputClassName="outline-none focus:ring-0  focus:border-0   placeholder:text-lg text-lg pl-4"
            containerClassName="border-b border-gray-400 w-full text-lg"
            value={deliveryDate}
            onChange={handleDeliveryDateChange}
          />
          <input
            type="text"
            className="filter-text-inputs pl-4"
            placeholder="Destination Zip  "
          />
        </div>
        {/* bottom row of input fields containing  shipped from city and sender's Zip(Beta) */}
        <div className="flex  gap-16 pr-8 w-1/2">
          <select
            type="text"
            className="filter-text-inputs font-light pb-2 pl-3 text-gray-400"
            placeholder="Shipped From City"
          >
            <option value="city_1 ">Shipped From City</option>
            <option value="city1">city_1</option>
            <option value="city2">city_2</option>
          </select>
          <input
            type="text"
            className="filter-text-inputs pb-2 pl-3"
            placeholder="Sender's Zip (Beta)"
          />
        </div>
        {/* Submit button and Extention for the Chrome of the app */}
        <div className="flex gap-8">
          <button className="flex items-center gap-1 px-4 py-2 bg-header text-white text-lg rounded-lg">
            <MagnifyingGlassIcon className="w-5 h-5" />
            <span>Search Tracks</span>
          </button>
          <a className="flex items-center gap-1 underline" href="#">
            <img src={GoogleLogo} alt="" />
            <span>Try Chrome app for amazon sellers</span>
          </a>
        </div>
      </form>
    </section>
  );
}

export default SearchFilters;
