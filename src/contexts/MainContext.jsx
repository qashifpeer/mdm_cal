import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const MainContext = createContext();

// Retrieving Days from Local Storage
const getTotalDays = () => {
  let totalDays = localStorage.getItem("roll");
  if (totalDays) {
    // return JSON.parse(JSON.stringify(localStorage.getItem('roll')));
    return JSON.parse(localStorage.getItem("roll"));
  } else {
    return [];
  }
};


// Retrieving Opening Balance from Local Storage
const getBalance = () => {
  let totalBalance = localStorage.getItem("currOb");
  if (totalBalance) {
    return JSON.parse(localStorage.getItem("currOb"));
  } else {
    return [];
  }
};


// Retrieving Opening Balance Rice from Local Storage
const getBalanceRice = () => {
  let totalBalance = localStorage.getItem("currObRice");
  if (totalBalance) {
    return JSON.parse(localStorage.getItem("currObRice"));
  } else {
    return [];
  }
};

const MainContextProvider = ({ children }) => {
  const [roll, setRoll] = useState(getTotalDays());

  // const [initialRoll, setInitialRoll] = useState(getTotalDays());

  const [currInput, setCurrInput] = useState({});

  const [openingBalance, setOpeningBalance] = useState();
  const [currOb, setCurrOb] = useState(getBalance());

  const [currObRice, setCurrObRice] = useState(getBalanceRice());

  const [month, setMonth] = useState("January");
  const [schoolName, setSchoolName] = useState("");

  const unique_id = uuid();

  // useEffect(() => {
  //   const rollData  = JSON.parse(JSON.stringify(localStorage.getItem('roll')));
  //   // const rollData  = JSON.parse(localStorage.getItem('roll'));
  //   if (Array.isArray(rollData)) {

  //     setRoll(rollData);
  //   }
  //   else {
  //     console.log("useefect called in else")
  //     // If rollData is not an array (or doesn't exist), set 'roll' as an empty array
  //     setRoll([]);
  //   }
  // }, []);

  // Saving Daily Roll to Local Storage
  useEffect(() => {
    localStorage.setItem("roll", JSON.stringify(roll));
  }, [roll]);

  
  //  Saving Opening Balance to Local Storage
  useEffect(() => {
    localStorage.setItem("currOb", JSON.stringify(currOb));
  }, [currOb]);


  //  Saving Opening Balance Rice to Local Storage
  useEffect(() => {
    localStorage.setItem("currObRice", JSON.stringify(currObRice));
  }, [currObRice]);

 

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


   

  //   Rate List
  const rate = {
    //primary: 6.19,
   // middle: 9.29,
    primary: 6,
   middle: 9,
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

    setCurrInput({});
  };

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

  

  const clearStorage = ()=>{
    localStorage.removeItem("roll","currOb","currObRice");
    setRoll([]);
    setCurrOb({})
    setCurrObRice({})
  }
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
        clearStorage,
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
