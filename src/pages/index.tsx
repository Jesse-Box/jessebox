import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import HeaderPage from "../components/page-header"
import PostList from "../components/post-list"

interface Data {
  home: {
    title: string
    summary: string
    linkTo: string
    linkLabel: string
  }
}

export default function BlogIndex(props: PageProps<Data>) {
  const { data } = props

  return (
    <Layout>
      <HeaderPage
        title={data.home.title}
        summary={data.home.summary}
        linkTo={data.home.linkTo}
        linkLabel={data.home.linkLabel}
      />
      <PostList />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    home: datoCmsHomeNext {
      title
      summary
      linkTo
      linkLabel
    }
  }
`
