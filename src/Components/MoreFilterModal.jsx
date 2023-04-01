import React, { useState } from "react";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
function MoreFilterModal({ status, setStatus }) {
  const [filters, setFilters] = useState([
    { filter: "For Amazon/FB marketplace", status: false },
    { filter: "USPS First class 4-5 days", status: false },
    { filter: "For eBay/Paypal/Walmart", status: false },
    { filter: "Show only delivered", status: false },
    { filter: "For Esty", status: false },
    { filter: "Do not show delivered", status: false },
    { filter: "USPS Priority mail 2-3 days", status: false },
    { filter: "Show nearby zip codes", status: false },
  ]);
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
          <h2 className="text-lg font-extrabold  ">More Filters {status}</h2>
          <XMarkIcon
            onClick={() => setStatus(!status)}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        {/* All Filters container */}
        <div className="grid grid-cols-2 gap-6 px-8 w-fit ">
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

export default MoreFilterModal;
