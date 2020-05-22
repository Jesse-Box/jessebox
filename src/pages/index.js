import React from "react";
import { graphql } from "gatsby";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";

function Home({ data }) {
  return (
    <Layout
      horizonContent={
        <>
          <Styled.h1>{data.markdownRemark.frontmatter.title}</Styled.h1>
          <Styled.h5>{data.markdownRemark.excerpt}</Styled.h5>
        </>
      }
      pageTitle="Home"
    ></Layout>
  );
}

export const query = graphql`
  query HomePageQuery {
    markdownRemark {
      frontmatter {
        title
      }
      excerpt(pruneLength: 500)
    }
  }
`;

export default Home;
