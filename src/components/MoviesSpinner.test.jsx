import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import MoviesSpinner from "./MoviesSpinner";

it("should render MoviesSpinner component", () => {
  const { container } = render(<MoviesSpinner />);
  screen.debug();
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="spinner-border"
      role="status"
    >
      <span
        class="sr-only"
      >
        Loading...
      </span>
    </div>
  `);
});
