import React from "react"
import { Link } from "gatsby"

const categories = [
  {
    url: "/",
    name: "Inicio",
    emoji: "🏠",
  },
  {
    url: "juegos",
    name: "Juegos",
    emoji: "👾",
  },
  {
    url: "peliculas",
    name: "Películas",
    emoji: "🎥",
  },
  {
    url: "deporte",
    name: "Deporte",
    emoji: "💪",
  },
  {
    url: "musica",
    name: "Música",
    emoji: "🎸",
  },
  {
    url: "formacion",
    name: "Formación",
    emoji: "📖",
  },
  {
    url: "peques",
    name: "Peques",
    emoji: "👼",
  },
]

const Categories = () => (
  <div className="Categories">
    <div className="Container Categories-container">
      {categories.map(category => (
        <Link className="Categories-link" to={category.url}>
          <span className="Categories-icon" role="img">
            {category.emoji}
          </span>
          <span className="Categories-title">{category.name}</span>
        </Link>
      ))}
    </div>
  </div>
)

export default Categories
