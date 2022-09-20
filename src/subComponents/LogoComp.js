import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

const LogoComp = (props) => {
  return <Logo color={props.theme}>CB</Logo>;
};

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive !important;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

export default LogoComp;
