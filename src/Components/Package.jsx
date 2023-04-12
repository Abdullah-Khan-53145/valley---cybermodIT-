import React, { useState } from "react";
import AcceptRefundPolicy from "./AcceptRefundPolicy";
import PaymentMethodModal from "../Components/PaymentMethodModal";
import { useLocation } from "react-router-dom";
function Package({ price, trackings }) {
  const location = useLocation();
  console.log(location.pathname);
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <div
      className={`p-12 flex flex-col  w-full md:max-w-[20rem] bg-white ${
        location.pathname !== "/pricing"
          ? "hover:shadow-lg gap-4"
          : "shadow-lg gap-10"
      } cursor-pointer`}
    >
      <PaymentMethodModal status={toggleModal} setStatus={setToggleModal} />
      <h3 className="text-sm font-bold ">{trackings} Tracks</h3>
      <h1 className="text-3xl font-bold flex items-center gap-2">
        $ {price} <span className="text-xs text-gray-400">/ Month</span>
      </h1>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur </p>
      {}
      {location.pathname !== "/pricing" && <AcceptRefundPolicy />}
      <button
        onClick={() => setToggleModal(true)}
        className="btn-primary hover:bg-header transition-colors w-full justify-center"
      >
        Choose Plan
      </button>
    </div>
  );
}

export default Package;
