import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../resources/ThemeColors";
import DatePicker from "react-date-picker";

function SearchComponent() {
  const [date, setDate] = useState(new Date());

  const onChangeDate = (date) => {
    setDate(date);
  };
  return (
    <MainDiv>
      <FilterDiv>
        <FilterTitle>Looking for?</FilterTitle>
        <FilterInput></FilterInput>
      </FilterDiv>
      <FilterDiv>
        <FilterTitle style={{ marginBottom: "1em" }}>When?</FilterTitle>
        <DatePicker
          onChange={onChangeDate}
          value={date}
          className={"date-picker"}
          calendarClassName={"date-picker1"}
        />
      </FilterDiv>
      <SearchButton>Search</SearchButton>
    </MainDiv>
  );
}

export default SearchComponent;

const MainDiv = styled.div`
  height: 30vh;
  width: 90vw;
  background-color: ${colors.darkMainColor};
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: -8em;

  @media (min-width: 800px) {
    flex-flow: row nowrap;
    height: 15vh;
  }
`;

const FilterDiv = styled.div`
  height: 6vh;
  width: 80vw;
  background-color: ${colors.darkMainColor};
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-evenly;
  @media (min-width: 800px) {
    width: 27vw;
  }
`;

const FilterTitle = styled.h3`
  color: white;
`;

const FilterInput = styled.input`
  background-color: ${colors.darkMainColor};
  color: ${colors.white};
  width: 100%;
  border-bottom: 1px solid white;
  :focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  height: 5vh;
  width: 80vw;
  background-color: ${colors.mainColor};
  border-radius: 5px;
  color: ${colors.white};
  :focus {
    outline: none;
  }
  :hover {
    color: ${colors.darkMainColor};
    background-color: ${colors.white};
  }
  @media (min-width: 800px) {
    width: 18vw;
    height: 10vh;
  }
`;
