import React, { useState } from "react";
import Lottie from "react-lottie";
import styled from "styled-components";

const Container = styled.a`
  cursor: pointer;
  margin: 8px;
  & * {
    fill: ${props => props.theme.color};
  }
`;

const Icon = ({ animationData, link }) => {
  const [isRunning, setIsRunning] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container
      onMouseOver={() => setIsRunning(true)}
      onMouseLeave={() => setIsRunning(false)}
      href={link?.href}
      target={link?.target}
      rel="noopener"
    >
      <Lottie
        options={defaultOptions}
        height={40}
        width={40}
        isStopped={!isRunning}
      />
    </Container>
  );
};

export default Icon;
