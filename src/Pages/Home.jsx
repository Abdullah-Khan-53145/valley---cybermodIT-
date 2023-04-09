import React from "react";
import HomeHeader from "../Components/HomeHeader";
import HomeHero from "../Components/HomeHero";
import TrackShipment from "../Components/TrackShipment";
import HomeAbout from "../Components/HomeAbout";
import Pricing from "../Components/Pricing";
import Contact from "../Components/Contact";
import CustomerReviews from "../Components/CustomerReviews";
import Clients from "../Components/Clients";
import Services from "../Components/Services";
import HomeFooter from "../Components/HomeFooter";

function Home() {
  return (
    <div className="bg-white">
      <HomeHeader />
      <HomeHero />
      <TrackShipment />
      <HomeAbout />
      <Pricing />
      <Contact />
      <CustomerReviews />
      <Clients />
      <Services />
      <HomeFooter />
    </div>
  );
}

export default Home;
