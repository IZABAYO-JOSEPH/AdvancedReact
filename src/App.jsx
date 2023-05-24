import "./App.css";
import Usestatehook from "./usestate/usestatehook";
import UseStateArray from "./usestate/useStateArray";
import UseStateObject from "./usestate/usestateObject";
import UsestateGotcha from "./usestate/usestateGotcha";
import UseEffectsBasics from "./useeffecthook/useEffectsBasic";
import FetchData from "./useeffecthook/fetchdata";
import MultiplReturnsFetchData from "./useeffecthook/multiplReturnsFetchData";
import ShortCircuits from "./usestate/short_circuits";
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
    </>
  );
};

export default App;
