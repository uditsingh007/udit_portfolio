import { motion } from "framer-motion";
import React from "react";

import styled from "styled-components";
import { Facebook, Github, Linkedin, YouTube } from "../components/AllSvgs";
import { darkTheme } from "../components/Themes";

const SocialIcons = (props) => {
  return (
    <div>
      <Icons>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
        >
          <a
            style={{ color: "inherit" }}
            target="_blank"
            href="https://github.com/"
            rel="noreferrer"
          >
            <Github
              height={30}
              width={30}
              fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.2 }}
        >
          <a target="_blank" href="https://linkedin.com/" rel="noreferrer">
            <Linkedin
              height={30}
              width={30}
              fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
          <a target="_blank" href="https://facebook.com/" rel="noreferrer">
            <Facebook
              height={30}
              width={30}
              fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.6 }}
        >
          <a target="_blank" href="https://youtube.com/" rel="noreferrer">
            <YouTube
              height={25}
              width={25}
              fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
            />
          </a>
        </motion.div>
        <Line
          initial={{ height: 0 }}
          animate={{ height: "8rem" }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
          color={props.theme}
        />
      </Icons>
    </div>
  );
};

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;
  a {
    color: inherit;
  }
  *:not(:last-child) {
    margin: 0.5rem 0;
  }
  @media (max-width: 50em) {
    left: 1rem;
    transform: translateY(1rem);
    fill: ${darkTheme.text};
    & > * svg {
      fill: black;
    }
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  @media (max-width: 50em) {
    background-color: ${darkTheme.body};
  }
`;

export default SocialIcons;
