import React from "react";
import ImageNotFound from "./Image/ImageNotFound.png";
import { Headline, MainDataWrapper, TagList } from "./ShowMainData.styled";
import { Star } from "../styled";

const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : ImageNotFound} alt="show-cover" />
      <div className="text-side">
        <Headline>
          <h1>{name}</h1>
          <div>
            <Star active />
            <span>{rating.average || "N/A"}</span>
          </div>
        </Headline>
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <div>
          <TagList>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </TagList>
        </div>
      </div>
    </MainDataWrapper>
  );
};
export default ShowMainData;
