import { useContext, useEffect, useRef } from "react";
import { MainContext } from "../contexts/MainContext";

const InputDays = () => {
  const { handleSubmit, handleChange, currInput } = useContext(MainContext);
  const inputFocus = useRef(null);
  
//   useEffect(() => {
//     inputFocus.current.focus();
// }, []);
  return (
    <div className="w-full flex justify-center flex-col my-2">
      <div className="text-center font-semibold bg-sky-600 ">
        Enter Roll Day-wise
      </div>

      <form onSubmit={handleSubmit} className="pt-2">
        <div className="px-2">
          <div className="input-lists flex justify-center">
          <ul className="text-white">
            <li className="font-thin leading-7">Select Date</li>
            <li className="font-thin leading-7">Pre-Primary</li>
            <li className="font-thin leading-7">Primary</li>
            <li className="font-thin leading-7">Middle</li>
          </ul>
          <ul className="ml-2">
            <li>
              <input
                type="date"
                className="outline-1 border border-gray-400 rounded-sm px-1 w-32"
                name="date"
                id="date"
                value={currInput.date || ""}
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="number"
                ref={inputFocus}
                id="preRoll"
                placeholder="Pre-Primary"
                className="outline-1 border border-gray-400 px-1 w-32"
                name="preRoll"
                value={currInput.preRoll || ""}
                onChange={handleChange}
                required
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
                required
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
                required
              />
            </li>
          </ul>
          </div>
          <div className=" ml-2 py-2 w-full flex justify-center ">
            <button
              type="submit"
              className="  my-auto px-4 py-2 text-center text-black border-2 rounded-lg  border-pink-500 origin-center transform transition duration-300 delay-150 hover:delay-100 hover:bg-sky-700 hover:text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputDays;
