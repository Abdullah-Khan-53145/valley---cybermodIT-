import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

function AcceptRefundPolicy() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex gap-2">
      {/* custom check box */}
      <div
        className={`w-5 h-5 rounded-md flex items-center justify-center cursor-pointer  ${
          checked ? "bg-orange-400" : "bg-gray-200"
        }`}
        onClick={() => setChecked(!checked)}
      >
        <CheckIcon
          className={`text-white w-4 h-4 ${checked ? "block" : "hidden"}`}
        />
      </div>
      {/* Filter */}
      <label className="text-sm flex gap-1">
        <span>Accept</span>{" "}
        <a
          className="text-header hover:text-blue-950 underline font-bold"
          href="#"
        >
          Refund Policy
        </a>
      </label>
    </div>
  );
}

export default AcceptRefundPolicy;
