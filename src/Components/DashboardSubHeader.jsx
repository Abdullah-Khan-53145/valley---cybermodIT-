import React from "react";
import { KeyIcon, MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline";
function DashboardSubHeader({ title, subText, childerns }) {
  return (
    <section className="flex sm:flex-row flex-col-reverse sm:gap-0 gap-12 justify-between items-start md:px-16 px-5 sm:mt-8 mt-4 ">
      {/* Right part of the sub header */}
      <div className="flex gap-2">
        {/* icon comming as a prop according to location */}
        {childerns}
        {/* text including heading and subheading/tagline*/}
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-extrabold">{title}</h2>
          <p className="text-gray-500 text-md">{subText}</p>
        </div>
      </div>
      {/* Left part of the sub header containing access status and  trackings  */}
      <div className="flex sm:w-fit w-full sm:justify-normal justify-end gap-4">
        {/* Access Status */}
        <div className="tag">
          <KeyIcon className="w-4 h-4" />
          <span>Access: Unpaid</span>
        </div>
        {/* Tracking */}
        <div className="tag">
          <MagnifyingGlassPlusIcon className="w-4 h-4" />
          <span>Tracking: No</span>
        </div>
      </div>
    </section>
  );
}

export default DashboardSubHeader;
