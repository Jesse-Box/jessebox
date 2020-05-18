/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Horizon from "./Horizon";
import Main from "./main2";

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
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <Horizon horizonContent={horizonContent} />
      <Main pageTitle={pageTitle} mainContent={mainContent} />
      <Footer />
    </>
  );
}

export default Layout;
