import { useContext, useRef } from "react";
import { MainContext } from "../contexts/MainContext";
import PreviousDetails from "../components/PreviousDetails";
import DisplayDays from "../components/DisplayDays";
import InputDays from "../components/InputDays";
import DisplayTotalMeals from "../components/DisplayTotalMeals";
import DisplayTable from "../components/DisplayTable";
import DisplayRiceTable from "../components/DisplayRiceTable";
import TotalExpenses from "../components/TotalExpenses";
import TotalRice from "../components/TotalRice";
import { useReactToPrint } from "react-to-print";
import SchoolHeading from "../components/SchoolHeading";

const HomePage = () => {
  const { rate } = useContext(MainContext);

  const componentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "UserData",
  });
  return (
    <div className="bg-slate-900 md:w-1/2 mx-auto">
      <div className="home-container flex flex-col justify-center">
        {/* select month section */}
        <div className="intro-section  gap-2  px-2 pt-2 flex justify-center">
          <div className="select-month">
            <label
              htmlFor="month"
              className="block mb-2 text-sm font-medium text-slate-50 dark:text-white"
            >
              Select Month
            </label>
            <select
              id="month"
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>
          <div className="select-name ml-4">
            <label
              htmlFor="schoolName"
              className="block mb-2 text-sm font-medium text-slate-50 dark:text-white"
            >
              Enter School Name
            </label>
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              placeholder="school name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        {/* Previous Details */}
        <div className="upper-table  px-2 ">
          <PreviousDetails />
        </div>

        {/* input section side */}
        <div className="enter-days flex justify-center px-2">
         
            <InputDays />
         
        </div>

        {/* day filling and display section */}
        <div
          className="display-section  flex flex-col justify-center"
          ref={componentPDF}
          style={{ width: "100%" }}
        >
          {/* <div className="rate-display">
            <div className="rate-primary">Rate-Primary: {rate.primary}</div>
            <div className="rate-middle">Rate-Middle: {rate.middle}</div>
          </div> */}
          {/* <div className="flex justify-center">
            <SchoolHeading />
          </div> */}
          
            {/* <div className="display-days">
              <DisplayDays />
            </div>
          */}

        
          {/* display results */}
          {/* <div className="display-table  px-2 flex justify-center flex-col">
            <div className="display-table-container flex justify-center">
              <DisplayTable />
              <DisplayRiceTable />
            </div>
           
          </div> */}
          {/* Calculate Total */}
          {/* <div className="display-total-container flex px-6 mt-2">
              <TotalExpenses />
              <TotalRice />
            </div> */}
        </div>
        {/* <button className="px-4 py-2 bg-rose-400" onClick={generatePDF}>
          print{" "}
        </button> */}
      </div>
    </div>
  );
};

export default HomePage;
