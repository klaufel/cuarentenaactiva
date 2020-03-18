import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Quédate en casa" />
    <h1>¡Hola!</h1>
    <p>¿Llevas estos días sin saber que hacer?</p>
    <p>
      No te preocupes, aquí te dejamos unas cosillas para que puedas
      entretenerte :)
    </p>
      {/*
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>*/}
      {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
