import { createContext, useContext, useState } from "react";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [roll, setRoll] = useState([]);
  
  const [totalMeals, setMeals] = useState([{date:"", preRoll:0, pryRoll:0, middleRoll:0}]);
  const [currInput, setCurrInput] = useState({});
  
  const [openingBalance, setOpeningBalance] = useState([]);
  const [currOb, setCurrOb] = useState({});

  const [currObRice, setCurrObRice] = useState({});

//   Rate List
const rate = {
  primary:  5.45,
  middle: 8.17,
  ricePry: 100,
  riceMiddle: 150
}
  


//   fetching daily Roll
  const handleChange = (e) => {
    const { name, value } = e.target || "";
    setCurrInput({ ...currInput, [name]: value });
  };

  // previous balances 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setRoll([...roll, currInput]);
    setCurrInput({});

    

    
  };

//   calculating Total Meals
const totalDays = roll.reduce((acc,curr)=>{
    // return acc + Number(curr.preRoll)
    const {preRoll,pryRoll,middleRoll} = curr;
    return{
        preRoll:acc.preRoll+Number(preRoll),
        pryRoll:acc.pryRoll+Number(pryRoll),
        middleRoll:acc.middleRoll+ Number(middleRoll),
    }

},{preRoll:0,pryRoll:0,middleRoll:0});

// fetching previous balances
const obChangeHandler = (e) => {
    const { name, value } = e.target || "";
    setCurrOb({...currOb, [name]:value})

}
// Previous Balance Rice
const obRiceHandler = (e) =>{
    const { name, value } = e.target;
    setCurrObRice({...currObRice, [name]:value})


}
const handleCalculate = () =>{
    // setOpeningBalance([...openingBalance,currOb])
    // setCurrOb({});

}


  return (
    <MainContext.Provider
      value={{ rate, 
         handleSubmit,
          currInput,
           handleChange,
            roll,
             totalDays,
             handleCalculate,
             obChangeHandler,
             currOb,
             obRiceHandler,
             openingBalance,
             currObRice
            
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
