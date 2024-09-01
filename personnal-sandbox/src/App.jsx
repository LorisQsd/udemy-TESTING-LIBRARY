import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("blue");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const handleClick = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div>
      <button className={newButtonColor} onClick={handleClick}>
        Color is {buttonColor}
      </button>
    </div>
  );
}

export default App;
