import React from "react";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout
      horizonContent={
        <>
          <Styled.h1>Hey.</Styled.h1>
          <Styled.h5>
            My name is Jesse and since August 2018 I've been working for EyeEm
            as a product designer. This website is a work in progress so be sure
            to come back soon.
          </Styled.h5>
        </>
      }
      pageTitle="Home"
    ></Layout>
  );
}

export default Home;
