import React from "react";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";
import { darkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: "0.8",
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data;
  return (
    <Box key={id} variants={item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, i) => {
          return <Tag key={i}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <a target="_blank" href={demo}>
          Visit
        </a>
        <a target="_blank" href="https://github.com/" rel="noreferrer">
          <Github height={25} width={25} />
        </a>
      </Footer>
    </Box>
  );
};

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  margin-right: 8rem;
  list-style: none;
  border-radius: 0 50px 0 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};

  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
  @media (max-width: 50em) {
    width: 16rem;
    margin-right: 6rem;
    height: 35vh;
  }

  @media (max-width: 40em) {
    width: 14rem;
    margin-right: 4rem;
    height: 35vh;
  }

  @media (max-width: 25em) {
    width: 12rem;
    margin-right: 4rem;
    height: 35vh;
    padding: 1.5rem;
  }
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  a:first-child {
    background-color: ${(props) => props.theme.body};
    color: inherit;
    text-decoration: none;
    color: ${(props) => props.theme.text};
    padding: 0.5rem calc(2rem + 2vw);
    border-radius: 0 0 0 50px;
    font-size: calc(1em + 0.5vw);
    ${Box}:hover & {
      background-color: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
    }
  }
  a:last-child {
    color: inherit;
    text-decoration: none;
    ${Box}:hover & {
      & > * {
        fill: ${(props) => props.theme.text};
      }
    }
  }
`;

export default Card;
