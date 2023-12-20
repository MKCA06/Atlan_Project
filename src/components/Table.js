import React from "react";
import { CSVLink } from "react-csv";
import TableUI from "./TableUI";
import { CiExport } from "react-icons/ci";
function Table({ query, headers, rows, csvData }) {
  return (
    <div>
      {query ? (
        <section className="text-gray-600 body-font pl-4">
          <div className="flex w-full justify-between mt-6 lg:mt-0">
            <CSVLink
              data={csvData}
              filename={new Date().getTime().toString() + ".csv"}
              className="p-2"
            >
              <button className="flex mx-auto text-white bg-green-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-green-600 rounded text-lg justify-center items-center">
                <CiExport className="text-2xl" />
                <span className="pl-2 font-semibold">Export CSV</span>
              </button>
            </CSVLink>
          </div>
          <TableUI headers={headers} rows={rows} />
        </section>
      ) : (
        <div className="w-full flex text-center h-80 justify-center items-center font-bold font-mono text-gray-400 text-2xl px-6">
          Run Something & Your Output Shall Appear!
        </div>
      )}
    </div>
  );
}

export default Table;
