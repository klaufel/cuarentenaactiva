import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = () => (
  <Layout location="/">
    <SEO title="¡¡Hola amigo en cuarentena!!" />
    <h1>¡¡Hola amigo en cuarentena!!</h1>
    <p>
      Sabemos que son tiempos complicados y que es posible que necesites
      gestionar de algún modo el tiempo que vas a pasar en casa.
    </p>

    <p>
      Desde aquí queremos ofrecerte alternativas para que disfrutes de este
      tiempo, desde cursos, llamadas en grupo, hasta eventos en directo. Esto es
      un repositorio.
    </p>

    <p>
      Sólo tienes que indicarnos cómo quieres entretenerte, si prefieres hacer
      cosas solo, si quieres acceder a contenido que puedas disfrutar en
      compañía con los tuyos a modo virtual o si quieres entretenerte en
      familia.
    </p>
  </Layout>
)

export default Home
