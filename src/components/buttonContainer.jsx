import styles from "./button.module.css";

const ButtonContainer = ({ buttons, handleOnClick }) => {
  return (
    <button
      className={`${styles["calc-btn"]} 
      ${!isNaN(buttons) || buttons === "." ? styles["num-btn"] : styles["operator-btn"]} 
      ${buttons === "AC" || buttons === "C" ? styles["clear-btn"] : ""} 
      ${buttons === "=" ? styles["equal-btn"] : ""}`}
      onClick={handleOnClick}
    >
      {buttons}
    </button>
  );
};
export default ButtonContainer;