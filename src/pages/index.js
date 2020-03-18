import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Cuarentena activa" />
    <h1>👋 ¡¡Hola amigo en cuarentena!!</h1>
    <p>
      Sabemos que son tiempos complicados y que es posible que necesites
      gestionar de algún modo el tiempo que vas a pasar en casa.
    </p>
    <p>
      Desde aquí queremos ofrecerte alternativas para que disfrutes de este
      tiempo, desde cursos, llamadas en grupo, hasta eventos en directo.
    </p>
    <p>
      Sólo tienes que indicarnos cómo quieres entretenerte, si prefieres hacer
      cosas solo, si quieres acceder a contenido que puedas disfrutar en
      compañía con los tuyos a modo virtual o si quieres entretenerte en
      familia.
    </p>
    {/*
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>*/}
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
