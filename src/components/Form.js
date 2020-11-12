import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { textColor, backgroundColor } from "../pages/index";
import Input from "./Input";

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonForm = styled.button`
  background: none;
  border: 1px solid ${textColor};
  padding: 8px;
  overflow: hidden;
  width: 100%;
  color: ${textColor};
  text-transform: uppercase;
  cursor: pointer;
  margin: 2px;
`;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container>
      <Row>
        <Input
          name="Your name"
          value={name}
          type="text"
          isRequired
          onChange={e => setName(e.target.value)}
        />
        <Input
          name="Your e-mail"
          value={email}
          type="email"
          isRequired
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          name="Your number"
          value={number}
          type={number}
          onChange={e => setNumber(e.target.value)}
        />
      </Row>
      <Row>
        <Input
          name="Your message"
          value={message}
          isRequired
          type="textarea"
          onChange={e => setMessage(e.target.value)}
        />
      </Row>
      <Row>
        <ButtonForm>Submit</ButtonForm>
      </Row>
    </Container>
  );
};

export default Form;
