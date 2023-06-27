import { useContext } from "react"
import { RiceContext } from "../contexts/RiceContext"


const TotalRice = () => {
    const {totalRiceDetails} = useContext(RiceContext)
  return (
    <div>
        <table>
            <tr>
                <th>Total Rice Consumption</th>
            </tr>
            <tr>
                <td>Opening Balance</td>
                <td>{totalRiceDetails.totalOb}</td>
            </tr>
            <tr>
                <td>Total Rice Lifted</td>
                <td>{totalRiceDetails.totalReceived}</td>
            </tr>
            <tr>
                <td>Total Rice Avl</td>
                <td>{totalRiceDetails.totalAvlRice}</td>
            </tr>
            <tr>
                <td>Total Rice Consumed</td>
                <td>{totalRiceDetails.totalExpenditure}</td>
            </tr>
            <tr>
                <td>Closing Balance</td>
                <td>{totalRiceDetails.totalCb}</td>
            </tr>
        </table>
    </div>
  )
}

export default TotalRice