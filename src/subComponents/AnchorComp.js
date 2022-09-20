import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, Anchor } from "../components/AllSvgs";

const AnchorComp = () => {
  const ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container>
      <Slider ref={ref}>
        {[...Array(25)].map((x, id) => {
          return (
            <Link
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="link"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  @media (max-width: 40em) {
    display: none;
  }
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translateY(-90%);
  .link {
    transform: rotate(-45deg);
  }
`;

export default AnchorComp;
