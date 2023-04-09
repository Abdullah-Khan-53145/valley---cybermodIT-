import React from "react";
import Qty1 from "../assets/qty1.png";
import Qty2 from "../assets/qty2.png";
import Qty3 from "../assets/qty3.png";
function Services() {
  return (
    <section className="flex justify-center p-10 md:py-24 text-white bg-header flex-wrap md:justify-around">
      {/* service card */}
      <div className="flex flex-col gap-2 items-center p-8 w-[30rem]">
        <img src={Qty1} className="w-24 h-24 object-contain" alt="" />
        <h2 className="text-2xl font-bold">ISO 27001 Certified</h2>
        <p className="text-xl text-center">
          Nulla non quam lectus. Quisque efficitur arcu sed massa feugiat, sit
          amet
        </p>
      </div>
      {/* service card */}
      <div className="flex flex-col gap-2 items-center p-8 w-[30rem]">
        <img src={Qty2} className="w-24 h-24 object-contain" alt="" />
        <h2 className="text-2xl font-bold">GDPR Compliant</h2>
        <p className="text-xl text-center">
          Nulla non quam lectus. Quisque efficitur arcu sed massa feugiat, sit
          amet
        </p>
      </div>
      {/* service card */}
      <div className="flex flex-col gap-2 items-center p-8 w-[30rem]">
        <img src={Qty3} className="w-24 h-24 object-contain" alt="" />
        <h2 className="text-2xl font-bold">24/7 Support</h2>
        <p className="text-xl text-center">
          Nulla non quam lectus. Quisque efficitur arcu sed massa feugiat, sit
          amet
        </p>
      </div>
    </section>
  );
}

export default Services;
