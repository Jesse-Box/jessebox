import React from "react"
import { Styled } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Avatar from "../components/avatar"

function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Avatar />
      <Styled.h1>
        Hey,
        <br /> I'm Jesse
      </Styled.h1>
      <Styled.p>
        Senior product designer currently at{" "}
        <Styled.a href="https://www.eyeem.com/">EyeEm</Styled.a>, formally at{" "}
        <Styled.a href="https://www.linkedin.com/company/hubrick/">
          Hubrick
        </Styled.a>{" "}
        and <Styled.a href="https://www.dailymotion.com/">Dailymotion</Styled.a>
        , currently living in Berlin, Germany.
      </Styled.p>
    </Layout>
  )
}

export default Home
