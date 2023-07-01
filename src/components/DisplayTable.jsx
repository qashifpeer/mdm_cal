import { useContext } from "react";
import { CalculateContext } from "../contexts/CalculateContext";
import FormatPrice from "./FormatPrice";

const DisplayTable = () => {
  const { currOb, expenditure, availableBalance, balance } =
    useContext(CalculateContext);

  return (
    <div className="">
      <table>
        <tbody>
          <tr>
            <th
              colSpan={2}
              className="px-2 border border-x-black border-y-black bg-sky-500"
            >
              Ingredients
            </th>
          </tr>
          <tr className="px-2 border border-x-black border-y-black">
            <th
              colSpan={2}
              className="px-2 border border-x-black border-y-black"
            >
              Pre-Primary Section
            </th>
          </tr>
          <tr className="px-2 border border-x-black border-y-black">
            <td className="px-2 border border-x-black border-y-black">
              Opening Balance
            </td>
            <td className="px-2 border border-x-black border-y-black">
              {<FormatPrice price={currOb.openingBalancePre || 0} />}
            </td>
          </tr>
          <tr>
            <td className="px-2 border border-x-black border-y-black">
              Income Received
            </td>
            <td className="px-2 border border-x-black border-y-black">
              {<FormatPrice price={currOb.incomePre || 0} />}
            </td>
          </tr>
          <tr>
            <td className="px-2 border border-x-black border-y-black">
              Avl Balance
            </td>
            <td className="px-2 border border-x-black border-y-black">
              {<FormatPrice price={availableBalance.avlBalancePre || 0} />}
            </td>
          </tr>
          <tr>
            <td className="px-2 border border-x-black border-y-black">
              Expenditure{" "}
            </td>
            <td className="px-2 border border-x-black border-y-black">
              {<FormatPrice price={expenditure.prePryExpenditure || 0} />}
            </td>
          </tr>
          <tr>
            <td className="font-semibold px-2 border border-x-black border-y-black">
              Balance
            </td>
            <td className="font-semibold px-2 border border-x-black border-y-black">
              {<FormatPrice price={Math.round(balance.balancePre) || 0} />}
            </td>
          </tr>
          {/* Primary section */}
          <tr>
            <th
              colSpan={2}
              className="px-2 border border-x-black border-y-black"
            >
              Primary Section
            </th>
          </tr>
          <tr>
            <td className="px-2 border border-x-black border-y-black">
              Opening Balance
            </td>
            <td className="px-2 border border-x-black border-y-black">
              {<FormatPrice price={currOb.openingBalancePry || 0} />}
            </td>
          </tr>
          <tr>
            <td className="px-2 border border-x-black border-y-black">
              Income Received
            </td>
            <td className="px-2 border border-x-black border-y-black">
              {<FormatPrice price={currOb.incomePry || 0} />}
            </td>
          </tr>
          <tr>
            <td className="px-2 border border-x-black border-y-black">
              Avl Balance
            </td>
            <td className="px-2 border border-x-black border-y-black">
              {<FormatPrice price={availableBalance.avlBalancePry || 0} />}
            </td>
          </tr>
          <tr>
            <td className="px-2 border border-x-black border-y-black">
              Expenditure{" "}
            </td>
            <td className="px-2 border border-x-black border-y-black">
              {<FormatPrice price={expenditure.pryExpenditure || 0} />}
            </td>
          </tr>
          <tr>
            <td className="font-semibold px-2 border border-x-black border-y-black">
              Balance
            </td>
            <td className="font-semibold px-2 border border-x-black border-y-black">
              {<FormatPrice price={Math.round(balance.balancePry) || 0} />}
            </td>
          </tr>
          {/* Middle Section */}
          <tr>
            <th
              colSpan={2}
              className="px-2 border border-x-black border-y-black"
            >
              Middle Section
            </th>
          </tr>
          <tr>
            <td className="px-2 border border-x-black border-y-black">
              Opening Balance
            </td>
            <td className="px-2 border border-x-black border-y-black">
              {<FormatPrice price={currOb.openingBalanceMiddle || 0} />}
            </td>
          </tr>
          <tr>
            <td className="px-2 border border-x-black border-y-black">
              Income Received
            </td>
            <td className="px-2 border border-x-black border-y-black">
              {<FormatPrice price={currOb.incomeMiddle || 0} />}
            </td>
          </tr>
          <tr>
            <td className="px-2 border border-x-black border-y-black">
              Avl Balance
            </td>
            <td className="px-2 border border-x-black border-y-black">
              {<FormatPrice price={availableBalance.avlBalanceMiddle || 0} />}
            </td>
          </tr>
          <tr>
            <td className="px-2 border border-x-black border-y-black">
              Expenditure{" "}
            </td>
            <td className="px-2 border border-x-black border-y-black">
              {<FormatPrice price={expenditure.middleExpenditure || 0} />}
            </td>
          </tr>
          <tr>
            <td className="font-semibold px-2 border border-x-black border-y-black">
              Balance
            </td>
            <td className="font-semibold px-2 border border-x-black border-y-black">
              {<FormatPrice price={Math.round(balance.balanceMiddle) || 0} />}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
