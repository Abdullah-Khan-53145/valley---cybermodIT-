import React from "react";
import Dummy from "../assets/dummy.png";
import { StarIcon } from "@heroicons/react/24/solid";
const dummyArray = [1, 2, 3, 4];
function CustomerReviews() {
  return (
    <section className="flex flex-col gap-4 p-10 my-52">
      <h1 className="text-5xl font-extrabold">Customer Reviews</h1>
      <p className="text-xl text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      {/* Customer Reviews */}
      <div className=" customer-reviews flex flex-col w-full gap-4 overflow-x-auto">
        <div className="flex gap-4">
          {dummyArray.map((index) => (
            <div className="w-[30rem] min-w-[30rem] p-10 border flex flex-col gap-4 rounded-md">
              {/* card header containing use info */}
              <div className="flex gap-4">
                <img src={Dummy} alt="" />
                <div>
                  <h2 className="font-extrabold">Adam Smith</h2>
                  <p>Worker</p>
                </div>
              </div>
              {/* customer review */}
              <p>
                “Nulla non quam lectus. Quisque efficitur arcu sed massa
                feugiat, sit amet iaculis odio dapibus. Cras quis tempor massa,
                id vulputate leo.”
              </p>
              {/* Review footer */}
              <div className="flex justify-between">
                {/* time */}
                <div className="text-gray-600">9.00 PM - 21 Aug, 2022</div>
                {/* Stars */}
                <div className="flex">
                  <StarIcon className="w-5 h-5 text-black" />
                  <StarIcon className="w-5 h-5 text-black" />
                  <StarIcon className="w-5 h-5 text-black" />
                  <StarIcon className="w-5 h-5 text-black" />
                  <StarIcon className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          {dummyArray.map((index) => (
            <div className="w-[30rem] min-w-[30rem] p-10 border flex flex-col gap-4 rounded-md">
              {/* card header containing use info */}
              <div className="flex gap-4">
                <img src={Dummy} alt="" />
                <div>
                  <h2 className="font-extrabold">Adam Smith</h2>
                  <p>Worker</p>
                </div>
              </div>
              {/* customer review */}
              <p>
                “Nulla non quam lectus. Quisque efficitur arcu sed massa
                feugiat, sit amet iaculis odio dapibus. Cras quis tempor massa,
                id vulputate leo.”
              </p>
              {/* Review footer */}
              <div className="flex justify-between">
                {/* time */}
                <div className="text-gray-500">9.00 PM - 21 Aug, 2022</div>
                {/* Stars */}
                <div className="flex">
                  <StarIcon className="w-5 h-5 text-black" />
                  <StarIcon className="w-5 h-5 text-black" />
                  <StarIcon className="w-5 h-5 text-black" />
                  <StarIcon className="w-5 h-5 text-black" />
                  <StarIcon className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
