import { useContext } from "react";
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
            <th className="px-2  border border-x-black border-y-black bg-sky-500">
                S No
              </th>
              <th className="px-2  border border-x-black border-y-black bg-sky-500">
                Date
              </th>
              <th className="px-2 border border-x-black border-y-black bg-sky-500">
                Pre-Primary
              </th>
              <th className="px-2 border border-x-black border-y-black bg-sky-500">
                Primary
              </th>
              <th className="px-2 border border-x-black border-y-black bg-sky-500">
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
                  <td className="px-2  border border-x-black border-y-black">
                    {index=index+1}
                  </td>
                  <td className="px-2  border border-x-black border-y-black">
                    {currItem.date}
                  </td>
                  <td className="px-2  border border-x-black border-y-black">
                    {currItem.preRoll}
                  </td>
                  <td className="px-2  border border-x-black border-y-black">
                    {currItem.pryRoll}
                  </td>
                  <td className="px-2  border border-x-black border-y-black">
                    {currItem.middleRoll}
                  </td>
                </tr>
              );
            })}
            <tr className="text-center font-semibold">
              <td colSpan={2} className="px-2  border border-x-black border-y-black font-bold bg-sky-500">Total</td>
              <td className="px-2  border border-x-black border-y-black bg-sky-500">{totalDays.preRoll || 0}</td>
              <td className="px-2  border border-x-black border-y-black bg-sky-500">{totalDays.pryRoll || 0}</td>
              <td className="px-2  border border-x-black border-y-black bg-sky-500">{totalDays.middleRoll || 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayDays;
