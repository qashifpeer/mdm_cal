import { useContext, useRef } from "react";
import { MainContext } from "../contexts/MainContext";

const SchoolHeader = () => {
  const { selectedMonth, schoolNameHandler } = useContext(MainContext);
  return (
    <div className="bg-slate-400">
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
        </div>
        {/* <p className="text-white">
          Developed By :{" "}
          <span className="underline text-sky-900 bg-white font-bold border rounded-s-sm rounded-e-xl">
            Qashif Peer - 9906613451
          </span>
        </p> */}
      </div>
    </div>
  );
};

export default SchoolHeader;
