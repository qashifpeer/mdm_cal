import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";


const PreviousDetails = () => {
  const { obChangeHandler ,handleSubmit, currOb,obRiceHandler,currObRice} =
    useContext(MainContext);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Pre-Primary</th>
              <th>Primary</th>
              <th>Middle</th>
            </tr>
          </thead>
          <tbody>
          
            <tr>
             
              <td>
                <input
                  type="number"
                  placeholder="Opening Balance Pre Primary"
                  name="openingBalancePre"
                  value={currOb.openingBalancePre || ""}
                  onChange={obChangeHandler}
                  className="outline-1 border border-gray-400 px-1 w-24"
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Opening Balance Primary"
                  name="openingBalancePry"
                  value={currOb.openingBalancePry}
                  onChange={obChangeHandler}
                  className="outline-1 border border-gray-400 px-1 w-24"
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Opening Balance Middle"
                  name="openingBalanceMiddle"
                  value={currOb.openingBalanceMiddle}
                  onChange={obChangeHandler}
                  className="outline-1 border border-gray-400 px-1 w-24"
                />
              </td>
             
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  placeholder="Income Received"
                  name="incomePre"
                  value={currOb.incomePre}
                  onChange={obChangeHandler}
                  className="outline-1 border border-gray-400 px-1 w-24"
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Income Received"
                  name="incomePry"
                  value={currOb.incomePry}
                  onChange={obChangeHandler}
                  className="outline-1 border border-gray-400 px-1 w-24"
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Income Received"
                  name="incomeMiddle"
                  value={currOb.incomeMiddle}
                  onChange={obChangeHandler}
                  className="outline-1 border border-gray-400 px-1 w-24"
                />
              </td>
            </tr>
            <tr>
              <th>Rice Details</th>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  placeholder="Previous Balance"
                  name="prevRicePre"
                  value={currObRice.prevRicePre}
                  onChange={obRiceHandler}
                  className="outline-1 border border-gray-400 px-1 w-24"
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Previous Balance"
                  name="prevRicePry"
                  value={currObRice.prevRicePry}
                  onChange={obRiceHandler}
                  className="outline-1 border border-gray-400 px-1 w-24"
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Previous Balance"
                  name="prevRiceMiddle"
                  value={currObRice.prevRiceMiddle}
                  onChange={obRiceHandler}
                  className="outline-1 border border-gray-400 px-1 w-24"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  placeholder="Rice Lifted"
                  name="riceLiftedPre"
                  value={currObRice.riceLiftedPre}
                  onChange={obRiceHandler}
                  className="outline-1 border border-gray-400 px-1 w-24"
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Rice Lifted"
                  name="riceLiftedPry"
                  value={currObRice.riceLiftedPry}
                  onChange={obRiceHandler}
                  className="outline-1 border border-gray-400 px-1 w-24"
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Rice Lifted"
                  name="riceLiftedMiddle"
                  value={currObRice.riceLiftedMiddle}
                  onChange={obRiceHandler}
                  className="outline-1 border border-gray-400 px-1 w-24"
                />
              </td>
            </tr>
            
          </tbody>
        </table>
        </form>
    </div>
  )
}

export default PreviousDetails