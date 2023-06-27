import { createContext, useContext } from "react";
import { MainContext } from "../contexts/MainContext";

export const CalculateContext = createContext();

const CalculateContextProvider = ({ children }) => {
  const { currOb, currObRice, totalDays, rate } = useContext(MainContext);

  const availableBalance = {
    avlBalancePre: Number(currOb.openingBalancePre) + Number(currOb.incomePre),
    avlBalancePry: Number(currOb.openingBalancePry) + Number(currOb.incomePry),
    avlBalanceMiddle:
      Number(currOb.openingBalanceMiddle) + Number(currOb.incomeMiddle),
  };

  const expenditure = {
    prePryExpenditure: rate.primary * totalDays.preRoll,
    pryExpenditure: rate.primary * totalDays.pryRoll,
    middleExpenditure: rate.middle * totalDays.middleRoll,
  };

  const balance = {
    balancePre: availableBalance.avlBalancePre - expenditure.prePryExpenditure,
    balancePry: availableBalance.avlBalancePry - expenditure.pryExpenditure,
    balanceMiddle:
      availableBalance.avlBalanceMiddle - expenditure.middleExpenditure,
  };
  // Total expenses calculation
  const totalExpenses = {
    
    totalOb:
      Number(currOb.openingBalancePre) +
      Number(currOb.openingBalancePry) +
      Number(currOb.openingBalanceMiddle),
    totalReceived:
      Number(currOb.incomePre) +
      Number(currOb.incomePry) +
      Number(currOb.incomeMiddle),
    totalAvlAmount : availableBalance.avlBalancePre + availableBalance.avlBalancePry + availableBalance.avlBalanceMiddle,
    totalExpenditure:
      expenditure.prePryExpenditure +
      expenditure.pryExpenditure +
      expenditure.middleExpenditure,
    totalCb: balance.balancePre + balance.balancePry + balance.balanceMiddle,
  };
  return (
    <CalculateContext.Provider
      value={{
        currOb,
        currObRice,
        totalDays,
        expenditure,
        availableBalance,
        balance,
        totalExpenses
      }}
    >
      {children}
    </CalculateContext.Provider>
  );
};

export default CalculateContextProvider;
