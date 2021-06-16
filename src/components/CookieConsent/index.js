import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";
import renderIf from "render-if";

class Index extends Component {
  state = {
    cookieAccept: false,
  };

  componentDidMount() {
    const CookieConsentValue = localStorage.getItem("cookieAccept");
    if (CookieConsentValue === true) {
      this.setState({ cookieAccept: CookieConsentValue });
    } else {
      this.setState({ cookieAccept: CookieConsentValue });
    }
  }

  saveCookieOption = (e) => {
    e.preventDefault();
    localStorage.setItem("cookieAccept", true);
    this.setState({ cookieAccept: true });
  };
  render() {
    return (
      <>
        {renderIf(
          this.state.cookieAccept === false || this.state.cookieAccept === null
        )(
          <MainDiv>
            <p>This website uses cookies to enhance your experience.</p>
            <button onClick={this.saveCookieOption}>
              Accept &amp; continue
            </button>
          </MainDiv>
        )}
        {renderIf(this.state.cookieAccept === true)(<></>)}
      </>
    );
  }
}

export default Index;

const MainDiv = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  background-color: ${colors.mainColor};
  color: ${colors.white};
  height: 15vh;
  width: 85%;
  padding: 1em;
  display: ${(props) => props.divDisplay || "flex"};
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin: 0 2em 1em 2em;
  border-radius: 8px;

  > p {
    font-size: 0.9em;
  }

  > button {
    background-color: ${colors.white};
    color: ${colors.darkMainColor};
    border: 1px solid gray;
    padding: 0.5em 1em 0.5em 1em;
    font-size: 0.8em;
    margin-top: 0.6em;
    border-radius: 8px;
    font-weight: 800;
  }

  @media (min-width: 600px) {
    height: 15vh;
    width: 95%;
    margin: 0 2em 1em 2em;
    border-radius: 8px;
    padding: 1.5em;
  }
`;
