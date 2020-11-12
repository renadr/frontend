import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";
import { useKeyPressEvent } from "react-use";
import { textColor, backgroundColor } from "../pages/index";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: ${props => (props.minimized ? `84px` : `50vh`)};
  transition: height ease 0.4s;
  overflow: hidden;
`;

const Title = styled.span`
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0 2px;
  transition: transform ease 0.4s;
  color: ${textColor};
`;

const TitleContainer = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  transition: all ease 0.4s;
  transform: translateY(${(props) => (props.minimized && props.pos) ? '0' : `${props.pos}px`});
  margin: 0;
  padding: 20px 0;

  ${Title} {
    cursor: ${(props) => props.minimized ? 'pointer' : 'default'};
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:focus-visible {
    ${Title} {
      background: black;
      color: white;
    }
  }
`;

const Header = ({ title, minimized, onClick }) => {
  const [firstName, lastName] = title.split(" ");
  const ContainerRef = useRef();
  const titleRef = useRef();

  useKeyPressEvent("Enter", () => {
    if (titleRef && titleRef.current === document.activeElement) {
      onClick();
    }
  });

  return (
    <Container minimized={minimized} ref={ContainerRef}>
      <TitleContainer
        minimized={minimized}
        onClick={onClick}
        tabIndex="0"
        ref={titleRef}
        pos={(document?.documentElement?.clientHeight / 2) - (titleRef?.current?.getBoundingClientRect()?.height + 100)}
      >
        <Title>{firstName}</Title>
        <Title
          style={
            minimized
              ? { transform: `translateY(0)` }
              : { transform: `translateY(70px)` }
          }
        >
          {lastName}
        </Title>
      </TitleContainer>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

Header.defaultProps = {
  title: ``,
};

export default Header;
