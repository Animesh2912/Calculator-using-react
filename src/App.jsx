import style from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calval, setCalval] = useState("");
  const onbuttonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setCalval(result);
    } else {
      const newDisplayValue = calval + buttonText;
      setCalval(newDisplayValue);
    }
  };

  return (
    <div className={style.calculator}>
      <Display displayValue={calval} />
      <ButtonsContainer onbuttonClick={onbuttonClick} />
    </div>
  );
}

export default App;
