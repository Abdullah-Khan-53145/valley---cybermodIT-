import React from "react";
import HomeFooter from "../Components/HomeFooter";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import BG from "../assets/contact-page.svg";
function ContactUs() {
  return (
    <main className="bg-white min-h-screen">
      <section className="px-10 relative z-10">
        <img src={BG} className="absolute right-0 top-0 -z-10" alt="" />
        <form className="flex flex-col gap-4">
          <h1 className="text-5xl font-extrabold max-w-[50rem]">
            Hi User feel free to get in touch with us !👋
          </h1>
          {/* Row 1 */}
          <div className="flex gap-4 w-full md:max-w-[70rem] md:flex-row flex-col max-w-screen">
            {/* First Name */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="first-name" className="text-sm text-gray-600">
                FIRST NAME *
              </label>
              <input
                type="text"
                placeholder="First Name"
                id="first-name"
                className="bg-gray-200 text-xl p-3 rounded-md "
              />
            </div>
            {/* Last Name */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="last-name" className="text-sm text-gray-600">
                LAST NAME *
              </label>
              <input
                type="text"
                placeholder="Last Name"
                id="last-name"
                className="bg-gray-200 text-xl p-3 rounded-md "
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex gap-4 w-full md:max-w-[70rem] md:flex-row flex-col max-w-screen">
            {/* Email */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email" className="text-sm text-gray-600">
                EMAIL *
              </label>
              <input
                type="text"
                placeholder="Email"
                id="email"
                className="bg-gray-200 text-xl p-3 rounded-md "
              />
            </div>
            {/* Phone NO*/}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="phone-number" className="text-sm text-gray-600">
                PHONE NO *
              </label>
              <input
                type="text"
                placeholder="Phone NO."
                id="phone-number"
                className="bg-gray-200 text-xl p-3 rounded-md "
              />
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex gap-4 w-full md:max-w-[34.5rem] md:flex-row flex-col max-w-screen">
            {/* Subject */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="subject" className="text-sm text-gray-600">
                SUBJECT *
              </label>
              <input
                type="text"
                placeholder="Subject Here"
                id="subject"
                className="bg-gray-200 text-xl p-3 rounded-md "
              />
            </div>
          </div>

          <div className="flex gap-4 w-full md:max-w-[70rem] md:flex-row flex-col max-w-screen">
            {/* Subject */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="message" className="text-sm text-gray-600">
                MESSAGE *
              </label>
              <textarea
                placeholder="Message Here"
                id="message"
                rows="4"
                className="bg-gray-200 text-xl p-3 rounded-md resize-none"
              />
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex gap-4 w-full md:max-w-[34.5rem] md:flex-row flex-col max-w-screen">
            <button className="btn-primary w-full p-4 flex justify-center mt-8 text-xl">
              SEND MESSAGE
              <ArrowUpRightIcon className="w-6 h-6" />
            </button>
          </div>
        </form>
      </section>
      <HomeFooter />
    </main>
  );
}

export default ContactUs;
