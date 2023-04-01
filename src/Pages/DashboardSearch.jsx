import React, { useState } from "react";
import SearchFilters from "../Components/SearchFilters";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
      <section>
        {/* Search input */}
        <div>
          <MagnifyingGlassIcon className="w-4 h-4" />
          <input type="text" placeholder="Search" />
        </div>
        <Table head={tableHead} />
      </section>
    </main>
  );
}

export default DashboardSearch;
