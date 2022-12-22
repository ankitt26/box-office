import React from "react";

import { useParams } from "react-router-dom";

import ShowMainData from "./Shows/ShowMainData";
import Cast from "./Shows/Cast";
import Seasons from "./Shows/Seasons";
import Details from "./Shows/Details";
import { useShow } from "./custom-hooks";
import { ShowPageWrapper, InfoBlock } from "../Show.styled";

const Shows = () => {
  const { id } = useParams();

  const { show, isLoading, error } = useShow(id);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>

      <div>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </div>

      <div>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </div>
    </ShowPageWrapper>
  );
};

export default Shows;
