/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import BreadCrumb from "./breadcrumb"
import Searcher from "./searcher"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ location, crumbLabel, fluid, children }) => {
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
      <div className="Container">
        <div className="Page-bottomBar">
          <BreadCrumb location={location} label={crumbLabel} />
          <Searcher />
        </div>
      </div>
      <div className={!fluid && "Container"}>
        <main className="Main">{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string,
  crumbLabel: PropTypes.string,
  fluid: PropTypes.bool,
}

export default Layout
