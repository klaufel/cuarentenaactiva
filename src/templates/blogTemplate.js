import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout location={frontmatter.path} crumbLabel={frontmatter.title} fluid>
      <SEO title={frontmatter.title} />
      <div className="Container Container--intern">
        <h1>{frontmatter.title}</h1>
        {/*<h2>{frontmatter.date}</h2>*/}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <br />
        <br />
        <br />
        <Link to="/">Volver a la página de inicio</Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`
