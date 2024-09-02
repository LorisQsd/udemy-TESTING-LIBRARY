import { useId, useState } from "react";
import "./App.css";
import { kebabCaseToTitleCase } from "./helpers";

function App() {
  // STATES //
  const [buttonColor, setButtonColor] = useState("midnight-blue");
  const [disabled, setDisabled] = useState(false);

  // Hooks //
  const checkboxId = useId();

  // Condition Logic //
  const newButtonColor = buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";

  // Handler //
  const handleButtonClick = () => {
    setButtonColor(newButtonColor);
  };

  const handleCheckboxClick = ({ target: { checked } }) => {
    setDisabled(checked);
  };

  return (
    <div>
      <button
        disabled={disabled}
        className={disabled ? "gray" : newButtonColor}
        onClick={handleButtonClick}
      >
        Change to {kebabCaseToTitleCase(buttonColor)}
      </button>

      <form>
        <label htmlFor={checkboxId}>Disable button</label>
        <input type="checkbox" onClick={handleCheckboxClick} id={checkboxId} />
      </form>
    </div>
  );
}

export default App;
