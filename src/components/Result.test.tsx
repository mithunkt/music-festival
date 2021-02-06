import React from "react";
import { render } from "@testing-library/react";
import Result from "./Result";

test("renders result component without error if empty data", () => {
  const data = [
    {
      recordLabel: "Fourth Woman Records",
      bands: [{ bandName: "Jill Black", festivals: ["LOL-palooza"] }],
    },
    {
      recordLabel: "Pacific Records",
      bands: [{ bandName: "Frank Jupiter", festivals: ["LOL-palooza"] }],
    },
    {
      recordLabel: "XS Recordings",
      bands: [{ bandName: "Werewolf Weekday", festivals: ["LOL-palooza"] }],
    },
  ];
  const { container } = render(<Result data={data} />);
  const resultElem = container.querySelector("ul");
  const festivalElems = container.querySelectorAll(".list-item--primary");
  const bandElems = container.querySelectorAll(".list-item--secondary");
  const recordLabelElems = container.querySelectorAll(".list-item--tertiary");
  expect(resultElem).toBeDefined();
  expect(festivalElems.length).toEqual(3);
  expect(bandElems.length).toEqual(3);
  expect(recordLabelElems.length).toEqual(3);
});
