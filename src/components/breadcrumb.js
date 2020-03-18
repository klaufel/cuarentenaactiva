import { Link } from "gatsby"
import React from "react"
import { categories } from "./categories"
import "./breadcrumb.css"

const Breadcrumb = ({ location, label }) => {
  const breads = location.split("/")
  console.log(breads)
  console.log(location)
  let url
  return (
    <div className="Breadcrumb">
      <div className="Breadcrumb-item">
        <Link className="Breadcrumb-link" to={"/"}>
          <span role="img" aria-label="Casa">
            🏠
          </span>{" "}
          Inicio
        </Link>
      </div>
      {breads.map(bread => {
        url = bread && `${url}/${bread}`
        const urlFound = categories.find(element => element.url === bread)
        return (
          bread && (
            <div className="Breadcrumb-item">
              {url === location ? (
                <span className="Breadcrumb-link Breadcrumb-link--current">
                  {(urlFound && urlFound.name) || label || bread}
                </span>
              ) : (
                <Link className="Breadcrumb-link" to={url}>
                  {(urlFound && urlFound.name) || bread}
                </Link>
              )}
            </div>
          )
        )
      })}
    </div>
  )
}

export default Breadcrumb
