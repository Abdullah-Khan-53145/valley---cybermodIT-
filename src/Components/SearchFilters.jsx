import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import Datepicker from "react-tailwindcss-datepicker";
import GoogleLogo from "../assets/google.svg";
import MoreFilterModal from "./MoreFilterModal";
function SearchFilters() {
  // States for controling the input components of form
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
  const [shippedFromCity, setShippedFromCity] = useState("");
  const [senderZip, setSenderZip] = useState("");
  const [destinationZip, setDestinationZip] = useState("");
  const [service, setService] = useState("usps");
  // State to toggle modal
  const [toggleModal, setToggleModal] = useState(false);

  // Functions for controling the input components of form

  const handleShippedToDateChange = (newShippedToDate) => {
    // Functions for controling shipped to, date

    setShippedToDate(newShippedToDate);
  };
  const handleShippedFromDateChange = (newShippedFromDate) => {
    // Functions for controling shipped from, date
    setShippedFromDate(newShippedFromDate);
  };
  const handleDeliveryDateChange = (newDeliveryDate) => {
    // Functions for controling delivery date

    setDeliveryDate(newDeliveryDate);
  };

  // Functions for Submitting the form and applying filters
  const handleSearchTrancks = (e) => {
    e.preventDefault();
    // Logic of filtering the tracks goes here
    alert(
      "Functionality will be implemented on the API integration for now Look at the console to see what you inputted"
    );
    console.log({
      shippedToDate,
      shippedFromDate,
      deliveryDate,
      shippedFromCity,
      senderZip,
      destinationZip,
      service,
    });
  };
  return (
    <>
      {/* More Filter modal to set up more filters */}
      <MoreFilterModal status={toggleModal} setStatus={setToggleModal} />
      {/*Filter Section to Search Tracks */}
      <section className="md:mx-16 flex flex-col gap-10 mx-5 mt-10 p-8  bg-white">
        {/* Changing the service of USPS to FEDEX or FEDEX to USPS */}
        <div className="flex justify-between">
          {/* left side buttons  */}
          <div>
            <button
              className={`${
                service === "usps"
                  ? "bg-orange-100 text-orange-400"
                  : "text-gray-400 hover:text-gray-700 transition-colors"
              } font-semibold  text-xl px-4 py-2 rounded-md`}
              onClick={() => setService("usps")}
            >
              USPS
            </button>
            <button
              className={`${
                service === "fedex"
                  ? "bg-orange-100 text-orange-400"
                  : "text-gray-400 hover:text-gray-700 transition-colors"
              } font-semibold  text-xl px-4 py-2 rounded-md`}
              onClick={() => setService("fedex")}
            >
              Fedex
            </button>
          </div>
          {/* Right side button to open more filters  */}
          <button
            onClick={() => setToggleModal(!toggleModal)}
            className="btn-primary"
          >
            <AdjustmentsHorizontalIcon className="w-5 h-5" />
            <span>More Filters</span>
          </button>
        </div>
        {/* Form containing main filters which are most useful */}
        <form onSubmit={handleSearchTrancks} className="flex flex-col gap-11">
          {/* Top row of input fields containing shipped to shipped from and delivery date along with destination zip */}
          <div className="flex md:flex-row flex-col justify-center gap-16 ">
            <Datepicker
              useRange={false}
              asSingle={true}
              placeholder={"Shipped to, Date"}
              toggleClassName="text-gray-900 w-8"
              inputClassName="outline-none focus:ring-0  focus:border-0  placeholder:text-lg text-lg pl-0"
              containerClassName="border-b border-gray-400 w-full "
              value={shippedToDate}
              onChange={handleShippedToDateChange}
            />
            <Datepicker
              useRange={false}
              asSingle={true}
              placeholder={"Shipped from, Date"}
              toggleClassName="text-gray-900 w-8"
              inputClassName="outline-none focus:ring-0  focus:border-0  placeholder:text-lg text-lg pl-0"
              containerClassName="border-b border-gray-400 w-full"
              value={shippedFromDate}
              onChange={handleShippedFromDateChange}
            />
            <Datepicker
              useRange={false}
              asSingle={true}
              placeholder={"Delivery By"}
              toggleClassName="text-gray-900 w-8"
              inputClassName="outline-none focus:ring-0  focus:border-0   placeholder:text-lg text-lg pl-4"
              containerClassName="border-b border-gray-400 w-full text-lg"
              value={deliveryDate}
              onChange={handleDeliveryDateChange}
            />
            <input
              type="text"
              value={destinationZip}
              onChange={(e) => setDestinationZip(e.target.value)}
              className="filter-text-inputs pl-4"
              placeholder="Destination Zip"
            />
          </div>
          {/* bottom row of input fields containing  shipped from city and sender's Zip(Beta) */}
          <div className="flex md:flex-row flex-col  gap-16 md:pr-8 md:mt-0 mt-4 md:w-1/2 w-full">
            <select
              type="text"
              className={`filter-text-inputs h-full font-light pb-2 pl-3 ${
                shippedFromCity === ""
                  ? "text-gray-400 text-lg"
                  : "text-gray-900"
              }`}
              value={shippedFromCity}
              onChange={(e) => setShippedFromCity(e.target.value)}
              placeholder="Shipped From City"
            >
              <option
                className="hover:bg-gray-400 active:bg-red-200"
                value=""
                disabled
              >
                Shipped From City
              </option>
              <option
                className="hover:bg-gray-400 active:bg-red-200"
                value="city1"
              >
                city 1
              </option>
              <option
                className="hover:bg-gray-400 active:bg-red-200"
                value="city2"
              >
                city 2
              </option>
            </select>
            <input
              type="text"
              value={senderZip}
              onChange={(e) => setSenderZip(e.target.value)}
              className="filter-text-inputs pb-2 pl-3 "
              placeholder="Sender's Zip (Beta)"
            />
          </div>
          {/* Submit button and Extention for the Chrome of the app */}
          <div className="flex gap-8">
            <button type="submit" className="btn-secondary">
              <MagnifyingGlassIcon className="w-5 h-5" />
              <span>Search Tracks</span>
            </button>
            <a className="flex items-center gap-2 underline" href="#">
              <img src={GoogleLogo} className="w-5 h-5" />
              <span>Try Chrome app for amazon sellers</span>
            </a>
          </div>
        </form>
      </section>
    </>
  );
}

export default SearchFilters;
