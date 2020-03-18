import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const categories = [
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
    url: "aprender",
    name: "Aprender",
    emoji: "📖",
  },
  {
    url: "peques",
    name: "Peques",
    emoji: "👼",
  },
]

const Header = ({ siteTitle }) => (
  <>
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
    <div className="Categories">
      {categories.map(category => (
        <Link className="Categories-link" to={category.url}>
          <span className="Categories-icon" role="img">{category.emoji}</span>
          <span className="Categories-title">{category.name}</span>
        </Link>
      ))}
    </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
