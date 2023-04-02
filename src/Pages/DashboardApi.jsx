import React from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
function DashboardApi() {
  return (
    <section className="md:mx-16 mx-5 mt-12 flex items-start flex-col gap-8">
      {/* Heading */}
      <h2 className="text-2xl font-semibold">
        Please contact us to get an access support@getmoretracks.com
      </h2>
      {/* Documentaion of API buttons */}
      <button className="btn-primary">
        <DocumentTextIcon className="w-4 h-4" />
        <span>API Documentation</span>
      </button>
    </section>
  );
}

export default DashboardApi;
