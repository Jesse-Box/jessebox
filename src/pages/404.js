import React from "react";
import { Styled } from "theme-ui";
import Layout from "../components/layout";

function NotFoundPage() {
  return (
    <Layout
      horizonContent={
        <>
          <Styled.h1>404</Styled.h1>
          <Styled.h5>Page not found</Styled.h5>
        </>
      }
      pageTitle="404: Not found"
    ></Layout>
  );
}

export default NotFoundPage;
