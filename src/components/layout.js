/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";
import "./layout.css";
import Section from "./Section";
import Form from "./Form";
import Skill from "./Skill";
import Icon from "./Icon";
import linkedinIcon from "../lottie/linkedin.json";
import githubIcon from "../lottie/github.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0px;
  flex: 1;
`;

const Page = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
  transition: all ease 0.4s;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [openedSection, setOpenedSection] = useState("");

  return (
    <Page>
      <Header
        title={data.site.siteMetadata?.title || `Title`}
        minimized={!!openedSection}
        onClick={() => setOpenedSection(null)}
      />
      <Container>
        <Section
          title="Experience"
          id="xp"
          onChange={id => setOpenedSection(id)}
          isOpen={openedSection == "xp"}
        >
          <p>xp</p>
        </Section>
        <Section
          title="Contact"
          id="contact"
          onChange={id => setOpenedSection(id)}
          isOpen={openedSection == "contact"}
        >
          <Form />
        </Section>
        <Section
          title="Skills"
          id="skills"
          onChange={id => setOpenedSection(id)}
          isOpen={openedSection == "skills"}
        >
          <Skill title="React.js" score={5} />
          <Skill title="React Native" score={4} />
          <Skill title="Java" score={2} />
          <Skill title="PHP" score={2} />
          <Skill title="Javascript" score={5} />
          <Skill title="HTML" score={5} />
          <Skill title="CSS" score={5} />
          <Skill title="Photoshop" score={4} />
          <Skill title="Illustrator" score={5} />
          <Skill title="After Effect" score={4} />
          <Skill title="Premiere pro" score={4} />
        </Section>
        <Section
          title="Social"
          id="social"
          onChange={id => setOpenedSection(id)}
          isOpen={openedSection == "social"}
        >
          <Icon animationData={linkedinIcon} link={{href: 'https://www.linkedin.com/in/adrien-lemaire/', target: '_blank'}}/>
          <Icon animationData={githubIcon} link={{href: 'https://github.com/renadr', target:'_blank'}}/>

        </Section>
        {/* <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </Container>
      {children}
    </Page>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
