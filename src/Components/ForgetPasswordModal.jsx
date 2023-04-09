import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import LinkSendModal from "./LinkSendModal";
function ForgetPasswordModal({ status, setStatus }) {
  const [email, setEmail] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(!status);
    setToggle(true);
  };
  return (
    <>
      <LinkSendModal email={email} status={toggle} setStatus={setToggle} />
      <div
        className={` ${
          status ? "flex" : "hidden"
        } fixed z-10 inset-0  bg-modal  items-center justify-center`}
      >
        {/* More Signout Confrimation modal */}
        <div className="bg-white sm:mx-0 mx-8  flex flex-col justify-center items-center gap-6 py-4 rounded-2xl w-full max-w-[25rem]">
          {/* Modal Header */}
          <div className="flex w-full px-8 pb-4  border-b justify-between ">
            <h2 className="text-lg font-extrabold  ">Forgot Password</h2>
            <XMarkIcon
              onClick={() => setStatus(!status)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>
          {/* Asking about the logout surety */}

          <div className="flex flex-col gap-6 px-8 w-full justify-center items-center ">
            <div className="w-full">
              <input
                type="email"
                className="border-2  px-2 py-4 w-full"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Confrimation buttons */}
            <div className="flex gap-2 pb-8">
              <button
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="btn-secondary py-3 px-8 text-sm font-semibold"
              >
                Send Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPasswordModal;
