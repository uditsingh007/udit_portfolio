import React, { useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import styled from "styled-components";
import LogoComp from "../subComponents/LogoComp";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const constants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.8,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyangRef = useRef(null);
  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinyangRef.current.style.transform =
        `rotate(` + -window.pageYOffset + "deg)";
    };

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComp theme="dark" />
        <PowerButton />
        <SocialIcons theme="dark" />
        <Main variants={constants} initial="hidden" animate="show" ref={ref}>
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyangRef}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>
        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

const Rotate = styled.span`
  /* display: block; */
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
  @media (max-width: 50em) {
    left: calc(8rem + 15vw);
  }
  @media (max-width: 40em) {
    left: calc(2rem + 15vw);
    top: 30%;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  /* width: 100vw; */
  height: 400vh;
  position: relative;
  overflow: hidden;
`;

export default WorkPage;
