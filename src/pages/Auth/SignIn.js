import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";
import CodeImage from "../../resources/happy-people.jpg";
import GoogleIcon from "../../resources/icons/google.png";
import GitHubIcon from "../../resources/icons/github.png";
import { GOOGLE_AUTH_URL, GITHUB_AUTH_URL } from "../../constants";
import { Redirect } from "react-router-dom";
import Alert from "react-s-alert";
// import Logo from "../../resources/codematata.svg";

class SignIn extends Component {
  componentDidMount() {
    if (this.props.location.state && this.props.location.state.error) {
      setTimeout(() => {
        Alert.error(this.props.location.state.error, { timeout: 5000 });
        this.props.history.replace({
          pathname: this.props.location.pathname,
          state: {},
        });
      }, 100);
    }
  }
  render() {
    if (this.props.authenticated) {
      return <Redirect to={{ pathname: "/", from: this.props.location }} />;
    }
    return (
      <MainDiv>
        {/* <a href="/dash">
          <LogoObject
            data={Logo}
            aria-label="codematata learn to code"
          ></LogoObject>
        </a> */}
        <AuthButtonsDiv>
          <Button as="a" href={GOOGLE_AUTH_URL}>
            <img src={GoogleIcon} alt="google auth icon for codematata"></img>
            <p>Sign In with Google</p>
          </Button>
          <Button style={{ marginTop: "2em" }} as="a" href={GITHUB_AUTH_URL}>
            {" "}
            <img src={GitHubIcon} alt="github auth icon for codematata"></img>
            <p>Sign In with GitHub</p>
          </Button>
          {/* <a
            href="/dash"
            style={{
              color: `${colors.darkMainColor}`,
              bottom: "0",
              marginTop: "3em",
              marginBottom: "1em",
              borderBottom: "1px solid black",
              fontSize: ".8em",
            }}
          >
            Home
          </a> */}
        </AuthButtonsDiv>
        {/* <a href="https://www.freepik.com/vectors/people">
        People vector created by pikisuperstar - www.freepik.com
      </a> */}
      </MainDiv>
    );
  }
}

export default SignIn;

const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray};
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(38, 42, 85)),
    url(${CodeImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5em 0em 5em 0em;

  @media (min-width: 700px) {
    height: 90vh;
  }
`;

// const LogoObject = styled.object`
//   width: 100px;
//   height: 100px;

//   @media (min-width: 550px) {
//     width: 150px;
//     height: 150px;
//   }

//   @media (min-width: 800px) {
//     width: 200px;
//     height: 200px;
//   }
// `;

const AuthButtonsDiv = styled.div`
  height: auto;
  width: 80%;
  background-color: ${colors.white};
  border-radius: 7px;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  padding: 3em 0 3em 0;

  @media (min-width: 600px) {
    width: 60%;
  }

  @media (min-width: 600px) {
    width: 40%;
  }
`;

const Button = styled.button`
  height: 3em;
  width: 80%;
  background-color: ${colors.mainColor};
  border-radius: 7px;
  padding: 0em 1em 0em 1em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 3px solid ${colors.mainColor};

  :hover {
    background-color: ${colors.darkMainColor};
    border: 3px solid ${colors.darkMainColor};
  }

  :focus {
    outline: none;
  }

  > img {
    height: 1.5em;
    width: 1.5em;
  }

  > p {
    color: white;
  }
`;
