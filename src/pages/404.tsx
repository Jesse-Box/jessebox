/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Layout from "../components/Layout"
import PageHeader from "../components/HeaderPage"

function NotFoundPage() {
  return (
    <Layout>
      <PageHeader>
        <Styled.h1>Not Found</Styled.h1>
        <Styled.p>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Styled.p>
      </PageHeader>
    </Layout>
  )
}

export default NotFoundPage
