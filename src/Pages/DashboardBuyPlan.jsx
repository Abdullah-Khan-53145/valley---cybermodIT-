import React, { useState } from "react";
import Package from "../Components/Package";
import AcceptRefundPolicy from "../Components/AcceptRefundPolicy";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import PaymentInfoModal from "../Components/PaymentInfoModal";

function DashboardBuyPlan() {
  const [toggleModal, setToggleModal] = useState(false);
  const packages = [
    {
      price: 9.99,
      trackings: 50,
    },
    {
      price: 29.99,
      trackings: 200,
    },
    {
      price: 49.99,
      trackings: 500,
    },
    {
      price: 79.99,
      trackings: 1000,
    },
    {
      price: 109.99,
      trackings: 3000,
    },
    {
      price: 159.99,
      trackings: 5000,
    },
    {
      price: 199.99,
      trackings: 10000,
    },
  ];
  return (
    <main
      className="md:mx-16
    mx-5 pb-8"
    >
      <PaymentInfoModal status={toggleModal} setStatus={setToggleModal} />
      {/* Buy a plan header */}
      <div className="flex w-full justify-between py-12 border-b ">
        <AcceptRefundPolicy />
        {/* payment information link to open modal */}
        <div
          className="flex cursor-pointer gap-2"
          onClick={() => setToggleModal(true)}
        >
          <InformationCircleIcon className="text-blue-500 w-5 h-5" />
          <p>We don’t keep your payment data</p>
        </div>
      </div>
      {/* Packages grid  */}
      <div className="flex flex-wrap gap-8 pt-12">
        {packages.map((pack, index) => (
          <Package price={pack.price} trackings={pack.trackings} />
        ))}
        {/* Need a Custom package section */}
        <div className="shadow flex flex-col gap-4 w-full md:max-w-[20rem]  justify-center items-center">
          <h3 className="text-sm font-bold text-center">
            Need a <br /> beginner Plan?
          </h3>
          <button className="text-sm p-1 px-2 rounded-full border border-gray-950">
            contact us
          </button>
        </div>
      </div>
    </main>
  );
}

export default DashboardBuyPlan;
