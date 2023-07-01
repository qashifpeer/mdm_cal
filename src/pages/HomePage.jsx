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
  const { rate, selectedMonth, schoolNameHandler } = useContext(MainContext);

  const componentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "mdm-consumption",
  });
  return (
    <div className="bg-slate-900 md:w-full mx-auto">
      <div className="home-container flex flex-col justify-center">
        {/* select month section */}
        <div className="intro-section  gap-2  px-2 pt-2 flex justify-center">
          <div className="select-month">
            <label
              htmlFor="month"
              className="block mb-2 text-sm font-medium text-slate-50 dark:text-white "
            >
              Select Month
            </label>
            <select
              onChange={selectedMonth}
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
              onChange={schoolNameHandler}
              placeholder="school name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>  <p className="text-white">Developed By : <span className="underline text-sky-900 bg-white font-bold border rounded-s-sm rounded-e-xl">Qashif Peer - 9906613451</span></p>
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
          className="display-section  flex flex-col justify-center bg-white"
          ref={componentPDF}
          style={{ width: "100%" }}
        >
          <div className="w- full bg-white">
            <SchoolHeading />
          </div>

          {/* display results */}
          <div className="justify-items-end mx-2 md:grid md:grid-cols-5 md:gap-3 md:ml-6 mt-16 ">
            <div className="col-span-2 ">
              <DisplayDays />
            </div>
            <div className="col-span-3 flex gap-2 ">
              <DisplayTable />
              <DisplayRiceTable />
            </div>
          </div>

         
          {/* Calculate Total */}
          <div className="grid grid-cols-2 mt-4 gap-1 justify-items-end mx-2">
            <div className="col-span-1">
              <TotalExpenses />
            </div>
            <div className="col-span-1">
              {" "}
              <TotalRice />{" "}
            </div>
          </div>
          
          <div className="footer-text flex bg-white justify-around w-3/4 mx-auto mt-12">
            <p>Tr. Incharge</p>
            <p>Headmaster</p>
          </div>
        </div>
        <div className="mx-auto border rounded-md bg-white my-3 ">
          <button className="px-4 py-2 " onClick={generatePDF}>
            print{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
