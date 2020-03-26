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
        Hey,{" "}
        <span role="img" aria-label="Waving Hand">
          👋
        </span>{" "}
        <br /> I'm Jesse
      </Styled.h1>
      <Styled.p>
        Senior product designer currently at{" "}
        <Styled.a href="https://www.eyeem.com/">EyeEm</Styled.a>, formally at{" "}
        <Styled.a href="https://www.linkedin.com/company/hubrick/">
          Hubrick
        </Styled.a>{" "}
        and <Styled.a href="https://www.dailymotion.com/">Dailymotion</Styled.a>
        . Currently residing in Berlin, Germany{" "}
        <span role="img" aria-label="German Flag">
          🇩🇪
        </span>
        .
      </Styled.p>
      <Styled.p>
        You can find me on{" "}
        <Styled.a href="https://twitter.com/JesseThomasBox">Twitter</Styled.a>,{" "}
        <Styled.a href="https://www.linkedin.com/in/jesse-box-835346b7/">
          LinkedIn
        </Styled.a>{" "}
        or just email me at{" "}
        <Styled.a href="mailto:me@jessebox.net">me@jessebox.net</Styled.a>.
      </Styled.p>
    </Layout>
  )
}

export default Home
