import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
function ConfrimSignOutModal({ status, setStatus }) {
  return (
    <div
      className={` ${
        status ? "flex" : "hidden"
      } fixed z-10 inset-0  bg-modal  items-center justify-center`}
    >
      {/* More Signout Confrimation modal */}
      <div className="bg-white sm:mx-0 mx-8  flex flex-col justify-center items-center gap-6 py-4 rounded-2xl w-full max-w-[30rem]">
        {/* Modal Header */}
        <div className="flex w-full gap-12 items-center px-8 pb-4   justify-end ">
          <XMarkIcon
            onClick={() => setStatus(!status)}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        {/* Asking about the logout surety */}

        <div className="flex flex-col gap-6 px-8 w-fit justify-center items-center ">
          <h2 className="text-lg font-semibold ">
            Are you sure you wand to sign out?
          </h2>
          {/* Confrimation buttons */}
          <div className="flex gap-2 pb-8">
            <button className="btn-secondary hover:bg-blue-200 text-black py-3 px-8 text-sm font-semibold bg-blue-100">
              Cancel
            </button>
            <button className="btn-secondary py-3 px-8 text-sm font-semibold">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfrimSignOutModal;
