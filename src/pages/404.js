import React from "react";
import { graphql } from "gatsby";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";

function NotFoundPage({ data }) {
  console.log(data);
  return (
    <Layout
      horizonContent={
        <>
          <Styled.h1>{data.markdownRemark.frontmatter.title}</Styled.h1>
          <Styled.h5>{data.markdownRemark.excerpt}</Styled.h5>
        </>
      }
      pageTitle="404: Not found"
    ></Layout>
  );
}

export const query = graphql`
  query PageNotFoundPageQuery {
    markdownRemark(frontmatter: { title: { eq: "404" } }) {
      frontmatter {
        title
      }
      excerpt
    }
  }
`;

export default NotFoundPage;
