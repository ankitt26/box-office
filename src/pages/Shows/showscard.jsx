import React from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "react-slide-fade-in";
import { StyledShowCard } from "./ShowCard.styled";
import { Star } from "../styled";
const Showscard = ({ id, name, image, summary, onStarClick, isStarred }) => {
  const summaryAsText = summary
    ? `${summary.split("").slice(0, 20).join("").replace(/<.+?>/g, "")}...`
    : "No description";

  return (
    <FadeIn
      from="top"
      positionOffset={400}
      triggerOffset={400}
      delayInMilliseconds={200}
    >
      <StyledShowCard>
        <div className="img-wrapper">
          <img src={image} alt="show" />
        </div>

        <h1>{name}</h1>

        <p>{summaryAsText}</p>

        <div className="btns">
          <Link to={`/shows/${id}`}>Read more</Link>
          <button type="button" onClick={onStarClick}>
            <Star active={isStarred} />
          </button>
        </div>
      </StyledShowCard>
    </FadeIn>
  );
};

export default Showscard;
