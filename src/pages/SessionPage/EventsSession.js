import React, { useState, useEffect } from "react";
// import { API_BASE_URL, ACCESS_TOKEN } from "../../constants";
import styled from "styled-components";
import axios from "axios";
import { colors } from "../../resources/ThemeColors";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import Eventt from "./Eventt";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function EventsSession() {
  let query = useQuery();
  var id = query.get("id");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const token = process.env.REACT_APP_ACCESS_TOKEN;
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    var config = {
      method: "get",
      url: `https://code-matata.herokuapp.com/api/v1/event/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [id, token]);
  return (
    <>
      {isLoading ? (
        <LoaderDiv>
          <Loader type="ThreeDots" color="#262a52" height={70} width={70} />
        </LoaderDiv>
      ) : (
        <>
          {isError ? (
            <LoaderDiv>
              Something went wrong! If this issue persists, please email us at
              codematata@gmail.com
            </LoaderDiv>
          ) : (
            <>
              {data.length !== 0 ? (
                <MainDiv>
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>{data.title}</title>
                    <meta
                      name="description"
                      content={`${data.description} by ${data.instructor.name}`}
                    />
                  </Helmet>
                  <ImageDiv>
                    <img
                      src={data.imageUrl.url}
                      alt={data.description}
                      loading="lazy"
                    ></img>
                    <DateDiv>
                      <EventDate>
                        {data.date.eventMonth} {data.date.date}
                      </EventDate>
                    </DateDiv>
                  </ImageDiv>
                  <SessionDescriptionDiv>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <h4>{data.instructor.name}</h4>
                    <ButtonsDiv>
                      {/* <LinkInput>{data.meetUrl}</LinkInput> */}
                      <Eventt eventId={data.eventId} />
                    </ButtonsDiv>
                  </SessionDescriptionDiv>
                </MainDiv>
              ) : (
                <LoaderDiv>No data</LoaderDiv>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default withRouter(EventsSession);

const MainDiv = styled.div`
  height: auto;
  padding: 6em 1.5em 2em 1.5em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.gray};
  @media (min-width: 600px) {
    padding-top: 8em;
  }
  @media (min-width: 800px) {
    padding-top: 8em;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const ImageDiv = styled.div`
  background-color: ${colors.white};
  height: auto;
  width: 100%;
  border-radius: 7px;
  position: relative;
  > img {
    flex-shrink: 0;
    object-fit: contain;
    height: 100%;
    width: 100%;
    border-radius: 7px;
  }

  @media (min-width: 480px) {
    width: 90%;
    height: 30vh;
  }
  @media (min-width: 600px) {
    height: 35vh;
  }
  @media (min-width: 800px) {
    height: 45vh;
    width: 40%;
  }

  @media (min-width: 1000px) {
    height: 70vh;
    width: 50%;
  }
`;

const DateDiv = styled.div`
  width: auto;
  position: absolute;
  top: 3px;
  left: 3px;
  height: auto;
  background-color: ${colors.mainColor};
  border-radius: 7px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 0.1em;
  @media (min-width: 480px) {
    width: auto;
    top: 4px;
    left: 4px;
  }
`;
const EventDate = styled.p`
  line-height: 1.8;
  font-size: 0.8em;
  font-weight: 750;
  padding: 0.2em;
  color: ${colors.white};
  text-align: center;
  @media (min-width: 480px) {
    font-height: 0.7em;
    line-height: 1.5;
    font-size: 0.9em;
  }

  @media (min-width: 800px) {
    font-size: 1.2em;
  }
`;

const SessionDescriptionDiv = styled.div`
  height: auto;
  width: 100%;
  margin-top: 2em;

  > h2 {
    font-size: 1.2em;
    text-align: left;
    font-weight: bold;
    color: ${colors.darkMainColor};
    @media (min-width: 800px) {
      font-size: 1.5em;
    }
  }

  > p {
    font-size: 0.9em;
    text-align: left;
    margin-top: 0.7em;
    colors: ${colors.mainColor};
    @media (min-width: 800px) {
      font-size: 1.1em;
    }
  }

  > h4 {
    font-size: 1em;
    font-weight: 600;
    margin-top: 1em;
    left: 10;
    position: absolute;
    padding-right: 3.5em;
    @media (min-width: 800px) {
      padding-right: 6em;
      font-size: 1.1em;
    }
  }

  @media (min-width: 480px) {
    width: 90%;
  }
  @media (min-width: 800px) {
    width: 80%;
    width: 70%;
    margin-left: 2em;
    margin-top: 0;
  }
`;

const ButtonsDiv = styled.div`
  height: auto;
  width: 100%;
  margin-top: 4em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    margin-top: 6em;
  }
`;

// const LinkInput = styled.div`
//   margin-top: 1em;
//   width: auto;
//   height: auto;
//   background-color: ${colors.white};
//   color: ${colors.mainColor};
//   padding: 0.2em;
//   display: flex;
//   flex-flow: column nowrap;
//   align-items: center;
//   justify-content: flex-start;
//   border-radius: 4px;
// `;

// const ClipBoardButton = styled.button`
//   margin-top: 0.4em;
//   width: auto;
//   height: 2em;
//   background-color: ${colors.mainColor};
//   color: ${colors.white};
//   padding-left: 0.5em;
//   padding-right: 0.5em;
//   border-radius: 4px;

//   :focus {
//     outline: none;
//   }
// `;

const LoaderDiv = styled.div`
  height: 70vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2em;
`;
