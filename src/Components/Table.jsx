import React from "react";
function Table({ head, body = [] }) {
  return (
    <div className={`overflow-x-auto ${body.length === 0 && "border-b"} `}>
      <table className="table-auto w-full">
        <thead className="bg-gray-50">
          <tr>
            {head.map((heading, index) => (
              <th
                key={index}
                className="p-6 border-y  min-w-[12rem] border-gray-300"
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
                    {index === row.length - 1 &&
                    head[head.length - 1] === "Status" ? (
                      <span
                        className={`${
                          cell === "Delivered" ? "bg-orange-400" : "bg-header"
                        } rounded-lg text-white text-sm px-8 py-1 `}
                      >
                        {cell}
                      </span>
                    ) : (
                      <span>{cell}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      {/* If body is empty */}
      {body.length === 0 && (
        <div className="text-2xl  overflow-x-auto  flex sm:flex-row flex-col items-center text-center gap-1  relative justify-center font-semibold py-12 min-w-[84rem] border">
          If you couldn't find tracking numbers please read
          <a
            href="https://getmoretracks.tawk.help/article/i-cannot-find-a-tracking-number-why"
            target="_blank"
            className="text-orange-400 underline"
          >
            this article
          </a>
        </div>
      )}
    </div>
  );
}

export default Table;
