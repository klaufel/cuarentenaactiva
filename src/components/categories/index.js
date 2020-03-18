import React from "react"
import { Link } from "gatsby"
import { categoriesList } from "./categoriesList"
import "./categories.css"

const Categories = () => (
  <div className="Categories">
    <div className="Container Categories-container">
      {categoriesList.map(category => (
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
