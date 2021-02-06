import { IRecordLabel, IData, IBand, IParsedData } from "../types";
import { DATA } from "./offline-data";

const BASE_URL = "http://eacodingtest.digital.energyaustralia.com.au";

export const getData = (): any => {
  return fetch(`/api/v1/festivals`);
  // return Promise.resolve(DATA)
};

export const getNames = (data: IParsedData[], key: string): string[] =>
  [...new Set(data.map((item: any) => item[key]))].filter(Boolean).sort();

export const groupBands = (bands: IParsedData[]): IBand[] =>
  getNames(bands, "bandName").map((band) => ({
    bandName: band,
    festivals: [
      ...new Set(
        bands
          .filter(
            (bandItem: IParsedData) =>
              bandItem.bandName === band && bandItem.name
          )
          .map((item: IParsedData) => item.name)
          .sort()
      ),
    ],
  }));

export const groupRecordLabels = (data: IParsedData[]): IRecordLabel[] =>
  getNames(data, "recordLabel").map((recordLabel) => ({
    recordLabel: recordLabel,
    bands: groupBands(
      data.filter(
        (recordLabelItem) => recordLabelItem.recordLabel === recordLabel
      )
    ),
  }));

export const parseData = (data: IData[]): IRecordLabel[] =>
  groupRecordLabels(
    data.flatMap(({ name, bands }) =>
      bands.map((band) => ({
        name,
        ...{ bandName: band.name, recordLabel: band.recordLabel },
      }))
    )
  );
