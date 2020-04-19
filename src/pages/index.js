import React from "react";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Styled.h1>Hey.</Styled.h1>
      <Styled.p>
        My name is Jesse and since August 2018 I've been working for{" "}
        <Styled.a href="https://www.eyeem.com/">EyeEm</Styled.a> as a product
        designer. This website is a work in progress so be sure to come back
        soon.
      </Styled.p>
    </Layout>
  );
}

export default Home;
