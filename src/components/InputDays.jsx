import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const InputDays = () => {
  const { handleSubmit, handleChange, currInput } = useContext(MainContext);
  return (
    <div>
      <div className="text-center font-semibold bg-rose-400">Enter Roll Day-wise</div>
      
      <form onSubmit={handleSubmit}>
        
        <div className="flex px-2">
          <ul className="">
            <li>Select Date</li>
            <li>Pre-Primary</li>
            <li>Primary</li>
            <li>Middle</li>
          </ul>
          <ul className="ml-2">
            <li><input
            type="date"
            className="outline-1 border border-gray-400 rounded-sm px-1 w-32"
            name="date"
            id="date"
            value={currInput.date || ""}
            onChange={handleChange}
          /></li>
            <li>
              <input
                type="number"
                id="preRoll"
                placeholder="Pre-Primary"
                className="outline-1 border border-gray-400 px-1 w-32"
                name="preRoll"
                value={currInput.preRoll || ""}
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="number"
                id="pryRoll"
                placeholder="Primary"
                className="outline-1 border border-gray-400 px-1 w-32"
                name="pryRoll"
                value={currInput.pryRoll || ""}
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="number"
                placeholder="Middle"
                id="middleRoll"
                className="outline-1 border border-gray-400 px-1 w-32"
                name="middleRoll"
                value={currInput.middleRoll || ""}
                onChange={handleChange}
              />
            </li>
           
          </ul>
          <div className="border border-pink-400">
          <button type="submit" className=" w-24 h-8 text-center border border-pink-500">
            Submit
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputDays;
