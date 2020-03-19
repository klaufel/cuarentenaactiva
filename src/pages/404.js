import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Página no encontrada" />
    <div style={{textAlign: 'center'}}>

    <h1>¡¡Acho!!<br/>¡No hemos encontrado lo que buscas!</h1>
        <span role="img" aria-label="Página no encontrada" style={{fontSize: '100px', lineHeight: '1', display: 'block', marginBottom: '60px'}}>🧐</span>
    <Link to="/" className="Button Button--secondary">Volver a la página de inicio</Link>
    </div>
  </Layout>
)

export default NotFoundPage
