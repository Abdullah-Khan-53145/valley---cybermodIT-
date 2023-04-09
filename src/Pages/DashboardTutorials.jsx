import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
function DashboardTutorials() {
  return (
    <main className="md:mx-16 mx-5 mt-12 flex flex-col gap-8 pb-8">
      <h1 className="flex flex-col md:text-start text-center  text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-extrabold">
        <span className="md:text-start text-center">
          To use our service correctly, watch the video tutorial
        </span>
        <span className="flex items-center md:justify-start justify-center gap-2 md:text-start text-center">
          below and check out our
          <a
            className="underline"
            href="https://getmoretracks.tawk.help/category/howto"
            target="_blank"
          >
            Knowledge Base
          </a>
          <PlayCircleIcon className="w-12 h-12 text-orange-400" />
        </span>
      </h1>
      {/* Youtube Video for the Tutorial */}
      <iframe
        className="w-full md:h-[90vh] sm:h-[40vh] h-[30rem]"
        src="https://www.youtube.com/embed/-UD_0qCJ7ec"
        title="getmoretracks.com tutorial"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </main>
  );
}

export default DashboardTutorials;
