import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Categories from "../categories"
import HamburgerMenu from "../hamburgermenu"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="Header-container Container">
      <Link to="/" className="Header-logo">
        {siteTitle} <span className="Header-logoSmile">:)</span>
      </Link>
      <HamburgerMenu />
      <Categories />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
