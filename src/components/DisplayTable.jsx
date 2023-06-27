import { useContext } from "react";
import { CalculateContext } from "../contexts/CalculateContext";

const DisplayTable = () => {
  const {currOb,expenditure,availableBalance,balance} = useContext(CalculateContext);
  
  return (
    <div>
      <table>
        <tr>
          <th>Pre-Primary Section</th>
        </tr>
        <tr>
          <td>Opening Balance</td>
          <td>{currOb.openingBalancePre || 0}</td>
        </tr>
        <tr>
          <td>Income Received</td>
          <td>{currOb.incomePre || 0}</td>
        </tr>
        <tr>
          <td>Avl Balance</td>
          <td>{availableBalance.avlBalancePre || 0}</td>
        </tr>
        <tr>
          <td>Expenditure </td>
          <td>{expenditure.prePryExpenditure || 0}</td>
        </tr>
        <tr>
          <td>Balance</td>
          <td>{balance.balancePre || 0}</td>
        </tr>
        {/* Primary section */}
        <tr>
          <th>Primary Section</th>
        </tr>
        <tr>
          <td>Opening Balance</td>
          <td>{currOb.openingBalancePry || 0}</td>
        </tr>
        <tr>
          <td>Income Received</td>
          <td>{currOb.incomePry || 0}</td>
        </tr>
        <tr>
          <td>Avl Balance</td>
          <td>{availableBalance.avlBalancePry || 0}</td>
        </tr>
        <tr>
          <td>Expenditure </td>
          <td>{expenditure.pryExpenditure || 0}</td>
        </tr>
        <tr>
          <td>Balance</td>
          <td>{balance.balancePry || 0}</td>
        </tr>
        {/* Middle Section */}
        <tr>
          <th>Middle Section</th>
        </tr>
        <tr>
          <td>Opening Balance</td>
          <td>{currOb.openingBalanceMiddle || 0}</td>
        </tr>
        <tr>
          <td>Income Received</td>
          <td>{currOb.incomeMiddle || 0}</td>
        </tr>
        <tr>
          <td>Avl Balance</td>
          <td>{availableBalance.avlBalanceMiddle || 0}</td>
        </tr>
        <tr>
          <td>Expenditure </td>
          <td>{expenditure.middleExpenditure || 0}</td>
        </tr>
        <tr>
          <td>Balance</td>
          <td>{balance.balanceMiddle || 0}</td>
        </tr>
      </table>
    </div>
  );
};

export default DisplayTable;
