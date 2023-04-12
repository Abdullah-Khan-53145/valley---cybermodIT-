import React from "react";

function HomeFooter() {
  return (
    <footer className="flex flex-col gap-12 items-center mt-36 relative z-10">
      {/* Top Info */}
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-extrabold">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/* Contact Cards */}
      <div className="flex md:flex-nowrap flex-wrap justify-around gap-10 px-10 w-full">
        <div className="flex flex-col flex-wrap gap-2 shadow-lg py-10 px-16 w-full bg-white">
          <div className="flex font-extrabold items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M22.5505 17.0483L19.0156 16.6447C18.1667 16.5473 17.3317 16.8395 16.7332 17.438L14.1725 19.9987C10.234 17.9946 7.00531 14.7798 5.00128 10.8274L7.57591 8.25277C8.17433 7.65434 8.46659 6.81932 8.36917 5.97038L7.96558 2.46331C7.79858 1.05769 6.61564 0 5.19612 0H2.78849C1.21588 0 -0.092306 1.3082 0.00511234 2.88081C0.742708 14.7659 10.248 24.2573 22.1191 24.9949C23.6917 25.0923 24.9999 23.7841 24.9999 22.2115V19.8039C25.0138 18.3982 23.9561 17.2153 22.5505 17.0483Z"
                fill="#1C1C1C"
              />
            </svg>
            <h2>Phone</h2>
          </div>
          <p>111-515-5353</p>
        </div>
        <div className="flex flex-col gap-2 shadow-lg py-10 px-16 w-full bg-white">
          <div className="flex font-extrabold items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 26 21"
              fill="none"
            >
              <path
                d="M23.4 0.5H2.6C1.17 0.5 0.013 1.625 0.013 3L0 18C0 19.375 1.17 20.5 2.6 20.5H23.4C24.83 20.5 26 19.375 26 18V3C26 1.625 24.83 0.5 23.4 0.5ZM22.88 5.8125L13.689 11.3375C13.273 11.5875 12.727 11.5875 12.311 11.3375L3.12 5.8125C2.795 5.6125 2.6 5.275 2.6 4.9125C2.6 4.075 3.549 3.575 4.29 4.0125L13 9.25L21.71 4.0125C22.451 3.575 23.4 4.075 23.4 4.9125C23.4 5.275 23.205 5.6125 22.88 5.8125Z"
                fill="#1C1C1C"
              />
            </svg>
            <h2>Email</h2>
          </div>
          <p>Getmore@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2 shadow-lg py-10 px-16 w-full bg-white">
          <div className="flex font-extrabold items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 26 27"
              fill="none"
            >
              <path
                d="M13 0.5C5.8201 0.5 0 6.3201 0 13.5C0 20.6799 5.8201 26.5 13 26.5C20.1799 26.5 26 20.6799 26 13.5C26 6.3201 20.1799 0.5 13 0.5ZM17.134 20.1976C17.0855 20.319 17.0115 20.4287 16.9171 20.5192C16.8227 20.6097 16.71 20.679 16.5867 20.7223C16.4633 20.7657 16.332 20.7821 16.2018 20.7705C16.0715 20.7589 15.9452 20.7196 15.8314 20.6552L12.3019 17.9122L10.0373 20.0026C9.98473 20.0414 9.92326 20.0664 9.85852 20.0753C9.79379 20.0841 9.72786 20.0766 9.6668 20.0533L10.101 16.1676L10.114 16.1793L10.1231 16.1026C10.1231 16.1026 16.4736 10.3202 16.7323 10.0745C16.9949 9.8288 16.9078 9.7755 16.9078 9.7755C16.9234 9.4765 16.4385 9.7755 16.4385 9.7755L8.0236 15.1887L4.5201 13.9953C4.5201 13.9953 3.9819 13.8016 3.9312 13.3778C3.8779 12.9566 4.537 12.7278 4.537 12.7278L18.4691 7.1924C18.4691 7.1924 19.6144 6.6828 19.6144 7.5278L17.134 20.1976Z"
                fill="#1C1C1C"
              />
            </svg>
            <h2>Telegram</h2>
          </div>
          <p>535-533-5353</p>
        </div>
        <div className="flex flex-col gap-2 shadow-lg py-10 px-16 w-full bg-white">
          <div className="flex font-extrabold items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 10 21"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 7.21875H6.25V4.59375C6.25 4.24565 6.3817 3.91181 6.61612 3.66567C6.85054 3.41953 7.16848 3.28125 7.5 3.28125H8.75V0H6.25C5.25544 0 4.30161 0.414843 3.59835 1.15327C2.89509 1.89169 2.5 2.89321 2.5 3.9375V7.21875H0V10.5H2.5V21H6.25V10.5H8.75L10 7.21875Z"
                fill="#1C1C1C"
              />
            </svg>
            <h2>Facebook</h2>
          </div>
          <p>Getmoretracks143</p>
        </div>
      </div>
      <div className="py-10 text-white bg-gray-950 w-full flex justify-center items-center">
        Copyright © Get More Tracks
      </div>
    </footer>
  );
}

export default HomeFooter;
