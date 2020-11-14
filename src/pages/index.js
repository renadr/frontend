import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const darkTheme = {
  color: "#ffffff",
  backgroundColor: "#0d0d13",
};

const lightTheme = {
  color: "#000000",
  backgroundColor: "#ffffff",
};

const ThemeButton = styled.button`
  height: 20px;
  width: 20px;
  position: fixed;
  right: 5px;
  top: 5px;
  background: ${props => props.theme.color};
  border: none;
  cursor: pointer;
  &:focus {
    border: none;
    outline: none;
  }
`;

const IndexPage = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setTheme('dark');
    else setTheme('light');
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
      <ThemeButton
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        title={`Switch to ${theme === "light" ? "dark" : "light"} theme.`}
      />
      <Layout>
        <SEO title="Home" />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
