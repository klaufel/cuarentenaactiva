import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { categoriesList } from "./categoriesList"
import "./categories.css"

const Categories = ({ mobile }) => {
  let classNameCategories = "Categories"
  if (mobile) {
    classNameCategories = `${classNameCategories} ${classNameCategories}--mobile`
  }
  return (
    <nav className={classNameCategories}>
      <ul className="Categories-list">
        {categoriesList.map((category, index) => (
          <li className="Categories-item" key={index}>
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
}

Categories.propTypes = {
  mobile: PropTypes.bool,
}

Categories.defaultProps = {
  mobile: false,
}

export default Categories
