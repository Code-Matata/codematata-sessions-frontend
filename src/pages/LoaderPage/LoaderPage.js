import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const timeoutSeconds = 3000; //3 secs

class LoaderPage extends Component {
  state = { redirect: false };

  componentDidMount() {
    this.id = setTimeout(
      () => this.setState({ redirect: true }),
      timeoutSeconds
    );
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }
  render() {
    return this.state.redirect ? (
      <Redirect to="/dash" />
    ) : (
      <MainDiv>
        <Loader
          type="ThreeDots"
          color="#262a52"
          height={100}
          width={100}
          timeout={timeoutSeconds}
        />
      </MainDiv>
    );
  }
}

export default LoaderPage;

const MainDiv = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;
