import { useContext } from "react";
import { RiceContext } from "../contexts/RiceContext";


const DisplayRiceTable = () => {
  const {currObRice,availableRiceBalance ,expenditureRice,riceBalance} = useContext(RiceContext);
  return (
    <div>
      <table>
        <tr>
          <th>Pre-Primary Section</th>
        </tr>
        <tr>
          <td>Opening Balance</td>
          <td>{currObRice.prevRicePre}</td>
        </tr>
        <tr>
          <td>Rice Lifted</td>
          <td>{currObRice.riceLiftedPre}</td>
        </tr>
        <tr>
          <td>Rice Available</td>
          <td>{availableRiceBalance.avlRiceBalancePre || 0}</td>
        </tr>
        <tr>
          <td>Expenditure </td>
          <td>{expenditureRice.prePryExpenditure || 0}</td>
        </tr>
        <tr>
          <td>Balance</td>
          <td>{riceBalance.balancePre || 0}</td>
        </tr>
        {/* Primary section */}
        <tr>
          <th>Primary Section</th>
        </tr>
        <tr>
          <td>Opening Balance</td>
          <td>{currObRice.prevRicePry}</td>
        </tr>
        <tr>
          <td>Rice Lifted</td>
          <td>{currObRice.riceLiftedPry}</td>
        </tr>
        <tr>
          <td>Rice Available</td>
          <td>{availableRiceBalance.avlRiceBalancePry || 0}</td>
        </tr>
        <tr>
          <td>Expenditure </td>
          <td>{expenditureRice.pryExpenditure || 0}</td>
        </tr>
        <tr>
          <td>Balance</td>
          <td>{riceBalance.balancePry || 0}</td>
        </tr>
        {/* Middle Section */}
        <tr>
          <th>Middle Section</th>
        </tr>
        <tr>
          <td>Opening Balance</td>
          <td>{currObRice.prevRiceMiddle}</td>
        </tr>
        <tr>
          <td>Rice Lifted</td>
          <td>{currObRice.riceLiftedMiddle}</td>
        </tr>
        <tr>
          <td>Rice Available</td>
          <td>{availableRiceBalance.avlRiceBalanceMiddle || 0} </td>
        </tr>
        <tr>
          <td>Expenditure </td>
          <td>{expenditureRice.middleExpenditure || 0}</td>
        </tr>
        <tr>
          <td>Balance</td>
          <td>{riceBalance.balanceMiddle || 0}</td>
        </tr>
      </table>
    </div>
  );
};

export default DisplayRiceTable;
