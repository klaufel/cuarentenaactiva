import React from "react"
import "./blockgroup.css"
import Block from "../block"

const BlockGroup = ({ items }) => (
  <div className="BlockGroup">
    <div className="Container">
      <div className="BlockGroup-items">
        {items.map(item => {
          const { icon, description, link, linkText } = item
          return (
            <Block
              icon={icon}
              description={description}
              link={link}
              linkText={linkText}
            />
          )
        })}
      </div>
    </div>
  </div>
)

export default BlockGroup
