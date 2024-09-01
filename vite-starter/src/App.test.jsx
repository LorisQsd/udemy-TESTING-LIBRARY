import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  // The method render a simulated DOM for whatever JSX we give it as an argument
  render(<App />);
  // We can access to the created simulated DOM by using the 'screen' global
  // It is top priority to "select" your element with a role.
  // That means your code is accessible and can be interprated from a screen reader
  const headingElement = screen.getByRole("heading", { name: /learn react/i }); // Regexp: (i): Case insensitive
  expect(headingElement).toBeInTheDocument();
});
