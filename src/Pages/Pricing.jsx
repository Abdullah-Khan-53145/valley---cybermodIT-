import React from "react";
import Package from "../Components/Package";
import HomeFooter from "../Components/HomeFooter";
import Contact from "../Components/Contact";
import pricingBG from "../assets/pricingBg.svg";
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
function Pricing() {
  return (
    <main>
      <section className="flex flex-col items-center gap-8 pb-12 relative z-10 mt-12">
        <img src={pricingBG} className="absolute left-0 -z-10" alt="" />
        <h1 className="text-5xl font-extrabold text-center">
          Buy Monthly Packages Today!
        </h1>
        <p className="text-xl max-w-[50rem] text-center text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla non quam
          lectus. Quisque efficitur arcu sed massa eugiat, sit amet iaculis odio
          dapibus.{" "}
        </p>
        <div className="flex flex-wrap gap-8 justify-center pt-12 md:mx-0 mx-4">
          {packages.map((pack, index) => (
            <Package price={pack.price} trackings={pack.trackings} />
          ))}
        </div>
      </section>
      <Contact />
      <HomeFooter />
    </main>
  );
}

export default Pricing;
