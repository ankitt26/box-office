import React from "react";
import { FlexGrid } from "../styled";
import Actorcard from "./actorcard";
import ImageNotFound from "./Image/ImageNotFound.png";

const Actorgrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map((value, index) => {
        return (
          <Actorcard
            key={index}
            name={value.person.name}
            country={value.person.country ? value.person.country.name : null}
            birthday={value.person.birthday}
            deathday={value.person.deathday}
            gender={value.person.gender}
            image={
              value.person.image ? value.person.image.medium : ImageNotFound
            }
          />
        );
      })}
    </FlexGrid>
  );
};

export default Actorgrid;
