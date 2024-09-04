import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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

  test("Checkbox disables button on first click and enables on second click", async () => {
    // We prefer using userEvent instead of fireEvent because it simulates a real user behavior
    // instead of sending a click from a computer
    // For that, we need first to open a session by using the setup method and store it into
    // the user variable
    // source : https://testing-library.com/docs/user-event/intro/
    const user = userEvent.setup();

    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    // user events always returns a promise, so we'll need async await
    await user.click(checkbox);
    expect(confirmButton).toBeEnabled();

    await user.click(checkbox);
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

  test("popover responds to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    // popover start out hidden
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears on mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    // popover disappear when we mouse out
    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
