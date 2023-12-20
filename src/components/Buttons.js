import React from "react";
import toast from "react-hot-toast";
import getTableInfo from "./GetTableInfo";
import { GrPowerReset } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
function Buttons({
  setCSVData,
  setQuery,
  setValue,
  setHeaders,
  setRows,
  setDefaults,
  defaults,
  value,
}) {
  const runQuery = () => {
    try {
      setQuery(value);
      const { tableHeaders, tableRows } = getTableInfo(defaults);
      setHeaders(tableHeaders);
      setRows(tableRows);
      const temp = [];
      if (tableHeaders?.length > 0 && tableRows?.length > 0) {
        temp.push(tableHeaders);
        tableRows.forEach((row) => {
          temp.push(row);
        });
        setCSVData(temp);
        if (temp?.length > 0) {
          toast.success("Query run successfully !!");
        } else {
          toast.error("This didn't work.");
        }
      }
    } catch (error) {
      toast.error("some error occured, please try again...");
      setCSVData(null);
    }
  };

  const reset = () => {
    // function to reset the editor
    setQuery("");
    setValue("select * from customers;");
    setDefaults(1);
    setHeaders([]);
    setRows([]);
    setCSVData([]);
    toast.success("query reset successfully !!");
  };
  return (
    <div className="flex">
      <div className="p-2">
        <button
          onClick={reset}
          className="flex mx-auto text-white bg-green-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-green-600 rounded text-lg justify-center items-center"
        >
          <GrPowerReset />
        </button>
      </div>
      <div className="p-2">
        <button
          onClick={() => {
            toast.loading("Data fetching...", {
              duration: 1000,
            });
            setTimeout(() => {
              runQuery();
            }, 1000);
          }}
          className="flex mx-auto text-white bg-green-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-green-600 rounded text-lg justify-center items-center"
        >
          <div className="pr-3">
            <FaPlay />
          </div>
          <div className="font-bold font-mono">Submit</div>
        </button>
      </div>
    </div>
  );
}

export default Buttons;
