import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Aporta = () => (
  <Layout location="/aporta" crumbLabel="Aporta">
    <SEO title="Aporta" />
    <h1>¡Ayúdanos a mejorar!</h1>
    <p>
      Cuéntanos qué opinas sobre el sitio, deja contenido que conozcas, dinos
      cuáles son tus sugerencias y ayúdanos a mejorar.
    </p>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLScA54vj6jUjbkUf4_QiMrAT96OM1ABJ1XswXH2DwEhHik94tA/viewform?usp=sf_link"
      target="_blank"
      className="Button Button--secondary"
    >
      Rellena este formulario
    </a>
  </Layout>
)

export default Aporta
