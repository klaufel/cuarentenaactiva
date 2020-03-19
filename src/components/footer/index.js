import React from "react"
import "./footer.css"

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-container Container">
      <p className="Footer-item">
        Gracias a todos los que compartís contenido{" "}
        <span role="img" aria-label="Rezar">
          🙏
        </span>
      </p>
      <p className="Footer-item">
        Hecho con{" "}
        <span role="img" aria-label="Amor">
          ❤️
        </span>{" "}
        desde{" "}
        <span role="img" aria-label="Casa">
          🏠
        </span>{" "}
        #QuedateEnCasa #COVID-19
      </p>
    </div>
  </footer>
)

export default Footer
