/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/core";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Horizon from "./Horizon";
import Main from "./Main";

function Layout(props) {
  const { horizonContent, pageTitle, mainContent } = props;

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
      <Global
        styles={css`
          @font-face {
            font-family: "Unica77LLWeb-Regular";
            src: url("fonts/Unica77LLWeb-Regular.woff2") format("woff2"),
              url("fonts/Unica77LLWeb-Regular.woff") format("woff");
          }

          @font-face {
            font-family: "Unica77LLWeb-Bold";
            src: url("fonts/Unica77LLWeb-Bold.woff2") format("woff2"),
              url("fonts/Unica77LLWeb-Bold.woff") format("woff");
          }
        `}
      />
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <Horizon horizonContent={horizonContent} />
      <Main pageTitle={pageTitle} mainContent={mainContent} />
      <Footer />
    </>
  );
}

export default Layout;
