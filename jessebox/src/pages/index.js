import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Heading } from "theme-ui"
import { Text } from "theme-ui"
import { Link } from "theme-ui"

function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Image />
      <Heading as="h1">Hey, I'm Jesse</Heading>
      <Text variant="body">
        Senior product designer currently at EyeEm, formally at Hubrick and
        Dailymotion. Currently residing in Berlin, Germany.
      </Text>
      <Text variant="body">
        You can find me on{" "}
        <Link variant="inline" href="https://twitter.com/JesseThomasBox">
          Twitter
        </Link>
        ,{" "}
        <Link
          variant="inline"
          href="https://www.linkedin.com/in/jesse-box-835346b7/"
        >
          LinkedIn
        </Link>{" "}
        or just email me at{" "}
        <Link variant="inline" href="mailto:me@jessebox.net">
          me@jessebox.net
        </Link>
        .
      </Text>
    </Layout>
  )
}

export default Home
