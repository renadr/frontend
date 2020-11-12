import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";
import { useKeyPressEvent } from "react-use";
import { textColor, backgroundColor } from "../pages/index";

const Container = styled.section`
  display: flex;
  margin: 0 0 2px;
  flex-direction: column;
  height: ${props => (props.isOpen ? `calc(100vh - 84px - 24px * 4)` : `24px`)};
  overflow: hidden;
  transition: all ease 0.4s;
  color: ${textColor};
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 0 2px;
  padding: 2px;
  text-align: center;

  &:focus, &:focus-visible {
    outline: none;
  }

  &:focus-visible {
    background: black;
    color: white;
  }
`;

const Content = styled.div`
  display: flex;
  max-width: 900px;
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: all ease 0.2s;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Section = ({ title, children, isOpen, onChange, id }) => {
  const titleRef = useRef();

  const onClick = () => {
    onChange(isOpen ? null : id)
  }

  useKeyPressEvent('Enter', () => {
    if(titleRef && titleRef.current === document.activeElement) {
      onClick();
    }
  });

  return (
    <Container isOpen={isOpen}>
      <Title onClick={onClick} tabIndex="0" ref={titleRef}>
        {title}
      </Title>
      <Content isOpen={isOpen}>{children}</Content>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
};

Section.defaultProps = {
  title: ``,
};

export default Section;
