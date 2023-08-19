import { useRef } from "react";

import DisplayDays from "./DisplayDays";
import DisplayRiceTable from "./DisplayRiceTable";
import DisplayTable from "./DisplayTable";
import DisplayTotalMeals from "./DisplayTotalMeals";
import TotalExpenses from "./TotalExpenses";
import TotalRice from "./TotalRice";
import { useReactToPrint } from "react-to-print";
import SchoolHeading from "./SchoolHeading";
import SchoolFooter from "./SchoolFooter";

const DisplayData = () => {
  const componentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "mdm-consumption",
  });
  return (
    <div>
      <div className="" ref={componentPDF} style={{ width: "100%" }}>
        <SchoolHeading />
        <div className="border-4 md:flex flex-col justify-center items-center gap-1 py-4">
          <div className="flex gap-2 ">
            <DisplayDays />
            <DisplayTable />
            <DisplayRiceTable />
          </div>
          <div className="flex">
            <TotalExpenses />
            <TotalRice />
          </div>
        </div>
        <SchoolFooter />
      </div>
    
      <div
        className="flex justify-center align-middle border rounded-md bg-white my-3"
        onClick={generatePDF}
      >
        <button className="px-4 py-2  w-20 bg-sky-700 text-white">print </button>
      </div>
    </div>
  );
};

export default DisplayData;
