import React from "react";
import { Styled } from "theme-ui";
import Layout from "../components/layout2";

function SecondPage() {
  return (
    <Layout
      horizonContent={
        <>
          <Styled.h1>Second Page</Styled.h1>
          <Styled.h5>Welcome to page 2</Styled.h5>
        </>
      }
      pageTitle="Page Two"
    ></Layout>
  );
}

export default SecondPage;
