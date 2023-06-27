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


const HomePage = () => {
  const { ratePrimary, rateMiddle, handleCalculate } =
    useContext(MainContext);

    const componentPDF = useRef();
    const generatePDF = useReactToPrint({
        content : ()=>componentPDF.current,
        documentTitle : "UserData"
    });
  // console.log("🚀 ~ file: HomePage.jsx:5 ~ HomePage ~ data:", data)
  return (
    <div className="home-container flex flex-col justify-center" ref={componentPDF} style={{width: "100%"}}>
      {/* select month section */}
      <div className="rate-section flex gap-2">
        <div className="rate-primary">Rate-Primary: {ratePrimary}</div>
        <div className="rate-middle">Rate-Middle: {rateMiddle}</div>
        <div className="select-month">
          <select name="" id="">
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
          </select>
        </div>
      </div>
      
      {/* Previous Details */}
      <div className="upper-table bg-green-300">
        <PreviousDetails />
      </div>

       {/* input section side */}
       <div className="enter-days">
          <div className="days-input-container my-2 bg-blue-400">
            <InputDays />
          </div>
        </div>
      
      {/* day filling and display section */}
      <div className="day-filling">
        <div className="display-days">
          <DisplayDays />
        </div>
       
      </div>

        {/* display total days */}
        <div className="display-total-meals">
            <DisplayTotalMeals />

        </div>
        {/* display results */}
        <div className="display-table">
            <div className="display-table-container flex bg-blue-300">
               <DisplayTable />
               <DisplayRiceTable />
            </div>
            <div className="display-total-container flex bg-red-200">
                <TotalExpenses />
                <TotalRice />
            </div>
        </div>
        {/* Calculate Total */}
       
        <button className="px-4 py-2 bg-green-400" onClick={generatePDF}>print </button>

    </div>
  );
};

export default HomePage;
