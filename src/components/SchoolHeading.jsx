import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import FormatPrice from "./FormatPrice";

const SchoolHeading = () => {
  const { month, rate, schoolName } = useContext(MainContext);
  return (
    <div className="school-heading flex flex-col">
      <h3 className="font-extrabold font-mono text-center text-3xl mt-4 uppercase">
        {schoolName}
      </h3>
      <p className="text-center underline font-bold">
        Monthly Consumption Register
      </p>
    

      <div className="px-8 flex justify-around ">
        <p>
          Month :{" "}
          <span className="underline font-semibold capitalize">{month}</span>
        </p>
        <div className=" rate-details flex ">
          <ul>
            <li className="text-gray-400 text-sm">Primary-Rate</li>
            <li className="text-gray-400 text-sm">Middle-Rate</li>
          </ul>
          <ul className="mx-4">
            <li className="text-sm font-semibold">
              {<FormatPrice price={rate.primary} />}
            </li>
            <li className="text-sm font-semibold">
              {<FormatPrice price={rate.middle} />}
            </li>
          </ul>
          {/* <ul className="mx-4">
          <li>34.65(kg)</li>
          <li>765.65(kg)</li>
        </ul> */}
        </div>
      </div>
    </div>
  );
};

export default SchoolHeading;
