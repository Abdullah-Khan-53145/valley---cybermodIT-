import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

function CustomCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="w-full  flex justify-center">
      <div
        className={`w-5 h-5  rounded-md flex items-center justify-center cursor-pointer  ${
          checked ? "bg-orange-400" : "bg-gray-200"
        }`}
        onClick={() => setChecked(!checked)}
      >
        <CheckIcon
          className={`text-white w-4 h-4 ${checked ? "block" : "hidden"}`}
        />
      </div>
    </div>
  );
}

export default CustomCheckbox;
