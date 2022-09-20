import React from "react";
import styled from "styled-components";
import Me from "../assets/Images/profile-img.png";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Udit</h3>
          <h6>I design and code simple yet beautiful websites.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="profile pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

const SubBox = styled.div`
  position: relative;
  width: 50%;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;
    @media (max-width: 50em) {
      width: 70%;
    }
    @media (max-width: 40em) {
      width: 80%;
    }
    @media (max-width: 30em) {
      width: 90%;
    }
    @media (max-width: 20em) {
      width: 80%;
    }
  }

  @media (max-width: 50em) {
    width: 100%;
    height: 50%;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  @media only screen and (max-width: 50em) {
    border-right-width: initial;
    border-left-width: initial;
    border-right-color: initial;
    border-left-color: initial;
    background: linear-gradient(
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    );
    background-position-x: 0px, 100%;
    background-position-y: 0px, 0px;
    border-style: solid none;
    border-image: initial;
    background-position: 0px 0px, 100% 0px;
    background-repeat: no-repeat;
    & > *:first-child {
      border-left: 2px solid ${(props) => props.theme.body};
      border-right: 2px solid ${(props) => props.theme.body};
    }
    & > *:nth-child(2) {
      border-left: 2px solid ${(props) => props.theme.text};
      border-right: 2px solid ${(props) => props.theme.text};
    }
  }
  @media (max-width: 50em) {
    width: 50vw;
    background-size: 100% 2px;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
`;

export default Intro;
