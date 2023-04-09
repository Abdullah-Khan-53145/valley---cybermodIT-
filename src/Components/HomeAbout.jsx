import React from "react";
import Screen from "../assets/screen.png";
import Bg from "../assets/about.png";
function HomeAbout() {
  return (
    <section className="flex items-center my-12 md:justify-around  justify-center gap-12 text-white relative z-10 h-[75.5rem] px-8 md:flex-row flex-col-reverse ">
      <img
        src={Bg}
        className="absolute left-0 right-0 top-0  h-[75.5rem] w-screen -z-10"
        alt=""
      />
      {/* Right text section */}
      <div className="w-[40rem] flex flex-col items-start gap-8">
        <h2 className="text-3xl font-extrabold">About Us</h2>
        <p className="text-xl text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          quam lectus. Quisque efficitur arcu sed massa eugiat, sit amet iaculis
          odio dapibus. Cras quis tempor mas sa, id vulputate leo. Proin id
          tristique nisi. Vestibulum ante ip sum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Sed accumsan id quam eu cursus.
        </p>
        <p className="text-xl text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          quam lectus. Quisque efficitur arcu sed massa eugiat, sit amet iaculis
          odio dapibu
        </p>
        <button className="btn-primary rounded-e-full rounded-l-full px-12">
          Signin
        </button>
      </div>
      {/* Img slider */}
      <div>
        <img className="w-[40rem] object-contain" src={Screen} alt="" />
      </div>
    </section>
  );
}

export default HomeAbout;
