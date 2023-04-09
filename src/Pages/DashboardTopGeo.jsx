import React, { useState } from "react";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import Table from "../Components/Table";
import ZipSavedModal from "../Components/ZipSavedModal";
function DashboardTopGeo() {
  const tableHead = ["ID", "ZIP", "Tracks", "Select"];
  const tableBody = [
    ["1", "141414", "145,756", "Select"],
    ["2", "545439", "7456", false],
    ["3", "545434", "2525", false],
    ["4", "545434", "215", false],
    ["5", "545434", "215", false],
    ["6", "545434", "215", false],
    ["7", "545434", "215", false],
    ["8", "545434", "215", false],
    ["4", "545434", "215", false],
  ];
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <main className="md:mx-16 mx-5 mt-12 flex flex-col gap-8 pb-8">
      <ZipSavedModal status={toggleModal} setStatus={setToggleModal} />
      <div className="flex flex-col gap-8">
        {/* Main headin */}
        <h2 className="max-w-[90rem] font-semibold  text-3xl">
          You can make your list of senders' ZIP codes to personalize your
          search.Check preferred below or type manually in the text area
        </h2>
        {/* input for zip to save */}
        <div className="flex  gap-4">
          {/* input  */}
          <div className=" border-b w-full max-w-[20rem] border-gray-400 py-2">
            <input type="text" placeholder="Zip seperated by commas" />
          </div>
          {/* save button */}
          <button
            onClick={() => setToggleModal(true)}
            className="btn-primary p-2"
          >
            <FolderArrowDownIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      {/* Table */}
      <Table head={tableHead} body={tableBody} />
    </main>
  );
}

export default DashboardTopGeo;
