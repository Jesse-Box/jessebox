import React from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

function SecondPage() {
  return (
    <Layout>
      <SEO title="Page two" />
      <Styled.h1>Hi from the second page</Styled.h1>
      <Styled.p>Welcome to page 2</Styled.p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}

export default SecondPage;
