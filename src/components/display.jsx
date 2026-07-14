import styles from "./display.module.css";

let DisplayInput = ({ displayValue }) => {
  return (
    <div>
      <input
        className={styles["display"]}
        type="text"
        value={displayValue === "" ? 0 : displayValue}
        readOnly
      />
    </div>
  );
};
export default DisplayInput;
