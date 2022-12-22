import Showscard from "./showscard";
import { FlexGrid } from "../styled";
import { useShows } from "../custom-hooks";
import ImageNotFound from "./Image/ImageNotFound.png";
// import FadeIn from "react-router-dom"

const Showsgrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: "REMOVE", showId: show.id });
          } else {
            dispatchStarred({ type: "ADD", showId: show.id });
          }
        };

        return (
          <Showscard
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : ImageNotFound}
            key={show.id}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default Showsgrid;
