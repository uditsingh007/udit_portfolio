import React from "react";
import styled from "styled-components";
import backgroundImg from "../assets/Images/blog-background.jpg";
import LogoComp from "../subComponents/LogoComp";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import { Blogs } from "../data/BlogData";
import BlogComp from "./BlogComp";
import Anchor from "../subComponents/AnchorComp";
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

const Blog = () => {
  return (
    <MainContainer
      variants={constants}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <LogoComp />
        <PowerButton />
        <SocialIcons />
        <Anchor />
        <Center>
          <Grid>
            {Blogs.map((blog) => (
              <BlogComp key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>
        <BigTitle text="BLOG" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

const Center = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  @media (max-width: 50em) {
    grid-template-columns: 100%;
  }
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const MainContainer = styled(motion.div)`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  width: 100vw;
  /* height: 100vh; */
`;

export default Blog;
