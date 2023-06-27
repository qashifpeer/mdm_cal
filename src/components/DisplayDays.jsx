import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";



const DisplayDays = () => {
    const {  roll } =
    useContext(MainContext);
  return (
    <div>
         <div className="display-days-container">
            <table className="table-auto">
              <thead>
                <tr className="text-xs border-black border-b-2">
                  <th className="px-2  ">Date</th>
                  <th className="px-2  ">Pre-Primary</th>
                  <th className="px-2  ">Primary</th>
                  <th className="px-2  ">Middle</th>
                </tr>
              </thead>
              <tbody>
              {roll.map((currItem, index) => {

                return (
                  <tr className="text-xs text-center border-b-2" key={index}>
                    <td>{currItem.date}</td>
                    <td>{currItem.preRoll}</td>
                    <td>{currItem.pryRoll}</td>
                    <td>{currItem.middleRoll}</td>
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default DisplayDays