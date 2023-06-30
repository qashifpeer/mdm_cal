import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const DisplayTotalMeals = () => {
  const  {totalDays}  = useContext(MainContext);

  return (
    <div>
      <table className="table-auto">
        {/* <thead>
          <tr className="text-xs border-black border-b-2">
            <th className="px-2  ">Pre-Primary</th>
            <th className="px-2  ">Primary</th>
            <th className="px-2  ">Middle</th>
          </tr>
        </thead> */}
        <tbody>
         
                  <tr className="text-xs text-center border-b-2">
                   
                    <td>{totalDays.preRoll || 0}</td>
                    <td>{totalDays.pryRoll || 0}</td>
                    <td>{totalDays.middleRoll || 0}</td>
                  </tr>
                
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTotalMeals;
