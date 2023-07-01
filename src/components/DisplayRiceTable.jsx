import { useContext } from "react";
import { RiceContext } from "../contexts/RiceContext";


const DisplayRiceTable = () => {
  const {currObRice,availableRiceBalance ,expenditureRice,riceBalance} = useContext(RiceContext);
  return (
    <div>
      <table>
        <tbody>
      <tr>
        <th colSpan={2} className="px-2 border border-x-black border-y-black bg-sky-500" >Rice Details</th>
        </tr>
        <tr>
          <th colSpan={2} className="px-2 border border-x-black border-y-black">Pre-Primary Section</th>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Opening Balance</td>
          <td className="px-2 border border-x-black border-y-black">{currObRice.prevRicePre || 0} kg</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Rice Lifted</td>
          <td className="px-2 border border-x-black border-y-black">{currObRice.riceLiftedPre || 0} kg</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Rice Available</td>
          <td className="px-2 border border-x-black border-y-black">{Math.round(availableRiceBalance.avlRiceBalancePre * 1000)/1000 || 0} kg</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Expenditure </td>
          <td className="px-2 border border-x-black border-y-black">{expenditureRice.prePryExpenditure || 0} kg</td>
        </tr>
        <tr>
          <td className="font-semibold px-2 border border-x-black border-y-black">Balance</td>
          <td className="font-semibold px-2 border border-x-black border-y-black">{riceBalance.balancePre || 0} kg</td>
        </tr>
        {/* Primary section */}
        <tr>
          <th colSpan={2} className="px-2 border border-x-black border-y-black">Primary Section</th>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Opening Balance</td>
          <td className="px-2 border border-x-black border-y-black">{currObRice.prevRicePry || 0} kg</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Rice Lifted</td>
          <td className="px-2 border border-x-black border-y-black">{currObRice.riceLiftedPry || 0} kg</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Rice Available</td>
          <td className="px-2 border border-x-black border-y-black">{Math.round(availableRiceBalance.avlRiceBalancePry *1000)/1000 || 0} kg</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Expenditure </td>
          <td className="px-2 border border-x-black border-y-black">{expenditureRice.pryExpenditure || 0} kg</td>
        </tr>
        <tr>
          <td className="font-semibold px-2 border border-x-black border-y-black">Balance</td>
          <td className="font-semibold px-2 border border-x-black border-y-black">{riceBalance.balancePry || 0} kg</td>
        </tr>
        {/* Middle Section */}
        <tr>
          <th colSpan={2} className="px-2 border border-x-black border-y-black">Middle Section</th>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Opening Balance</td>
          <td className="px-2 border border-x-black border-y-black">{currObRice.prevRiceMiddle || 0} kg</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Rice Lifted</td>
          <td className="px-2 border border-x-black border-y-black">{currObRice.riceLiftedMiddle || 0} kg</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Rice Available</td>
          <td className="px-2 border border-x-black border-y-black">{Math.round(availableRiceBalance.avlRiceBalanceMiddle *1000)/1000 || 0} kg </td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Expenditure </td>
          <td className="px-2 border border-x-black border-y-black">{expenditureRice.middleExpenditure || 0} kg</td>
        </tr>
        <tr>
          <td className="font-semibold px-2 border border-x-black border-y-black">Balance</td>
          <td className="font-semibold px-2 border border-x-black border-y-black">{riceBalance.balanceMiddle || 0} kg</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayRiceTable;
