import React from "react";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Styled.h1>404</Styled.h1>
      <Styled.p>Page not found</Styled.p>
    </Layout>
  );
}

export default NotFoundPage;
