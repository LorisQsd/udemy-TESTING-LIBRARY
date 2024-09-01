import { useId, useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("blue");
  const checkboxId = useId();
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const handleClick = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div>
      <button className={newButtonColor} onClick={handleClick}>
        Change to {buttonColor}
      </button>

      <form>
        <label htmlFor={checkboxId}>Disable button</label>
        <input type="checkbox" id={checkboxId} />
      </form>
    </div>
  );
}

export default App;
