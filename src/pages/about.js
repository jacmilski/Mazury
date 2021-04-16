import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>10 rzeczy, których prawdopodobnie nie wiesz o Mazurach</p>
  </Layout>
)
export const query = graphql`
query{
  site{
    siteMetadata{
      title
    }
  }
}`