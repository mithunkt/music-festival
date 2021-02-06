import React, { useState, useEffect } from "react";
import "./App.css";

import { parseData, getData } from "./service/service";
import Legends from "./components/Legends";
import Error from "./components/Error";
import Result from "./components/Result";
import { IRecordLabel } from "./types";

const App = () => {
  const [error, setError] = useState(null);
  const [musicData, setMusicData] = useState<IRecordLabel[]>([]);

  useEffect(
    () =>
      getData()
        .then((res: any) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res);
        })
        .then((res: any) => {
          let data = res || [];
          if (typeof data !== "object") {
            data = [];
          }
          setMusicData(parseData(data));
        })
        .catch((err: any) => {
          setError(
            err && err.statusText
              ? err.statusText
              : "Something went wrong with API"
          );
        }),
    []
  );

  return (
    <div className="app">
      <header className="app-header">Music Festival</header>
      <section>
        <Legends />
        {!error && musicData.length !== 0 && <Result data={musicData} />}
        {error && <Error error={error} />}
        {!error && musicData.length === 0 && <Error error="No Data" />}
      </section>
    </div>
  );
};

export default App;
