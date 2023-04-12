import React from "react";
import Client1 from "../assets/clientOne.svg";
import Client2 from "../assets/clientTwo.svg";
import Client3 from "../assets/clientThree.svg";
import Client4 from "../assets/clientFour.svg";
import Client5 from "../assets/clientFive.svg";
function Clients() {
  return (
    <section className="flex gap-12 flex-col items-center p-10 my-32 flex-wrap">
      <h1 className="text-5xl font-extrabold md:text-left text-center">
        Integrate your selling platform with us
      </h1>
      {/* clients */}
      <div className="flex flex-wrap gap-8 justify-center">
        <img className="object-contain w-60 p-10 border" src={Client1} alt="" />
        <img className="object-contain w-60 p-10 border" src={Client2} alt="" />
        <img className="object-contain w-60 p-10 border" src={Client3} alt="" />
        <img className="object-contain w-60 p-10 border" src={Client4} alt="" />
        <img className="object-contain w-60 p-10 border" src={Client5} alt="" />
      </div>
    </section>
  );
}

export default Clients;
