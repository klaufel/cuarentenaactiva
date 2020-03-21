import React from "react"
import { Link } from "gatsby"
import "./sitemap.css"

const siteMapElements = [
  {
    url: '/informacion-covid19-coronavirus',
    title: 'COVID-19'
  },
  {
    url: "/autores",
    title: "Autores",
  },
  {
    url: "/contacto",
    title: "Contacta",
  },
  {
    url: "/redes-sociales",
    title: "RRSS",
  },
  {
    url: "/aporta",
    title: "Aporta",
  },
]

const Sitemap = () => (
  <div className="Sitemap">
    <div className="Container">
      <ul className="Sitemap-list">
        {siteMapElements.map((element, index) => {
          const { url, title } = element
          return (
            <li className="Sitemap-item" key={index}>
              <Link className="Sitemap-link" to={url}>
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default Sitemap
