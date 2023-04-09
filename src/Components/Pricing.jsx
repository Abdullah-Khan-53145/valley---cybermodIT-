import React from "react";

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
    <section className="flex flex-col items-center gap-12 my-20 py-7">
      <h1 className="text-5xl font-extrabold">Pricing</h1>
      <p className="text-xl text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      {/* pricing */}
      <div className="flex flex-wrap gap-12 mx-32 justify-center">
        {packages.map((pack, index) => (
          <div className="p-16 flex flex-col gap-4 md:w-80 w-full  shadow-lg hover:bg-gray-900 hover:text-white transition-colors">
            <span className="text-lg font-extrabold">
              {pack.trackings} tracks
            </span>
            <h2 className="text-4xl font-extrabold">
              {pack.trackings}{" "}
              <small className="text-sm font-light ">/month</small>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
