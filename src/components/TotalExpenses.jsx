import { useContext } from "react"
import { CalculateContext } from "../contexts/CalculateContext"


const TotalExpenses = () => {
    const {totalExpenses} = useContext(CalculateContext);
   
    
  return (
    <div>
        <table>
            <tr className="px-2 border border-x-black border-y-black">
                <th colSpan={2} className="px-2 border border-x-black border-y-black">Total Expenses</th>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Opening Balance</td>
                <td className="px-2 border border-x-black border-y-black">{totalExpenses.totalOb || 0}</td>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Total Received Amount</td>
                <td className="px-2 border border-x-black border-y-black">{totalExpenses.totalReceived || 0}</td>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Total Available Amt</td>
                <td className="px-2 border border-x-black border-y-black">{totalExpenses.totalAvlAmount || 0}</td>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Total Expenditure</td>
                <td className="px-2 border border-x-black border-y-black">{totalExpenses.totalExpenditure || 0}</td>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Closing Balance</td>
                <td className="px-2 border border-x-black border-y-black">{totalExpenses.totalCb || 0}</td>
            </tr>
        </table>
        
    </div>
  )
}


export default TotalExpenses