import React, { useState } from "react";
import Main from "../MainPage";
import Actorgrid from "./Actor/actorgrid";
import { ApiGet } from "./config";
import Showsgrid from "./Shows/showsgrid";
import { useLastQuery } from "./custom-hooks";
import {
  SearchInput,
  RadioInputsWrapper,
  SearchButtonWrapper,
} from "./Home.styled";
import CustomRadio from "../CustomRadio";

const Home = () => {
  const [input, setinput] = useLastQuery("");
  const [results, setresults] = useState(null);
  const [searchoption, setsearchoption] = useState("shows");

  const checkoption = searchoption === "shows";

  // const isShowsSearch = searchOption === 'shows';
  const fetchApi = () => {
    ApiGet(`/search/${searchoption}?q=${input}`).then((result) => {
      setresults(result);
    });
  };

  const onChange = (event) => {
    setinput(event.target.value);
  };

  const onClick = () => {
    fetchApi();
  };

  const keyevent = (event) => {
    if (event.keyCode === 13) {
      fetchApi();
    }
  };

  const radiochange = (event) => {
    setsearchoption(event.target.value);
  };

  const component = () => {
    if (results && results.length === 0) {
      return <div>no data</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <Showsgrid data={results} />
      ) : (
        <Actorgrid data={results} />
      );
    }
    return null;
  };

  return (
    <>
      <Main>
        <SearchInput
          type="text"
          value={input}
          onChange={onChange}
          onKeyDown={keyevent}
          placeholder="search something"
        />

        <RadioInputsWrapper>
          <div>
            <CustomRadio
              label="Shows"
              id="shows-search"
              value="shows"
              checked={checkoption}
              onChange={radiochange}
            />
          </div>

          <div>
            <CustomRadio
              label="Actors"
              id="actors-search"
              value="people"
              checked={!checkoption}
              onChange={radiochange}
            />
          </div>
        </RadioInputsWrapper>

        <SearchButtonWrapper>
          <button type="button" onClick={onClick}>
            Search
          </button>
        </SearchButtonWrapper>
        {component()}
      </Main>
    </>
  );
};
export default Home;
