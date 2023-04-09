import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
function DashboardExtention() {
  return (
    <main className="md:mx-16 mx-5 mt-12 flex items-start flex-col gap-8 pb-8">
      {/* Heading */}
      <h2 className="text-2xl font-semibold">Getmoretracks Chrome extension</h2>
      {/* Extention download button */}
      <button className="btn-primary">
        <ArrowDownTrayIcon className="w-4 h-4" />
        <span>Download Extention</span>
      </button>
      <iframe
        className="w-full md:h-[90vh] sm:h-[40vh] h-[30rem] mt-8"
        src="https://www.youtube.com/embed/SRd4i0oPjQ8"
        title="getmoretracks.com Chrome app"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </main>
  );
}

export default DashboardExtention;
