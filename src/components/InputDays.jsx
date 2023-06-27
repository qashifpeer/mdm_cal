import { useContext } from "react";
import { MainContext } from "../contexts/mainContext";



const InputDays = () => {
    const { handleSubmit, handleChange,currInput} =
    useContext(MainContext);
  return (
    <div>
         <form onSubmit={handleSubmit}>
              <input
                type="date"
                className="outline-1 border border-gray-400 px-1 w-24"
                name="date"
                value={currInput.date || ""}
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Pre-Primary"
                className="outline-1 border border-gray-400 px-1 w-24"
                name="preRoll"
                value={currInput.preRoll || ""}
                onChange={handleChange}
                
              />
              <input
                type="number"
                placeholder="Primary"
                className="outline-1 border border-gray-400 px-1 w-24"
                name="pryRoll"
                value={currInput.pryRoll || ""}
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Middle"
                className="outline-1 border border-gray-400 px-1 w-24"
                name="middleRoll"
                value={currInput.middleRoll || ""}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="px-4 py-2 border border-gray-500"
              >
                Submit
              </button>
            </form>
    </div>
  )
}

export default InputDays