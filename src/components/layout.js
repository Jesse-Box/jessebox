/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "./navigation";
import Footer from "./footer";
import { Container } from "theme-ui";
import Horizon from "./horizon";
import { Styled } from "theme-ui";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <main>
        <Horizon>
          <Styled.h1>Hey.</Styled.h1>
          <Styled.h5>
            My name is Jesse and since August 2018 I've been working for EyeEm
            product designer. This website is a work in progress so be sure to
            come back soon.
          </Styled.h5>
        </Horizon>
        <Container px={[3, 2, 2]} py={4} sx={{ maxWidth: 0 }}>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
