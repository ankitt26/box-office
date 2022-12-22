import Main from "../MainPage";

import React, { useState, useEffect } from "react";
import { useShows } from "./custom-hooks";
import { ApiGet } from "./config";
import ShowGrid from "./Shows/showsgrid";

const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map((showId) => ApiGet(`/shows/${showId}`));

      Promise.all(promises)
        .then((ApiData) => ApiData.map((show) => ({ show })))
        .then((results) => {
          setShows(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
    console.log(shows);
  }, [starred]);

  return (
    <Main>
      {isLoading && <div>Shows are still loading</div>}
      {error && <div>Error occured: {error}</div>}
      {!isLoading && !shows && <div>No shows were added</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </Main>
  );
};

export default Starred;
