import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 4px;
  width: 120px;
`;

const Title = styled.h3`
  font-size: 16px;
  color: ${props => props.theme.color};
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
  border: 1px solid ${props => props.theme.color};
  background-color: ${props => (props.filled ? props.theme.color : "none")};
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
