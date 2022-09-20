import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn height={30} width={30} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

const Power = styled.button`
  position: fixed;
  top: 3rem;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  & > *:hover {
    text-decoration: none;
    color: inherit;
  }
  a:visited {
    color: inherit;
  }
`;

export default PowerButton;
