import React, { useState } from "react"
import "./hamburgermenu.css"
import Categories from "../categories"

const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false)

  const handleOpen = () => setIsActive(!isActive)

  let classNameButton = "HamburgerMenu-button"
  let classNameContent = "HamburgerMenu-content"
  if (isActive) {
    classNameButton = `${classNameButton} isActive`
    classNameContent = `${classNameContent} isActive`
  }
  return (
    <div className="HamburgerMenu">
      <span className={classNameButton} onClick={handleOpen} tabindex="0" role="button" aria-pressed="false">
        <svg
          className="HamburgerMenu-icon"
          height="32px"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
        >
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
        </svg>
      </span>
      <div className={classNameContent}>
        <div className="Container">
          <Categories mobile />
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu
