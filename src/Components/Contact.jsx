import React from "react";
import ContactImg from "../assets/contact.png";
function Contact() {
  return (
    <section className="flex flex-col gap-8 px-8 items-center my-12">
      <img
        className="md:w-[40rem] object-contain w-full"
        src={ContactImg}
        alt=""
      />
      <h1
        className="text-5xl font-extrabold
      "
      >
        Track You Shipping anywhere in the world
      </h1>
      <button className="btn-primary rounded-r-full rounded-l-full px-8">
        Contact us
      </button>
    </section>
  );
}

export default Contact;
