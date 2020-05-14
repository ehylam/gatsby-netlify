import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero'
import Content from "../components/contents"




const IndexPage = ({data}) => {
  const {markdownRemark}  = data;
  const {frontmatter, html } = markdownRemark;
  console.log(markdownRemark);
  console.log(frontmatter);
  console.log(html);
  return (
    <Layout>
      <img src={frontmatter.featuredImage}></img>
      <h1>{frontmatter.heading}</h1>
      <Hero data={frontmatter}/>
      <Content data={frontmatter.contentModule}/>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query IndexPageTemplate {
    markdownRemark {
      frontmatter {
        heading
        title
        subheading
        date
        contentModule {
          heading
          image
          description
        }
      }
      html
    }
  }
`