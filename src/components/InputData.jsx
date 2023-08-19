import BalanceForward from "./BalanceForward"
import InputDays from "./InputDays"
import SchoolHeader from "./SchoolHeader"



const InputData = () => {
   
  return (
    <div className="border-2 border-dotted border-black">
    <SchoolHeader />
    <BalanceForward />
    <InputDays />
         
    </div>
  )
}

export default InputData