import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

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

const BlogComp = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Container variants={item}>
      <Box target="_blank" href={link}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, i) => {
            return <Tag key={i}>#{t}</Tag>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

const Container = styled(motion.div)``;

const HashTags = styled.div`
  padding: 0.5rem 0px;
`;

const Tag = styled.span`
  padding-right: 0.5rem;
  @media (max-width: 25em) {
    font-size: calc(0.5em + 1vw);
  }
`;

const Date = styled.div`
  padding: 0.5rem 0;
  @media (max-width: 25em) {
    font-size: calc(0.5em + 1vw);
  }
`;

const Box = styled(motion.a)`
  backdrop-filter: blur(2px);
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 1rem 0px;
  text-decoration: none;
  width: calc(10rem + 15vw);
  height: 20rem;
  border: 2px solid rgb(0, 0, 0);
  padding: 1rem;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  z-index: 5;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  @media (max-width: 50em) {
    width: calc(60vw);
  }
  @media (max-width: 30em) {
    height: 18rem;
  }
  @media (max-width: 25em) {
    height: 14rem;
    padding: 0.8rem;
    backdrop-filter: none;
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
  @media (max-width: 40em) {
    font-size: calc(0.8em + 1vw);
  }
  @media (max-width: 25em) {
    font-size: calc(0.6em + 1vw);
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
  @media (max-width: 25em) {
    height: 70%;
  }
`;

export default BlogComp;
