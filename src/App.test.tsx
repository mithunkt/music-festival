import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

test("renders music app", () => {
  render(<App />);
  const headingElem = screen.getByText(/Music Festival/i);
  expect(headingElem).toBeInTheDocument();
});

test("renders legends", () => {
  const { container } = render(<App />);
  const legendElem = container.querySelectorAll("legend");
  expect(legendElem).toBeDefined();
});

test("renders correctly when api fails with error message", async () => {
  global.fetch = jest.fn(() =>
    Promise.reject({
      json: () => Promise.resolve({}),
      statusText: "Test Error",
    })
  );

  await act(async () => {
    render(<App />);
  });
  const errorElem = screen.getByText(/Test Error/i);

  expect(errorElem).toBeInTheDocument();
});

test("renders correctly when api is success and returns empty string", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(""),
      ok: true
    })
  );

  await act(async () => {
    render(<App />);
  });
  const headingElem = screen.getByText(/No Data/i);

  expect(headingElem).toBeInTheDocument();
});
