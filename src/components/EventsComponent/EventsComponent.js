import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EventsCard from "./EventsCard";
import EventsComponentHeader from "./EventsComponentHeader";
import axios from "axios";
import Loader from "react-loader-spinner";

function EventsComponent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    var config = {
      method: "get",
      url: "https://code-matata.herokuapp.com/api/v1/recording/all",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNjIyOTI2ODU3LCJleHAiOjE2MjM3OTA4NTd9.V2sk93-QAdFqXXhd9T0_J1Jmf0X5A1FhiaDjqRGwtpsApdqkEBLxW0kq9RC7NQ82tm7jXMoadDudStrPS3JqMg",
      },
    };

    axios(config)
      .then((response) => {
        // console.log(response.data);
        setData(response.data.recordings);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <MainSection>
      <EventsComponentHeader />
      {isLoading ? (
        <LoaderDiv>
          <Loader type="ThreeDots" color="#262a52" height={50} width={50} />
        </LoaderDiv>
      ) : (
        <EventsComponentDiv>
          {data.map((recording) => (
            <EventsCard props={recording} key={recording.id} />
          ))}
        </EventsComponentDiv>
      )}
    </MainSection>
  );
}

export default EventsComponent;

const MainSection = styled.section`
  margin-top: 2em;
  color: black;
  @media (min-width: 800px) {
    width: 95vw;
  }
`;

const EventsComponentDiv = styled.div`
  padding: 1em 1em 2em 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;

  @media (min-width: 800px) {
    padding: 1em 4em 2em 4em;
    align-items: center;
    justify-content: center;
  }
`;

const LoaderDiv = styled.div`
  height: 30vh;
  padding: 1em 1em 2em 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;

  @media (min-width: 800px) {
    padding: 1em 4em 2em 4em;
    align-items: center;
    justify-content: center;
  }
`;
