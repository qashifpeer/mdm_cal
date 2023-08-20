import { useContext, useEffect,useState } from "react";
import { MainContext } from "../contexts/MainContext";

const DisplayDays = () => {

  const { roll, deleteItem, totalDays } = useContext(MainContext);

 

  const sortedRoll = roll.sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    <div>
      <div className="display-days-container  flex justify-center  mb-2">
        <table className="table-auto">
          <thead>
            <tr className="text-xs border-black">
            <th className="px-1  border border-x-black border-y-black bg-slate-200">
                S No
              </th>
              <th className="px-1  border border-x-black border-y-black bg-slate-200">
                Date
              </th>
              <th className="px-1 border border-x-black border-y-black bg-slate-200">
                Pre-Primary
              </th>
              <th className="px-1 border border-x-black border-y-black bg-slate-200">
                Primary
              </th>
              <th className="px-1 border border-x-black border-y-black bg-slate-200">
                Middle
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedRoll.map((currItem, index) => {
              
              return (
                <tr
                  onDoubleClick={() => deleteItem(currItem.id)}
                  className="text-xs text-center border-black"
                  key={index}
                >
                  <td className="px-1  border border-x-black border-y-black">
                    {index=index+1}
                  </td>
                  <td className="px-1  border border-x-black border-y-black">
                    {currItem.date}
                  </td>
                  <td className="px-1  border border-x-black border-y-black">
                    {currItem.preRoll}
                  </td>
                  <td className="px-1  border border-x-black border-y-black">
                    {currItem.pryRoll}
                  </td>
                  <td className="px-1  border border-x-black border-y-black">
                    {currItem.middleRoll}
                  </td>
                </tr>
              );
            })}
            <tr className="text-center font-semibold">
              <td colSpan={2} className="px-1  border border-x-black border-y-black font-bold bg-slate-200">Total</td>
              <td className="px-1  border border-x-black border-y-black bg-slate-200">{totalDays.preRoll || 0}</td>
              <td className="px-1  border border-x-black border-y-black bg-slate-200">{totalDays.pryRoll || 0}</td>
              <td className="px-1  border border-x-black border-y-black bg-slate-200">{totalDays.middleRoll || 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayDays;
