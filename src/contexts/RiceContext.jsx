import { createContext, useContext } from "react";
import { MainContext } from "../contexts/MainContext";

export const RiceContext = createContext();

const RiceContextProvider = ({ children }) => {
  const { currObRice, rate, totalDays } = useContext(MainContext);

  const availableRiceBalance = {
    avlRiceBalancePre:
      Number(currObRice.prevRicePre) + Number(currObRice.riceLiftedPre),
    avlRiceBalancePry:
      Number(currObRice.prevRicePry) + Number(currObRice.riceLiftedPry),
    avlRiceBalanceMiddle:
      Number(currObRice.prevRiceMiddle) + Number(currObRice.riceLiftedMiddle),
  };

  const expenditureRice = {
    prePryExpenditure: (rate.ricePry * totalDays.preRoll) / 1000,
    pryExpenditure: (rate.ricePry * totalDays.pryRoll) / 1000,
    middleExpenditure: (rate.riceMiddle * totalDays.middleRoll) / 1000,
  };

  const riceBalance = {
    balancePre:
      Number(availableRiceBalance.avlRiceBalancePre) -
      Number(expenditureRice.prePryExpenditure),
    balancePry:
      availableRiceBalance.avlRiceBalancePry - expenditureRice.pryExpenditure,
    balanceMiddle:
      availableRiceBalance.avlRiceBalanceMiddle -
      expenditureRice.middleExpenditure,
  };
  // total balance calculation for rice
  const totalRiceDetails = {
    totalOb:
      Number(currObRice.prevRicePre) +
      Number(currObRice.prevRicePry) +
      Number(currObRice.prevRiceMiddle),
    totalAvlRice:
      availableRiceBalance.avlRiceBalancePre +
      availableRiceBalance.avlRiceBalancePre +
      availableRiceBalance.avlRiceBalanceMiddle,
    totalReceived:
      Number(currObRice.riceLiftedPre) +
      Number(currObRice.riceLiftedPry) +
      Number(currObRice.riceLiftedMiddle),
    totalExpenditure:
      expenditureRice.prePryExpenditure +
      expenditureRice.pryExpenditure +
      expenditureRice.middleExpenditure,
    totalCb:
      riceBalance.balancePre +
      riceBalance.balancePry +
      riceBalance.balanceMiddle,
  };

  return (
    <RiceContext.Provider
      value={{
        currObRice,
        availableRiceBalance,
        expenditureRice,
        riceBalance,
        totalRiceDetails,
      }}
    >
      {children}
    </RiceContext.Provider>
  );
};

export default RiceContextProvider;
