import React from "react";
import {
  XMarkIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import PaypalStripe from "../assets/paypalStripe.png";
function PaymentInfoModal({ status, setStatus }) {
  return (
    <div
      className={` ${
        status ? "flex" : "hidden"
      } fixed z-10 inset-0  bg-modal  items-center justify-center`}
    >
      {/* More filter modal */}
      <div className="bg-white sm:mx-0 mx-8  flex flex-col items-center gap-6 py-4 rounded-2xl">
        {/* Modal Header */}
        <div className="flex w-full gap-12 items-center px-8 pb-4  border-b justify-between ">
          <h2 className="text-lg font-extrabold  ">
            Information about payment
          </h2>
          <XMarkIcon
            onClick={() => setStatus(!status)}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        {/* payment information */}

        <div className="flex flex-col gap-6 px-8 w-ful max-w-[50rem] ">
          <p className="text-lg">
            We don't keep your payment data. All payments secured by PayPal and
            Stripe. We don't accept Amex cards.
          </p>
          <img className="w-80" src={PaypalStripe} alt="" />
          <p className="text-lg">
            * After you made a payment you will have an access for 1 monthIf you
            used your package of tracks you can buy a new one and a get 1 month
            to use it You can pay by PayPal. But if you don't have it, you can
            send a payment to Payoneer as well. Write here to get details
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfoModal;
