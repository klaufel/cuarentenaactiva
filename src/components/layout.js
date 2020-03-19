/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "./header"
import BreadCrumb from "./breadcrumb"
import Searcher from "./searcher"
import Sitemap from "./sitemap"
import Footer from "./footer"
import Block from "./block"
import "./layout.css"
import "./blockfooter.css"

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

  console.log(location)
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
          padding: "40px 0",
          margin: "60px 0",
        }}
      >
        <div className="Container">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
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
      {(!location || location === "/" || location === "") && (
        <div className="BlocksFooter">
          <div className="Container Container--intern">
            <div className="BlockFooter-item">
              <h4 className="BlockFooter-title">¿Te gustaría ayudar?</h4>
              <p className="BlockFooter-description">
                Aquí podrás encontrar un repositorio de fundaciones y organismos
                que necesitan de nuestra ayuda en estos momentos.
              </p>
              <Link className="Button Button--secondary" to="/voluntariado">
                Ver voluntariado
              </Link>
            </div>
            <div className="BlockFooter-item">
              <h4 className="BlockFooter-title">Otro tipo de actividades</h4>
              <p className="BlockFooter-description">
                Aquí encontrarás varios recursos como herramientas para generar
                contenido streaming, tips para vencer la ansiedad o agenda con
                eventos online.
              </p>
              <Link className="Button Button--secondary" to="/">
                Ver otras actividades
              </Link>
            </div>
          </div>
        </div>
      )}
      <Sitemap />
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
