import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { categoriesList } from "../categories/categoriesList"
import "./breadcrumb.css"

const BreadCrumb = ({ location, label }) => {
  const breads = location.split("/")
  let url
  return location && (
    <ul className="Breadcrumb">
      <li className="Breadcrumb-item">
        <Link className="Breadcrumb-link" to={"/"}>
          <span role="img" aria-label="Casa">
            🏠
          </span>{" "}
          Inicio
        </Link>
      </li>
      {breads.map(bread => {
        url = bread && `${url}/${bread}`
        const urlFound = categoriesList.find(element => element.url === bread)
        return (
          bread && (
            <li className="Breadcrumb-item">
              {url === location ? (
                <span className="Breadcrumb-link Breadcrumb-link--current">
                  {(urlFound && urlFound.name) || label || bread}
                </span>
              ) : (
                <Link className="Breadcrumb-link" to={url}>
                  {(urlFound && urlFound.name) || bread}
                </Link>
              )}
            </li>
          )
        )
      })}
    </ul>
  )
}

BreadCrumb.defaultProps = {
  location: "",
  label: "",
}

BreadCrumb.propTypes = {
  location: PropTypes.string,
  label: PropTypes.string,
}

export default BreadCrumb
