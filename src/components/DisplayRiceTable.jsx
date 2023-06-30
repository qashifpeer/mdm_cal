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
          <td className="px-2 border border-x-black border-y-black">{currObRice.prevRicePre}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Rice Lifted</td>
          <td className="px-2 border border-x-black border-y-black">{currObRice.riceLiftedPre}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Rice Available</td>
          <td className="px-2 border border-x-black border-y-black">{availableRiceBalance.avlRiceBalancePre || 0}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Expenditure </td>
          <td className="px-2 border border-x-black border-y-black">{expenditureRice.prePryExpenditure || 0}</td>
        </tr>
        <tr>
          <td className="font-semibold px-2 border border-x-black border-y-black">Balance</td>
          <td className="font-semibold px-2 border border-x-black border-y-black">{riceBalance.balancePre || 0}</td>
        </tr>
        {/* Primary section */}
        <tr>
          <th colSpan={2} className="px-2 border border-x-black border-y-black">Primary Section</th>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Opening Balance</td>
          <td className="px-2 border border-x-black border-y-black">{currObRice.prevRicePry}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Rice Lifted</td>
          <td className="px-2 border border-x-black border-y-black">{currObRice.riceLiftedPry}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Rice Available</td>
          <td className="px-2 border border-x-black border-y-black">{availableRiceBalance.avlRiceBalancePry || 0}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Expenditure </td>
          <td className="px-2 border border-x-black border-y-black">{expenditureRice.pryExpenditure || 0}</td>
        </tr>
        <tr>
          <td className="font-semibold px-2 border border-x-black border-y-black">Balance</td>
          <td className="font-semibold px-2 border border-x-black border-y-black">{riceBalance.balancePry || 0}</td>
        </tr>
        {/* Middle Section */}
        <tr>
          <th colSpan={2} className="px-2 border border-x-black border-y-black">Middle Section</th>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Opening Balance</td>
          <td className="px-2 border border-x-black border-y-black">{currObRice.prevRiceMiddle}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Rice Lifted</td>
          <td className="px-2 border border-x-black border-y-black">{currObRice.riceLiftedMiddle}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Rice Available</td>
          <td className="px-2 border border-x-black border-y-black">{availableRiceBalance.avlRiceBalanceMiddle || 0} </td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Expenditure </td>
          <td className="px-2 border border-x-black border-y-black">{expenditureRice.middleExpenditure || 0}</td>
        </tr>
        <tr>
          <td className="font-semibold px-2 border border-x-black border-y-black">Balance</td>
          <td className="font-semibold px-2 border border-x-black border-y-black">{riceBalance.balanceMiddle || 0}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayRiceTable;
