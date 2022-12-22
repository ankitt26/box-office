import React from "react";
import { StyledActorCard } from "./ActorCard.styled";

const Actorcard = ({ name, gender, image, country, birthday, deathday }) => {
  return (
    <FadeIn
      from="top"
      positionOffset={400}
      triggerOffset={400}
      delayInMilliseconds={200}
    >
      <StyledActorCard>
        <div className="img-wrapper">
          <img src={image} alt="actor" />
        </div>
        <h1>
          {name} {gender ? `(${gender})` : null}
        </h1>
        <p>{country ? `comes from ${country}` : "no country available "}</p>
        <p>{birthday ? `birth on ${birthday}` : null}</p>
        <p className="deathday">{deathday ? `Died ${deathday}` : "Alive"}</p>
      </StyledActorCard>
    </FadeIn>
  );
};

export default Actorcard;
