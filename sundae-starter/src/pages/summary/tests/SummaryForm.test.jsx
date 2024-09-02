import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import SummaryForm from "../SummaryForm";

describe("Summary Form", () => {
  test("checkbox flow", () => {
    render(<SummaryForm />);

    const checkboxElement = screen.getByRole("checkbox", {
      name: /accept terms and conditions/i,
    });
    const submitButtonElement = screen.getByRole("button", {
      name: /submit/i,
    });

    // Default checkbox to be unchecked
    expect(checkboxElement).not.toBeChecked();

    fireEvent.click(checkboxElement);

    // Enable button after checking checkbox
    expect(submitButtonElement).toBeEnabled();

    fireEvent.click(checkboxElement);

    // Disable button after unchecking checkbox
    expect(submitButtonElement).toBeDisabled();
  });
});
