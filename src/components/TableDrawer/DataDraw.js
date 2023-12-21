import React from "react";
import TableStructure from "./TableStructure";

function DataDraw() {
  let customers = require("../DataStore/customers.json");
  let suppliers = require("../DataStore/suppliers.json");
  let products = require("../DataStore/products.json");
  return (
    <>
      <h1 className="text-center font-bold text-2xl"> Table Schema</h1>
      <div className="w-full h-screen overflow-auto scrollbar-hide py-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <TableStructure
          tableHead={customers[0]}
          tableName="customers"
          tableNo={1}
        />
        <TableStructure
          tableHead={suppliers[0]}
          tableName="suppliers"
          tableNo={2}
        />
        <TableStructure
          tableHead={products[0]}
          tableName="products"
          tableNo={3}
        />
      </div>
    </>
  );
}

export default DataDraw;
