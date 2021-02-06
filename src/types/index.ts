export interface IDataBand {
  name: string;
  recordLabel: string;
}

export interface IData {
  name: string;
  bands: IDataBand[];
}

export interface IParsedData {
  name: string;
  recordLabel: string;
  bandName: string;
}

export interface IBand {
    bandName: string;
    festivals: string[];
}

export interface IRecordLabel {
    recordLabel: string;
    bands: IBand[]
}

export interface IMusicData {
  data: IRecordLabel[];
}

export interface IError {
  error: string | null;
}