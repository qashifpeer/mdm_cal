import { useContext, useRef } from "react"
import { CalculateContext } from "../contexts/CalculateContext"
import { useReactToPrint } from "react-to-print";


const TotalExpenses = () => {
    const {totalExpenses} = useContext(CalculateContext);
    const componentPDF = useRef();
    const generatePDF = useReactToPrint({
        content : ()=>componentPDF.current,
        documentTitle : "UserData"
    });
  return (
    <div ref={componentPDF} style={{width: "100%"}}>
        <table>
            <tr>
                <th>Total Expenses</th>
            </tr>
            <tr>
                <td>Opening Balance</td>
                <td>{totalExpenses.totalOb || 0}</td>
            </tr>
            <tr>
                <td>Total Received Amount</td>
                <td>{totalExpenses.totalReceived || 0}</td>
            </tr>
            <tr>
                <td>Total Available Amt</td>
                <td>{totalExpenses.totalAvlAmount || 0}</td>
            </tr>
            <tr>
                <td>Total Expenditure</td>
                <td>{totalExpenses.totalExpenditure || 0}</td>
            </tr>
            <tr>
                <td>Closing Balance</td>
                <td>{totalExpenses.totalCb || 0}</td>
            </tr>
        </table>
        <button onClick={generatePDF}>print </button>
    </div>
  )
}


export default TotalExpenses