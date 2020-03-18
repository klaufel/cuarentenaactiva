/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Categories from "./categories"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Categories />
      <div className="Container">
        <main className="Main">{children}</main>
        <footer className="Footer">
          <div className="Footer-item">
            <span>
              Con ❤️ desde 🏠 <small>#QuedateEnCasa</small>
            </span>
          </div>
          <div className="Footer-item">
            <Link to="/autores">Autores</Link>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
