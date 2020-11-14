import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.color};
  padding: 2px;
  /* min-width: 196px; */
  margin: 2px;
  flex: 1;
  cursor: text;
  & > * {
    cursor: text;
  }
`;

const Label = styled.label`
  font-size: 12px;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${props =>
    props.isRequired &&
    css`
      &:after {
        content: "*";
        color: red;
        font-size: 18px;
        line-height: 4px;
        margin-top: 4px;
      }
    `}
`;

const Field = styled.input`
  display: flex;
  border: none;
  border: 0;
  height: 32px;
  font-size: 16px;
  font-weight: 800;
  background: none;
  color: ${props => props.theme.color};
  &:focus {
    outline: none;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    background: none;
  }
`;

const TextArea = styled.textarea`
  display: flex;
  border: none;
  border: 0;
  min-height: 80px;
  height: ${props => props.nbOfLine * 20}px;
  font-size: 16px;
  font-weight: 800;
  background: none;
  color: ${props => props.theme.color};
  resize: none;
  line-height: 20px;
  transition: height ease 0.4s;
  &:focus {
    outline: none;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    background: none;
  }
`;

const Input = ({ name, isRequired, type, value, onChange }) => {
  const inputRef = useRef();
  return (
    <Container
      // onClick={() => inputRef && inputRef.current && inputRef.current.focus()}
    >
      <Label isRequired={isRequired} htmlFor={name}>
        {name}
      </Label>
      {type === "textarea" ? (
        <TextArea name={name} id={name} ref={inputRef} value={value} onChange={onChange} nbOfLine={(value.match(/\n/g) || []).length + 1}/>
      ) : (
        <Field
          ref={inputRef}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          id={name}
        />
      )}
    </Container>
  );
};

export default Input;
