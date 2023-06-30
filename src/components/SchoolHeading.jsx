import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import FormatPrice from "./FormatPrice";

const SchoolHeading = () => {
  const { month, rate ,schoolName } = useContext(MainContext);
  return (
    <div className="school-heading flex flex-col">
      <h3 className="font-extrabold font-mono font text-3xl mt-4 uppercase">
        {schoolName}
      </h3>
      <p className="text-center underline font-bold">
        Monthly Consumption Register
      </p>

      
      <div className="flex justify-between my-4">
        <p>
          Month :{" "}
          <span className="underline font-semibold capitalize">{month}</span>
        </p>
        <div className="flex">
        <ul>
          <li className="text-gray-400">Primary-Rate</li>
          <li className="text-gray-400">Middle-Rate</li>
        </ul>
        <ul className="mx-4">
          <li className="font-semibold">{<FormatPrice price={rate.primary} /> }</li>
          <li className="font-semibold">{<FormatPrice price={rate.middle} /> }</li>
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
