import React from "react";

function Table({ head, body = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="bg-gray-50">
          <tr>
            {head.map((heading, index) => (
              <th
                key={index}
                className="p-6 border-y border-gray-300"
                style={{ color: "#949494" }}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.length !== 0 &&
            body.map((row, index) => (
              <tr key={index}>
                {row?.map((cell, index) => (
                  <td
                    key={index}
                    className=" text-center py-6 border-b border-gray-300"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      {/* If body is empty */}
      {body.length === 0 && (
        <div className="text-2xl border flex sm:flex-row flex-col items-center text-center gap-1 justify-center font-semibold py-12">
          If you couldn't find tracking numbers please read
          <a href="#" className="text-orange-400 underline">
            this article
          </a>
        </div>
      )}
    </div>
  );
}

export default Table;
