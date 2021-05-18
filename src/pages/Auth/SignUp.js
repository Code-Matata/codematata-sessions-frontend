import React from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";
import CodeImage from "../../resources/happy-people.jpg";

function SignUp() {
  return (
    <MainDiv>
      <AuthButtonsDiv>
        <Button>Sign Up with Google</Button>
      </AuthButtonsDiv>
    </MainDiv>
  );
}

export default SignUp;

const MainDiv = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray};
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(38, 42, 85)),
    url(${CodeImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 800px) {
    height: 90vh;
  }
`;

const AuthButtonsDiv = styled.div`
  height: auto;
  width: 70%;
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
  width: 75%;
  background-color: ${colors.mainColor};
  border-radius: 7px;
  :hover {
    background-color: ${colors.darkMainColor};
  }
  :focus {
    outline: none;
  }
`;
