import { useContext } from "react"
import { RiceContext } from "../contexts/RiceContext"


const TotalRice = () => {
    const {totalRiceDetails} = useContext(RiceContext)
  return (
    <div>
        <table>
            <tbody>
            <tr>
                <th colSpan={2} className="px-2 border border-x-black border-y-black bg-sky-500">Total Rice Consumption</th>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Opening Balance</td>
                <td className="px-2 border border-x-black border-y-black">{totalRiceDetails.totalOb || 0}</td>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Total Rice Lifted</td>
                <td className="px-2 border border-x-black border-y-black">{totalRiceDetails.totalReceived || 0}</td>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black ">Total Rice Avl</td>
                <td className="px-2 border border-x-black border-y-black">{totalRiceDetails.totalAvlRice || 0}</td>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Total Rice Consumed</td>
                <td className="px-2 border border-x-black border-y-black">{totalRiceDetails.totalExpenditure || 0}</td>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Closing Balance</td>
                <td className="px-2 border border-x-black border-y-black">{totalRiceDetails.totalCb || 0}</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TotalRice