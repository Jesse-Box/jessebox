import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "@emotion/styled"

const Avatar = styled.img`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

export default () => (
  <Layout>
    <SEO title="Home" />
    <Image />
    <h1>Hey 👋, I'm Jesse</h1>
    <p>
      Senior product designer currently at EyeEm, formally at Hubrick and
      Dailymotion. Currently residing in Berlin, Germany.
    </p>
    <p>
      You can find me on <a href="#">Twitter</a>, <a href="#">LinkedIn</a> or
      just email me at <a href="#">me@jessebox.net</a>.
    </p>
  </Layout>
)
