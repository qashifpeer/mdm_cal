import { useContext } from "react"
import { CalculateContext } from "../contexts/CalculateContext"
import FormatPrice from "./FormatPrice";


const TotalExpenses = () => {
    const {totalExpenses} = useContext(CalculateContext);
   
    
  return (
    <div>
        <table>
            <tbody>
            <tr className="px-2 border border-x-black border-y-black">
                <th colSpan={2} className="px-2 border border-x-black border-y-black bg-sky-500">Total Expenses</th>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Opening Balance</td>
                <td className="px-2 border border-x-black border-y-black">{<FormatPrice price={totalExpenses.totalOb || 0} />}</td>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Total Received Amount</td>
                <td className="px-2 border border-x-black border-y-black">{<FormatPrice price={totalExpenses.totalReceived || 0}/>} </td>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Total Available Amt</td>
                <td className="px-2 border border-x-black border-y-black">{<FormatPrice price={totalExpenses.totalAvlAmount || 0} />}</td>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black">Total Expenditure</td>
                <td className="px-2 border border-x-black border-y-black">{<FormatPrice price={totalExpenses.totalExpenditure || 0} />}</td>
            </tr>
            <tr>
                <td className="px-2 border border-x-black border-y-black text-bold">Closing Balance</td>
                <td className="px-2 border border-x-black border-y-black text-bold">{<FormatPrice price={Math.round(totalExpenses.totalCb)  || 0} />}</td>
            </tr>
            </tbody>
        </table>
        
    </div>
  )
}


export default TotalExpenses