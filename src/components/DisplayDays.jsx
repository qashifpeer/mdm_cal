import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const DisplayDays = () => {
  const { roll, deleteItem, totalDays } = useContext(MainContext);

  const sortedRoll = roll.sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    <div>
      <div className="display-days-container  flex justify-center mt-6 mb-2">
        <table className="table-auto">
          <thead>
            <tr className="text-xs border-black">
              <th className="px-2  border border-x-black border-y-black">
                Date
              </th>
              <th className="px-2 border border-x-black border-y-black ">
                Pre-Primary
              </th>
              <th className="px-2 border border-x-black border-y-black ">
                Primary
              </th>
              <th className="px-2 border border-x-black border-y-black ">
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
              <td className="px-2  border border-x-black border-y-black font-bold">Total</td>
              <td className="px-2  border border-x-black border-y-black">{totalDays.preRoll || 0}</td>
              <td className="px-2  border border-x-black border-y-black">{totalDays.pryRoll || 0}</td>
              <td className="px-2  border border-x-black border-y-black">{totalDays.middleRoll || 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayDays;
