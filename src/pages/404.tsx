/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"

import Layout from "../components/Layout"
import PageHeader from "../components/HeaderPage"
import Bio from "../components/Bio"

function NotFoundPage() {
  return (
    <Layout>
      <Styled.h1>Not Found</Styled.h1>
      <Styled.p>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Styled.p>
      <Bio />
    </Layout>
  )
}

export default NotFoundPage
