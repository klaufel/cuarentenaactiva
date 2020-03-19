import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contacto = () => (
  <Layout location="/contacto" crumbLabel="Contacto">
    <SEO title="Contacta con nosotros" />
    <div style={{ textAlign: "center" }}>
      <span className="Emoji" role="img" aria-label="Página no encontrada">
        ✉️
      </span>
      <h1>¡¡Contacta con nosotros!!</h1>
      <p>Puedes escribirnos a nuestra dirección de email:</p>
      <p>
        <strong>
          <a href="mailto:cuarentenaactiva@gmail.com">cuarentenaactiva@gmail.com</a>
        </strong>
      </p>
      <a className="Button" href="mailto:cuarentenaactiva@gmail.com">
        Envíanos un email
      </a>
    </div>
  </Layout>
)

export default Contacto
