import React from "react";
import { IError } from "../types";

const Error = ({ error }: IError) => (
  <div className="error">
    {error === "Network Error" ? (
      <span>
        Network Error. Please check the CORS. Please add the{" "}
        <a href="https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc">
          CORS extension.
        </a>
        Enable it and try again.
      </span>
    ) : (
      error
    )}
  </div>
);

export default Error;
