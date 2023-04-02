import React from "react";
import {
  XMarkIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import Paypal from "../assets/Paypal.png";
function PaymentMethodModal({ status, setStatus }) {
  return (
    <div
      className={` ${
        status ? "flex" : "hidden"
      } fixed z-10 inset-0  bg-modal  items-center justify-center`}
    >
      {/* Payment modal */}
      <div className="bg-white  flex flex-col items-center gap-6 py-4 rounded-2xl">
        {/* Modal Header */}
        <div className="flex w-full gap-12 items-center px-8 pb-4  border-b justify-between ">
          <h2 className="text-lg font-extrabold  ">Select Payment Method</h2>
          <XMarkIcon
            onClick={() => setStatus(!status)}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        {/* payment meathods */}

        <div className="flex flex-col gap-4 px-8 w-full ">
          <button className="w-full py-4 flex items-center justify-center gap-2 btn-secondary">
            <img src={Paypal} className="w-5 h-5 object-contain" alt="" />
            <span>Pay with Paypal</span>
          </button>
          <button className="w-full py-4 flex items-center justify-center gap-2 btn-primary text-lg">
            <CurrencyDollarIcon className="w-5 h-5 text-white" />

            <span>Pay with Card</span>
          </button>
          <button className="w-full py-4 flex items-center justify-center gap-2 btn-secondary bg-blue-950 hover:bg-header">
            <CreditCardIcon className="w-5 h-5 text-white" />
            <span>Pay with Balance</span>
          </button>
        </div>

        {/* All Filters container */}
        <div className="flex gap-6 px-8 w-fit "></div>
      </div>
    </div>
  );
}

export default PaymentMethodModal;
