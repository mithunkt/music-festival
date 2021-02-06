import { parseData, getNames, groupBands, groupRecordLabels } from "./service";

describe("parseData", () => {
  it("parse data should return empty array if the input is empty", () => {
    expect(parseData([])).toEqual([]);
  });

  it("parse data should group record label", () => {
    const data = [
      {
        name: "LOL-palooza",
        bands: [
          {
            name: "Werewolf Weekday",
            recordLabel: "XS Recordings",
          },
          {
            name: "Frank Jupiter",
            recordLabel: "Pacific Records",
          },
          {
            name: "Jill Black",
            recordLabel: "Fourth Woman Records",
          },
          {
            name: "Winter Primates",
            recordLabel: "",
          },
        ],
      },
    ];

    expect(parseData(data).length).toEqual(3);
  });

  it("parse data should group bands for record label", () => {
    const data = [
      {
        name: "LOL-palooza",
        bands: [
          {
            name: "Werewolf Weekday",
            recordLabel: "XS Recordings",
          },
          {
            name: "Frank Jupiter",
            recordLabel: "XS Recordings",
          },
        ],
      },
      {
        name: "Twisted Tour",
        bands: [
          {
            name: "Auditones",
            recordLabel: "XS Recordings",
          },
        ],
      },
    ];
    expect(parseData(data)[0].bands.length).toEqual(3);
  });
});
describe("getNames", () => {
  it("should return unique names for given key", () => {
    const data = [
      {
        name: "Fest1",
        bandName: "Band Name 1",
        recordLabel: "XS Recordings",
      },
      {
        name: "Fest1",
        bandName: "Band Name 1",
        recordLabel: "XS Recordings",
      },
      {
        name: "Fest2",
        bandName: "Band Name 2",
        recordLabel: "XS Recordings",
      },
    ];

    expect(getNames(data, "bandName")).toEqual(["Band Name 1", "Band Name 2"]);
  });

  it("should return unique recordLabel names in sorted order", () => {
    const data = [
      {
        name: "Fest1",
        bandName: "Band Name 1",
        recordLabel: "A",
      },
      {
        name: "Fest1",
        bandName: "Band Name 1",
        recordLabel: "B",
      },
      {
        name: "Fest2",
        bandName: "Band Name 2",
        recordLabel: "C",
      },
    ];

    expect(getNames(data, "recordLabel")[0]).toEqual("A");
    expect(getNames(data, "recordLabel")[1]).toEqual("B");
  });
});

describe("groupBands", () => {
  it("should group all the bands and list associated festivals", () => {
    const data = [
      {
        name: "Fest1",
        bandName: "Band Name 1",
        recordLabel: "XS Recordings",
      },
      {
        name: "Fest2",
        bandName: "Band Name 1",
        recordLabel: "XS Recordings",
      },
      {
        name: "Fest2",
        bandName: "Band Name 2",
        recordLabel: "XS Recordings",
      },
    ];

    expect(groupBands(data).length).toEqual(2);
    expect(groupBands(data)[0].festivals).toBeDefined();
    expect(groupBands(data)[0].festivals.length).toEqual(2);
  });
});

describe("groupRecordLabels", () => {
  it("should group all record labels", () => {
    const data = [
      {
        name: "Fest1",
        bandName: "Band Name 1",
        recordLabel: "XS Recordings",
      },
      {
        name: "Fest2",
        bandName: "Band Name 1",
        recordLabel: "XS Recordings",
      },
      {
        name: "Fest2",
        bandName: "Band Name 2",
        recordLabel: "Pacific Records",
      },
    ];

    expect(groupRecordLabels(data).length).toEqual(2);
    expect(groupRecordLabels(data)[0].bands.length).toEqual(1);
    expect(groupRecordLabels(data)[1].bands.length).toEqual(1);
  });
});
