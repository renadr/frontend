import React from "react";
import styled, { css } from "styled-components";
import { textColor, backgroundColor } from "../pages/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 4px;
  width: 120px;
`;

const Title = styled.h3`
  font-size: 16px;
  color: ${textColor};
  margin-bottom: 4px;
  font-weight: 600;
`;

const Score = styled.div`
  display: flex;
  flex-direction: row;
  margin: -2px -2px;
`;

const Square = styled.div`
  display: flex;
  height: 10px;
  width: 10px;
  border: 1px solid ${textColor};
  background-color: ${props => (props.filled ? textColor : "none")};
  margin: 2px;
`;

const Skill = ({ title, score }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Score>
        <Square filled={score >= 1} />
        <Square filled={score >= 2} />
        <Square filled={score >= 3} />
        <Square filled={score >= 4} />
        <Square filled={score >= 5} />
      </Score>
    </Container>
  );
};

export default Skill;
