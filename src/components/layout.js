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
import Block from "./block"

const Layout = ({ location, crumbLabel, children }) => {
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
      <div className="Container Container--intern">
        <main className="Main">{children}</main>
      </div>
      <div
        style={{
          backgroundColor: "var(--color-blue-light)",
          padding: "60px",
          margin: "80px 0",
        }}
      >
        <div className="Container">
          <div style={{ display: "flex" }}>
            <Block
              icon="👤"
              description="¿Hoy te apetece realizar alguna actividad solo? ¡Encuentra la que necesitas!"
              link="/"
              linkText="Actividad individual"
            />
            <Block
              icon="👨‍👩‍👧‍👦"
              description="¿Necesitas entretener a la familia? ¡Encuentra la que necesitas!"
              link="/"
              linkText="Actividad en familia"
            />
            <Block
              icon="🎉️️️"
              description="¿Quieres hacer algo con gente que está lejos? ¡Encuentralo aquí!"
              link="/"
              linkText="Actividad en grupo"
            />
          </div>
        </div>
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
