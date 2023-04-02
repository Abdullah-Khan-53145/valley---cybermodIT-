import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
function FilterUsedTrackModal({ status, setStatus }) {
  // States for controling the input components of form
  const [shippedToDate, setShippedToDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [shippedFromDate, setShippedFromDate] = useState({
    startDate: null,
    endDate: null,
  });

  const [filters, setFilters] = useState([
    { filter: "Show only changed tracking #", status: false },
    { filter: "Arriving earlier", status: false },
    { filter: "Arriving later", status: false },

    { filter: "in transit", status: false },
  ]);

  // Functions for controling the input components of form

  const handleShippedToDateChange = (newShippedToDate) => {
    // Functions for controling shipped to, date

    setShippedToDate(newShippedToDate);
  };
  const handleShippedFromDateChange = (newShippedFromDate) => {
    // Functions for controling shipped from, date
    setShippedFromDate(newShippedFromDate);
  };

  const handleFilterToggle = (filterName) => {
    // Find the index of the object with the same filterName
    const filterIndex = filters.findIndex(
      (filter) => filter.filter === filterName
    );

    if (filterIndex !== -1) {
      // If the object exists, update its status property
      const updatedFilters = [...filters];
      updatedFilters[filterIndex] = {
        ...updatedFilters[filterIndex],
        status: updatedFilters[filterIndex].status === true ? false : true,
      };
      setFilters(updatedFilters);
    }
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
            Filter my used tracking no's
          </h2>
          <XMarkIcon
            onClick={() => setStatus(!status)}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        {/* All Filters container */}
        <div className="grid grid-cols-2 gap-6 px-8 w-fit ">
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
          <input
            type="text"
            className="filter-text-inputs pl-4 pb-3 mb-4"
            placeholder="Destination Zip"
          />
          <div></div>
          {filters.map((filter, index) => (
            <div key={index} className="flex gap-2">
              {/* custom check box */}
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center cursor-pointer  ${
                  filter.status ? "bg-orange-400" : "bg-gray-200"
                }`}
                onClick={() => handleFilterToggle(filter.filter)}
              >
                <CheckIcon
                  className={`text-white w-4 h-4 ${
                    filter.status ? "block" : "hidden"
                  }`}
                />
              </div>
              {/* Filter */}
              <label className="text-sm ">{filter.filter}</label>
            </div>
          ))}
        </div>
        {/* Modal Header */}
        <div className="flex w-full px-8  mb-2  justify-start ">
          <button className="btn-secondary px-8 text-sm">Filter Now</button>
        </div>
      </div>
    </div>
  );
}

export default FilterUsedTrackModal;
