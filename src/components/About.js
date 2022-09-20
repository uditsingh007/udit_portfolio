import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import styled from "styled-components";
import LogoComp from "../subComponents/LogoComp";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import astronaut from "../assets/Images/spaceman.png";
import { keyframes } from "styled-components";
import BigTitle from "../subComponents/BigTitle";

const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComp theme="dark" />
        <PowerButton />
        <SocialIcons theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="astronaur" />
        </Spaceman>
        <Main>
          I'm a front-end developer located in India. I love to create simple
          yet beautiful websites with great user experience.
          <br />
          <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects. I'm an independent freelancer and blogger. I
          love to write blogs and read books.
          <br />
          <br />I believe everything is an Art when you put your consciousness
          in it. You can connect with me via social links.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(0.6rem + 1vw);

  position: absolute;
  top: 10rem;
  left: calc(5rem + 5vw);

  font-family: "Ubuntu Mono";
  font-style: italic;
  @media (max-width: 40em) {
    width: 60vw;
    height: 50vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 30em) {
    width: 50vw;
    height: auto;
    backdrop-filter: none;
    margin-top: 2rem;
  }
`;

const float = keyframes`
0% {transform:translateY(-10px)}
50% {transform:translateY(15px) translateX(15px)}
100% {transform:translateY(-10px)}
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export default About;
