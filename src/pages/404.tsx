import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import HeaderPage from "../components/page-header"
import PostList from "../components/post-list"

interface Data {
  notFound: {
    title: string
    summary: string
    linkTo: string
    linkLabel: string
  }
}

export default function NotFoundPage(props: PageProps<Data>) {
  const { data } = props

  return (
    <Layout>
      <HeaderPage
        title={data.notFound.title}
        summary={data.notFound.summary}
        linkTo={data.notFound.linkTo}
        linkLabel={data.notFound.linkLabel}
      />
      <PostList />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    notFound: datoCmsNotFoundNext {
      title
      summary
      linkTo
      linkLabel
    }
  }
`
