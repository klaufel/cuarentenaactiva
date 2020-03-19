import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Block from "../components/block"

const Home = () => (
  <Layout location="/autores" crumbLabel="Autores" fluid>
    <SEO title="Todas estas personas lo hacen posible" />
    <div className="Container">
      <h1>¡¡Hola amigo en cuarentena!!</h1>
      <p>
        Sabemos que son tiempos complicados y que es posible que necesites
        gestionar de algún modo el tiempo que vas a pasar en casa.
      </p>

      <p>
        Desde aquí queremos ofrecerte alternativas para que disfrutes de este
        tiempo, desde cursos, llamadas en grupo, hasta eventos en directo. Esto
        es un repositorio.
      </p>

      <p>
        Sólo tienes que indicarnos cómo quieres entretenerte, si prefieres hacer
        cosas solo, si quieres acceder a contenido que puedas disfrutar en
        compañía con los tuyos a modo virtual o si quieres entretenerte en
        familia.
      </p>
    </div>
    <div style={{ backgroundColor: "var(--color-blue-light)", padding: '60px', margin: '80px 0' }}>
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
  </Layout>
)

export default Home
