import React from "react";
import { FaCode } from "react-icons/fa6";
function PredefinedQuery({ setDefaults, setValue, defaults }) {
  const qurtyValue = [
    {
      query: "select * from customers;",
      default: 1,
    },

    {
      query: "select * from products;",
      default: 2,
    },
    {
      query: "select * from suppliers;",
      default: 3,
    },
    {
      query:
        "select contact_name, address,city,postal_code, country from customers limit 18;",
      default: 4,
    },
  ];
  return (
    <div className="border w-full">
      <div className=" flex items-center font-bold justify-center mt-2 py-2  px-4 rounded text-black bg-green-400 font-mono mx-4 text-lg md:text-xl">
        React SQL Editor
      </div>
      <div className="px-4   ">
        <div className="flex justify-center items-center mt-4">
          <FaCode className="mr-3 text-xl" />
          <p className="font-bold text-lg">Run below sql queries</p>
        </div>
        <div className="mt-6 overflow-auto py-4 grid grid-cols-1 md:grid-cols-2 gap-4  lg:mb-0">
          {qurtyValue.map((item, index) => (
            <button
              key={index}
              className={` ${
                defaults === index + 1 ? "bg-green-300 text-black" : ""
              } shadow-lg cursor-pointer rounded-lg bg-gray-100 hover:bg-green-300 font-mono hover:text-black p-2 text-center text-sm py-4`}
              onClick={() => {
                setDefaults(`${item.default}`);
                setValue(`${item.query}`);
                console.log(defaults);
              }}
            >
              {item.query}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PredefinedQuery;
