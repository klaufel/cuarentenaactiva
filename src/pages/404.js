import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout location='/' crumbLabel=''>
    <SEO title="404: Página no encontrada" />
    <h1>Página no encontrada</h1>
    <Link to="/">Volver a la página de inicio</Link>
    <br />
    <br />
  </Layout>
)

export default NotFoundPage
