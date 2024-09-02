import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import SummaryForm from "../SummaryForm";

describe("Summary Form", () => {
  // It is recommended to have a test to handle default states
  test("Initial conditions", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(confirmButton).toBeDisabled();
  });

  test("Checkbox disables button on first click and enables on second click", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });

  // This is my solution
  /** test("checkbox flow", () => {
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
  }); */
});
