import React from "react"
import { Link } from "gatsby"
import "./block.css"

const Block = ({ icon, description, link, linkText }) => (
  <div className="Block">
    <span className="Block-icon" role="img" aria-label={linkText}>
      {icon}
    </span>
    <p className="Block-description">{description}</p>
    <Link className="Button" to={link}>
      {linkText}
    </Link>
  </div>
)

export default Block
