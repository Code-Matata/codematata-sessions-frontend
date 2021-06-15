import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import EventsCard from "../EventsCard";
import Loader from "react-loader-spinner";

function RecordingsDiv() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    var config = {
      method: "get",
      url: "https://code-matata.herokuapp.com/api/v1/recording/all",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNjIzNzk0NTQxLCJleHAiOjE2MjQ2NTg1NDF9.24NdnfByumQqeBkehidl_9PMyd_yALg72iThGqH9GqjfQB5huf0SvGaQWFJrnpn3ItjNY8BkW0vy5q0l_-eOpQ",
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
    <>
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
    </>
  );
}

export default RecordingsDiv;

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
