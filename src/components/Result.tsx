import React from "react";
import { IRecordLabel, IBand, IMusicData} from "../types";

const renderFestivals = (data: string[]) => (
  <ul>
    {data.map((festival: string, index: number) => (
      <li className="list-item--tertiary" key={`fest-${index}`}>
        {festival}
      </li>
    ))}
  </ul>
);

const renderBands = (data: IBand[]) => (
  <ul>
    {data.map((band: IBand, index: number) => (
      <li className="list-item--secondary" key={`band-${index}`}>
        {band.bandName}
        {renderFestivals(band.festivals)}
      </li>
    ))}
  </ul>
);

const renderRecordLabels = (data: IRecordLabel[]) => (
  <ul>
    {data.length !== 0 &&
      data.map((recordLabel: IRecordLabel, index: number) => (
        <li className="list-item--primary" key={index}>
          {index + 1}. {recordLabel.recordLabel}
          {renderBands(recordLabel.bands)}
        </li>
      ))}
  </ul>
);

const Result = ({ data }: IMusicData) => renderRecordLabels(data);

export default Result;
