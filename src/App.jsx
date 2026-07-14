import styles from "./components/App.module.css";
import DisplayInput from "./components/display";
import ButtonContainer from "./components/buttonContainer";
import { useState } from "react";

function App() {
  const buttonsArr = [
    "AC",
    "C",
    "+",
    "-",
    "1",
    "2",
    "3",
    "/",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "%",
    "0",
    ".",
    "=",
  ];
  const operators = ["+", "-", "*", "/", "%"];
  const [displayValue, setDisplayValue] = useState("");

  const handleOnClick = (event) => {
    let buttonText = event.target.innerText;
    const lastChar = displayValue[displayValue.length - 1];
    if (buttonText === "AC") {
      setDisplayValue("");
      return;
    } else if (buttonText === "C") {
      setDisplayValue(displayValue.slice(0, -1));
      return;
    } else if (buttonText === "=" && displayValue !== "") {
      if (operators.includes(lastChar)) {
        setDisplayValue(displayValue.slice(0, -1));
        return;
      }
      try {
        const result = eval(displayValue);
        setDisplayValue(result);
      } catch (error) {
        setDisplayValue("Error");
      }
      return;
    } else if (buttonText === ".") {
      const operatorPositions = operators.map((operator) => {
        return displayValue.lastIndexOf(operator);
      });
      let largestIndex = Math.max(...operatorPositions);
      let currentNumber = displayValue.slice(largestIndex + 1);
      if (!currentNumber.includes(".")) {
        setDisplayValue((previousValue) => previousValue + buttonText);
        return;
      }
      return;
    } else if (
      buttonText === "-" &&
      !operators.includes(lastChar) &&
      displayValue !== "."
    ) {
      setDisplayValue((previousValue) => previousValue + buttonText);
      return;
    } else if (
      operators.includes(buttonText) &&
      !operators.includes(lastChar) &&
      displayValue !== "" &&
      displayValue !== "."
    ) {
      setDisplayValue((previousValue) => previousValue + buttonText);
      return;
    } else if (!isNaN(buttonText)) {
      setDisplayValue((previousValue) => previousValue + buttonText);
      return;
    }
  };

  return (
    <div className={styles["calculator"]}>
      <DisplayInput displayValue={displayValue} />
      <div className={styles["button-container"]}>
        {buttonsArr.map((buttons, index) => (
          <ButtonContainer
            key={index}
            buttons={buttons}
            handleOnClick={handleOnClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
