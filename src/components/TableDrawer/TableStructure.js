import React, { useState } from "react";
import TablePopup from "./TablePopup";
import GetTableInfo from "../GetTableInfo";
import { HiOutlineCollection } from "react-icons/hi";
function TableStructure({ tableName, tableHead, tableNo }) {
  const [trigger, setTrigger] = useState(false);
  tableHead = Object.values(tableHead);

  const [tableHeadData, setTableHeadData] = useState([]);
  const [tableRowData, setTableRowData] = useState([]);
  const handleTable = () => {
    const { tableHeaders, tableRows } = GetTableInfo(tableNo);
    setTableHeadData(tableHeaders);
    setTableRowData(tableRows);
    setTrigger(true);
  };

  return (
    <div className="mx-10">
      <div className="flex items-center cursor-pointer" onClick={handleTable}>
        <HiOutlineCollection />
        <p className="font-bold text-lg ml-3 text-black">{tableName} [-]</p>
      </div>
      {tableHead.map((row, index) => (
        <div className="flex items-end relative ml-3" key={index}>
          <div className="w-6 h-8 border-l-2 border-b-2"></div>
          <p className="absolute top-5 left-9  text-sm font-semibold">
            {row}{" "}
            <span className="text-green-600 hover:text-green-400">
              [varchar(40)]
            </span>
          </p>
        </div>
      ))}

      <TablePopup
        trigger={trigger}
        setTrigger={setTrigger}
        headers={tableHeadData}
        rows={tableRowData}
      />
    </div>
  );
}

export default TableStructure;
