import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./article.css"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout location={frontmatter.path} crumbLabel={frontmatter.title} fluid>
      <SEO title={frontmatter.title} />

      <article className="Article">
        <header className="Article-header">
          <h1>{frontmatter.title}</h1>
        </header>
        <div
          className="Article-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <Link to="/" style={{ fontSize: "14px" }}>
        Volver a la página de inicio
      </Link>
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
