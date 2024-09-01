// import { logRoles } from "@testing-library/dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button click flow", () => {
  // render app
  render(<App />);

  // Very useful to see what is the role and the name of the container
  //   logRoles(container);
  // find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  // check initial color
  expect(buttonElement).toHaveClass("red");

  // click the button
  fireEvent.click(buttonElement);

  // check button text
  expect(buttonElement).toHaveTextContent(/red/i);

  // check button color
  expect(buttonElement).toHaveClass("blue");
});

test("checkbox flow", () => {
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  // check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  // click to check the checkbox
  fireEvent.click(checkboxElement);

  // expect button to be disabled
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass(/gray/i);

  // click to uncheck the checkbox
  fireEvent.click(checkboxElement);

  // expect button to be enabled
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass(/red/i);

  // click on the button to change its color
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass(/blue/i);

  // disable button
  fireEvent.click(checkboxElement);

  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass(/gray/i);
});
