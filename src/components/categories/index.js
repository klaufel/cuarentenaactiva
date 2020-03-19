import React from "react"
import { Link } from "gatsby"
import { categoriesList } from "./categoriesList"
import "./categories.css"

const Categories = () => (
  <nav className="Categories">
    <ul className="Categories-list">
      {categoriesList.map(category => (
        <li className="Categories-item">
          <Link className="Categories-link" to={category.url}>
            <span className="Categories-icon" role="img" aria-label="Casa">
              {category.emoji}
            </span>{" "}
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Categories
