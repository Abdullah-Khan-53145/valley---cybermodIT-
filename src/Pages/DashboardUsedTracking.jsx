import React, { useState } from "react";
import {
  CalculatorIcon,
  MagnifyingGlassIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import Table from "../Components/Table";
import CountTrackingModal from "../Components/CountTrackingModal";
import FilterUsedTrackModal from "../Components/FilterUsedTrackModal";
function DashboardUsedTracking() {
  const tableHead = [
    "Tracking ID",
    "Note",
    "Date of Use",
    "Exp Delivery Date",
    "New Exp Delivery Date",
    "Difference",
    "Status",
  ];
  const tableBody = [
    [
      142142142,
      "-",
      "6 Mar, 2022",
      "8 Mar, 2022",
      "Without Changes",
      "On time",
      "Delivered",
    ],
    [
      142142142,
      "-",
      "6 Mar, 2022",
      "8 Mar, 2022",
      "23 Mar, 202",
      "On time",
      "Pending",
    ],
    [
      142142142,
      "-",
      "6 Mar, 2022",
      "8 Mar, 2022",
      "23 Mar, 202",
      "On time",
      "Pending",
    ],
    [
      142142142,
      "-",
      "6 Mar, 2022",
      "8 Mar, 2022",
      "Without Changes",
      "On time",
      "Delivered",
    ],
  ];

  const [toggleModal, setToggleModal] = useState(false);
  const [toggleFilterModal, setToggleFilterModal] = useState(false);
  return (
    // Used tracks main
    <main className="md:mx-16 mx-5 mt-5">
      <CountTrackingModal status={toggleModal} setStatus={setToggleModal} />
      <FilterUsedTrackModal
        status={toggleFilterModal}
        setStatus={setToggleFilterModal}
      />
      {/* counter card to open a counter modal to count the tracks used */}
      <div className="w-full flex justify-start">
        {/* counter card */}
        <div className="w-80 h-32 rounded-xl bg-orange-400 p-4 flex gap-4 justify-center items-center">
          <div className="flex gap-4 justify-center items-start">
            {/* dummy icon */}
            <div className="w-10 h-10 rounded-lg bg-white flex justify-center items-center ">
              <CalculatorIcon className="w-5 h-5" />
            </div>
            {/* text and button to open modal */}
            <div
              onClick={() => setToggleModal(true)}
              className="text-white flex flex-col gap-2 items-start"
            >
              <p>Count my total number for period</p>
              <button className="p-1 px-4 rounded-full border border-white ">
                Count
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Heading of tracking details */}
      <div className="flex flex-col gap-1 mt-10">
        <h2 className="text-2xl font-extrabold">Tracking Details</h2>
        <p className="text-gray-500 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/* Search tracking table section */}

      <section className=" flex flex-col gap-10  mt-10   bg-white">
        {/* Header of Used tracking section */}
        <div className="flex justify-between pt-8 px-8">
          {/* Search input */}
          <div className="flex items-center gap-2 py-2 text-lg">
            <div className="border-b border-gray-400 flex items-center gap-2 py-2 text-lg">
              <MagnifyingGlassIcon className="w-5 h-5" />
              <input type="text" placeholder="Search" />
            </div>
            <AdjustmentsHorizontalIcon
              onClick={() => setToggleFilterModal(true)}
              className="w-8 h-8 ml-4"
            />
          </div>
          {/* Dropdown to set the number of shown entries */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-extrabold" htmlFor="show-entries">
              Show entries
            </label>
            <select
              className="p-2 rounded-md border border-gray-400 outline-none"
              id="show-entries"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        <Table head={tableHead} body={tableBody} />
        {/* footer containing page toggling */}
        <div className="flex justify-between p-8 pt-0">
          {/* page buttons */}
          <div className="flex gap-2">
            <ArrowLongLeftIcon className="w-6" />
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-md  text-sm bg-gray-900 text-white">
                1
              </button>
              <button className="w-8 h-8 rounded-md  text-sm bg-orange-200 text-white">
                2
              </button>
              <button className="w-8 h-8 rounded-md  text-sm bg-orange-200 text-white">
                3
              </button>
            </div>
            <ArrowLongRightIcon className="w-6" />
          </div>
          {/* Result showing text */}
          <div className="text-sm font-extrabold">Showing 0 out 0 Results</div>
        </div>
      </section>
    </main>
  );
}

export default DashboardUsedTracking;
