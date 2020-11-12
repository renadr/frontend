import React, { useState, useEffect } from "react";
import theme from "styled-theming";
import styled, { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const backgroundColor = theme("mode", {
  light: "#fff",
  dark: "#0d0d13",
});

export const textColor = theme("mode", {
  light: "#000",
  dark: "#fff",
});

const ThemeButton = styled.button`
  height: 20px;
  width: 20px;
  position: fixed;
  right: 5px;
  top: 5px;
  background: ${textColor};
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
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
    else setTheme('light');
  }, []);

  return (
  <ThemeProvider theme={{ mode: theme }}>
    <ThemeButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme.`}/>
    <Layout>
      <SEO title="Home" />
    </Layout>
  </ThemeProvider>
)};

export default IndexPage;
