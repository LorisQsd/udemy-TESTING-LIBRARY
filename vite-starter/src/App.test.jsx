import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  // The method render a simulated DOM for whatever JSX we give it as an argument
  render(<App />);
  // We can access to the created simulated DOM by using the 'screen' global
  const headingElement = screen.getByText(/learn react/i); // Regexp: (i): Case insensitive
  expect(headingElement).toBeInTheDocument();
});
