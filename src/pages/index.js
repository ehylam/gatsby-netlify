import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"




const IndexPage = () => {

  return (
    <Layout>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query IndexPageTemplate {
    markdownRemark {
      frontmatter {
        featuredImage
        heading
        title
      }
    }
  }
`