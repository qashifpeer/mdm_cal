import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const BalanceForward = () => {
    const { obChangeHandler,  currOb, obRiceHandler, currObRice } =
    useContext(MainContext);
  return (
    <div>
        <div className="relative overflow-x-hidden">
          <table className=" mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase bg-sky-600 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-2 py-2 font-extrabold">
                  Ingredients
                </th>
                <th scope="col" className="px-2 py-2">
                  Pre-Primary
                </th>
                <th scope="col" className="px-2 py-2">
                  Primary
                </th>
                <th scope="col" className="px-2 py-2">
                  Middle
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Opening Balance
                </th>
                <td className="py-2 px-2">
                  <input
                    type="text"
                    name="openingBalancePre"
                    value={currOb.openingBalancePre || ""}
                    onChange={obChangeHandler}
                  
                    className="outline-1 border border-gray-400 p-1 w-16 text-xs"
                    
                  />
                </td>
                <td className=" py-2 px-2">
                  <input
                    type="number"
                    name="openingBalancePry"
                    value={currOb.openingBalancePry || ""}
                    onChange={obChangeHandler}                   
                    
                    className="outline-1 border border-gray-400 p-1 w-16 text-xs"
                  />
                </td>
                <td className=" py-2 px-2">
                  <input
                    type="number"
                    name="openingBalanceMiddle"
                    value={currOb.openingBalanceMiddle || ""}
                    onChange={obChangeHandler}
                    
                    
                    className="outline-1 border border-gray-400 p-1 w-16 text-xs"
                  />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Income Received
                </th>
                <td className=" py-2 px-2">
                  <input
                    type="number"
                    name="incomePre"
                    value={currOb.incomePre || ""}
                    onChange={obChangeHandler}
                 
                    className="outline-1 border border-gray-400 p-1 w-16 h-full text-xs"
                  />
                </td>
                <td className="py-2 px-2">
                  <input
                    type="number"
                    name="incomePry"
                    value={currOb.incomePry || ""}
                    onChange={obChangeHandler}
                    
                    className="outline-1 border border-gray-400 p-1 w-16 text-xs"
                  />
                </td>
                <td className=" py-2 px-2">
                  <input
                    type="number"
                    name="incomeMiddle"
                    value={currOb.incomeMiddle || ""}
                    onChange={obChangeHandler}
          
                    className="outline-1 border border-gray-400 p-1 w-16 text-xs"
                  />
                </td>
              </tr>
              <tr className=" border-b uppercase bg-sky-600 dark:bg-gray-700 dark:border-gray-700">
                <th
                  scope="col"
                  colSpan={4}
                  className="px-2 py-2 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Rice Details
                </th>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Previous Balance
                </th>
                <td className=" py-2 px-2">
                  <input
                    type="number"
                    name="prevRicePre"
                    value={currObRice.prevRicePre || ""}
                    onChange={obRiceHandler}
                    className="outline-1 border border-gray-400 p-1 w-16 text-xs"
                  />
                </td>
                <td className=" py-2 px-2">
                  <input
                    type="number"
                    name="prevRicePry"
                    value={currObRice.prevRicePry || ""}
                    onChange={obRiceHandler}
                    className="outline-1 border border-gray-400 p-1 w-16 text-xs"
                  />
                </td>
                <td className="py-2 px-2">
                  <input
                    type="number"
                    name="prevRiceMiddle"
                    value={currObRice.prevRiceMiddle || ""}
                    onChange={obRiceHandler}
                    className="outline-1 border border-gray-400 p-1 w-16 text-xs"
                  />
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Rice Lifted
                </th>
                <td className=" py-2 px-2">
                  <input
                    type="number"
                    name="riceLiftedPre"
                    value={currObRice.riceLiftedPre || ""}
                    onChange={obRiceHandler}
                    className="outline-1 border border-gray-400 p-1 w-16 text-xs"
                  />
                </td>
                <td className=" py-2 px-2">
                  <input
                    type="number"
                    name="riceLiftedPry"
                    value={currObRice.riceLiftedPry || ""}
                    onChange={obRiceHandler}
                    className="outline-1 border border-gray-400 p-1 w-16 text-xs"
                  />
                </td>
                <td className=" py-2 px-2">
                  <input
                    type="number"
                    name="riceLiftedMiddle"
                    value={currObRice.riceLiftedMiddle || ""}
                    onChange={obRiceHandler}
                    className="outline-1 border border-gray-400 p-1 w-16 text-xs"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default BalanceForward