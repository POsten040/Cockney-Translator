import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Input from "../components/Input";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders message on the dom if gameStart = false", () => {
  act(() => {
    render(<Input gameStart={false} />, container);
  });
  expect(container.textContent).toBe("Yer Ourright!")
})