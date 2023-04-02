import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SavedIcon from "../assets/savedIcon.png";

function ZipSavedModal({ status, setStatus }) {
  return (
    <div
      className={` ${
        status ? "flex" : "hidden"
      } fixed z-10 inset-0  bg-modal  items-center justify-center`}
    >
      {/* More filter modal */}
      <div className="bg-white sm:mx-0 mx-8  flex flex-col justify-center items-center gap-6 py-4 rounded-2xl w-full max-w-[40rem]">
        {/* Modal Header */}
        <div className="flex w-full gap-12 items-center px-8 pb-4   justify-end ">
          <XMarkIcon
            onClick={() => setStatus(!status)}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        {/* payment information */}

        <div className="flex flex-col gap-8 px-8 w-fit justify-center items-center ">
          <img className="w-52" src={SavedIcon} alt="" />
          <h2 className="text-xl font-semibold pb-8">
            ZIP Codes saved successfully
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ZipSavedModal;
