import { useState } from "react";

export default function SummaryForm() {
  // States //
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  // Handlers //
  const handleCheckboxClick = () => {
    setIsTermsAccepted((prevState) => !prevState);
  };

  return (
    <form>
      <input
        type="checkbox"
        id="terms-conditions"
        onClick={handleCheckboxClick}
      />
      <label htmlFor="terms-conditions">Accept terms and conditions</label>

      <button type="submit" disabled={!isTermsAccepted}>
        Confirm order
      </button>
    </form>
  );
}
