import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [roll, setRoll] = useState([]);

  // const [totalMeals, setMeals] = useState([{date:"", preRoll:0, pryRoll:0, middleRoll:0}]);
  const [currInput, setCurrInput] = useState({});

  const [openingBalance, setOpeningBalance] = useState([]);
  const [currOb, setCurrOb] = useState({});
  console.log("🚀 ~ file: MainContext.jsx:14 ~ MainContextProvider ~ currOb:", currOb)

  const [currObRice, setCurrObRice] = useState({});

  const [month, setMonth] = useState("January");
  const [schoolName, setSchoolName] = useState("");

  const unique_id = uuid();

  //   Rate List
  const rate = {
    primary: 5.45,
    middle: 8.17,
    ricePry: 100,
    riceMiddle: 150,
  };
  
  

  //   fetching current Roll
  const handleChange = (e) => {
    const { name, value } = e.target || "";
    setCurrInput({ ...currInput, id: unique_id, [name]: value });
  };

  // etching daily Roll
  const handleSubmit = (e) => {
    e.preventDefault();
    setRoll([...roll, currInput]);
    localStorage.setItem('roll', roll);
    setCurrInput({});
  };

  //   calculating Total Meals
  const totalDays = roll.reduce(
    (acc, curr) => {
      // return acc + Number(curr.preRoll)
      const { preRoll, pryRoll, middleRoll } = curr;
      return {
        preRoll: acc.preRoll + Number(preRoll),
        pryRoll: acc.pryRoll + Number(pryRoll),
        middleRoll: acc.middleRoll + Number(middleRoll),
      };
    },
    { preRoll: 0, pryRoll: 0, middleRoll: 0 }
  );

  // fetching previous balances
  const obChangeHandler = (e) => {
    const { name, value } = e.target || "";
    setCurrOb({ ...currOb, [name]: value });
  };
  
  // Previous Balance Rice
  const obRiceHandler = (e) => {
    const { name, value } = e.target;
    setCurrObRice({ ...currObRice, [name]: value });
  };
  

  // delete an entry
  const deleteItem = (id) => {
    const clickedItem = roll.filter((currElem) => currElem.id !== id);
    setRoll(clickedItem);
  };

  const selectedMonth = (e) => {
    setMonth(e.target.value);
  };
  const schoolNameHandler = (e) => {
    setSchoolName(e.target.value);
  };

  return (
    <MainContext.Provider
      value={{
        rate,
        handleSubmit,
        currInput,
        handleChange,
        roll,
        totalDays,
        obChangeHandler,
        currOb,
        obRiceHandler,
        openingBalance,
        currObRice,
        deleteItem,
        selectedMonth,
        month,
        schoolNameHandler,
        schoolName,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export const useMainContext = () => {
  return useContext(MainContext);
};

export default MainContextProvider;
