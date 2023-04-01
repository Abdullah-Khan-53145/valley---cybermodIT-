import React, { useState } from "react";
import SearchFilters from "../Components/SearchFilters";
import {
  MagnifyingGlassIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Table from "../Components/Table";

function DashboardSearch() {
  const tableHead = [
    "Copy",
    "Tracking number",
    "Label created",
    "Shipped",
    "Delivery",
    "Expected delivery date",
    "status",
  ];
  return (
    <main>
      <SearchFilters />
      {/* Search tracking table section */}
      <section className="md:mx-16 flex flex-col gap-10 mx-5 mt-10   bg-white">
        {/* Header of Search tracking section */}
        <div className="flex justify-between pt-8 px-8">
          {/* Search input */}
          <div className="border-b border-gray-400 flex items-center gap-2 py-2 text-lg">
            <MagnifyingGlassIcon className="w-5 h-5" />
            <input type="text" placeholder="Search" />
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
        <Table head={tableHead} />
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

export default DashboardSearch;
