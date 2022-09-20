import React, { useRef, useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import music from "../assets/audio/u-said-it-v13-1167.mp3";

const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(!click);
    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
    console.log(click);
  };
  return (
    <Box onClick={() => clickHandler()}>
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio ref={ref}>
        <source src={music} type="audio/mp3" />
      </audio>
    </Box>
  );
};

const play = keyframes`
0% {transform:scaleY(1)}
50% {transform:scaleY(2)}
100% {transform:scaleY(1)}
`;

const Line = styled.span`
  background-color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.body};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  width: 2px;
  height: 1rem;
  margin: 0 0.1rem;
  @media (max-width: 40em) {
    height: 0.6rem;
    opacity: 0.6;
  }
`;

const Box = styled.div`
  position: fixed;
  left: 8rem;
  top: 3rem;

  cursor: pointer;
  display: flex;

  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.6s;
  }
  @media (max-width: 40em) {
    left: 1rem;
    top: 10rem;
  }
`;

export default SoundBar;
