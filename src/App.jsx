import "./App.css";
import Usestatehook from "./usestate/usestatehook";
import UseStateArray from "./usestate/useStateArray";
import UseStateObject from "./usestate/usestateObject";
import UsestateGotcha from "./usestate/usestateGotcha";
import UseEffectsBasics from "./useeffecthook/useEffectsBasic";
import FetchData from "./useeffecthook/fetchdata";
import MultiplReturnsFetchData from "./useeffecthook/multiplReturnsFetchData";
import ShortCircuits from "./usestate/short_circuits";
import ToggleAlert from "./usestate/toggleAlert";
import UserChallenge from "./usestate/useChallenge";
import ControlledInputs from "./reactforms/controlledInputs";
import FrmUserChallenge from "./reactforms/userChallenge";
import MultipleInput from "./reactforms/multipleInputs";
import CheckBox from "./reactforms/checkBox";
import UncontrolledInputs from "./reactforms/formDataAPI";
const App = () => {
  return (
    <>
      <Usestatehook />
      <UseStateArray />
      <UseStateObject />
      <UsestateGotcha />
      <UseEffectsBasics />
      <FetchData />
      <MultiplReturnsFetchData />
      <ShortCircuits />
      <ToggleAlert />
      <UserChallenge />
      <ControlledInputs />
      <FrmUserChallenge />
      <MultipleInput/>
      <CheckBox />
      <UncontrolledInputs />
    </>
  );
};

export default App;
