import { useContext } from "react";
import { CalculateContext } from "../contexts/CalculateContext";

const DisplayTable = () => {
  const {currOb,expenditure,availableBalance,balance} = useContext(CalculateContext);
  
  return (
    <div>
      <table>
        <tbody>
        <tr>
        <th colSpan={2} className="px-2 border border-x-black border-y-black bg-sky-500" >Ingredients</th>
        </tr>
        <tr className="px-2 border border-x-black border-y-black">
          <th colSpan={2} className="px-2 border border-x-black border-y-black" >Pre-Primary Section</th>
        </tr>
        <tr className="px-2 border border-x-black border-y-black">
          <td className="px-2 border border-x-black border-y-black">Opening Balance</td>
          <td className="px-2 border border-x-black border-y-black">{currOb.openingBalancePre || 0}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Income Received</td>
          <td className="px-2 border border-x-black border-y-black">{currOb.incomePre || 0}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Avl Balance</td>
          <td className="px-2 border border-x-black border-y-black">{availableBalance.avlBalancePre || 0}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Expenditure </td>
          <td className="px-2 border border-x-black border-y-black">{expenditure.prePryExpenditure || 0}</td>
        </tr>
        <tr>
          <td className="font-semibold px-2 border border-x-black border-y-black">Balance</td>
          <td className="font-semibold px-2 border border-x-black border-y-black">{balance.balancePre || 0}</td>
        </tr>
        {/* Primary section */}
        <tr>
          <th colSpan={2} className="px-2 border border-x-black border-y-black">Primary Section</th>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Opening Balance</td>
          <td className="px-2 border border-x-black border-y-black">{currOb.openingBalancePry || 0}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Income Received</td>
          <td className="px-2 border border-x-black border-y-black">{currOb.incomePry || 0}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Avl Balance</td>
          <td className="px-2 border border-x-black border-y-black">{availableBalance.avlBalancePry || 0}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Expenditure </td>
          <td className="px-2 border border-x-black border-y-black">{expenditure.pryExpenditure || 0}</td>
        </tr>
        <tr>
          <td className="font-semibold px-2 border border-x-black border-y-black">Balance</td>
          <td className="font-semibold px-2 border border-x-black border-y-black">{balance.balancePry || 0}</td>
        </tr>
        {/* Middle Section */}
        <tr>
          <th colSpan={2} className="px-2 border border-x-black border-y-black">Middle Section</th>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Opening Balance</td>
          <td className="px-2 border border-x-black border-y-black">{currOb.openingBalanceMiddle || 0}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Income Received</td>
          <td className="px-2 border border-x-black border-y-black">{currOb.incomeMiddle || 0}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Avl Balance</td>
          <td className="px-2 border border-x-black border-y-black">{availableBalance.avlBalanceMiddle || 0}</td>
        </tr>
        <tr>
          <td className="px-2 border border-x-black border-y-black">Expenditure </td>
          <td className="px-2 border border-x-black border-y-black">{expenditure.middleExpenditure || 0}</td>
        </tr>
        <tr>
          <td className="font-semibold px-2 border border-x-black border-y-black">Balance</td>
          <td className="font-semibold px-2 border border-x-black border-y-black">{balance.balanceMiddle || 0}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
