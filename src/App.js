import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Buttons from "./components/Buttons";
import PredefinedQuery from "./components/PredefinedQuery";
import SqlEditor from "./components/SqlEditor";
import Table from "./components/Table";
import DataDraw from "./components/TableDrawer/DataDraw";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [value, setValue] = useState("select * from customers;");
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [defaults, setDefaults] = useState(1);
  const [csvData, setCSVData] = useState([]);

  if (value === "") {
    toast.error("Please remove the code and run the query");
    setValue(
      "-- Online SQL Editor to Run SQL Online. \n-- Use the editor to view all tables in SQL operations.\n\n-- Remove the code and Start exploring!\n\n-- Happy Coding!"
    );
  }

  useEffect(() => {
    if (value.toLowerCase() === "select * from customers;") {
      setDefaults(1);
    } else if (value.toLowerCase() === "select * from suppliers;") {
      setDefaults(3);
    } else if (value.toLowerCase() === "select * from products;") {
      setDefaults(2);
    } else if (
      value.toLowerCase() ===
      "select contact_name, address,city,postal_code, country from customers limit 18;"
    ) {
      setDefaults(4);
    } else {
      setDefaults(0);
    }
  }, [value]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/sql-editor"
            element={
              <div>
                <Navbar />
                <div className=" w-full pt-10 ">
                  <div className="w-full lg:w-9/12 mx-auto">
                    <div className="w-full">
                      <PredefinedQuery
                        setValue={setValue}
                        setDefaults={setDefaults}
                        defaults={defaults}
                      />
                    </div>
                    <div className="flex my-10 flex-wrap justify-center items-end w-full ">
                      <div className="w-full lg:w-12/12">
                        <SqlEditor value={value} setValue={setValue} />
                        <div className="flex w-full justify-end">
                          <Buttons
                            setQuery={setQuery}
                            setHeaders={setHeaders}
                            setRows={setRows}
                            setCSVData={setCSVData}
                            value={value}
                            setValue={setValue}
                            setDefaults={setDefaults}
                            defaults={defaults}
                          />
                        </div>
                      </div>
                    </div>
                    {csvData && (
                      <Table
                        query={query}
                        headers={headers}
                        rows={rows}
                        csvData={csvData}
                      />
                    )}
                  </div>

                  <div className="w-full mx-auto lg:w-9/12">
                    <DataDraw />
                  </div>

                  <Toaster
                    position="top-center"
                    gutter={8}
                    toastOptions={{
                      duration: 3000,
                    }}
                  />
                </div>
              </div>
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
