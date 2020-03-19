import React from "react"
import "./footer.css"

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-container Container">
      <p className="Footer-item">
        Gracias a todos los que compartís contenido 🙏🏻
      </p>
      <p className="Footer-item">
        Hecho con ❤️ por una panda de frikis. {new Date().getFullYear()}{" "}
        #QuedateEnCasa #COVID-19
      </p>
    </div>
  </footer>
)

export default Footer
