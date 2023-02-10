import { React, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        {" "}
        <a href="/">
          <img src="Logo.png" alt=" Logo de Carites Marketing" />
        </a>
      </div>
      <div>
        <ul>
          <li className="dropdown">
            <a href="#" onClick={handleClick} className="dropbtn">
              Servicios
            </a>
            <div className="dropdown-content">
              <a href="/auditoria">Auditoria Digital</a>
              <a href="/identidad">Identidad Visual</a>
              <a href="/asesorias">Asesorias</a>
              <a href="/redes">Redes Sociales</a>
              <a href="/publicidad">Publicidad Online</a>
              <a href="diseño">Diseño</a>
            </div>
          </li>
          <li>
            <a href="/">Testimonios</a>
          </li>
          <li>
            <a href="/cursos">Cursos</a>
          </li>
          <li>
            <a href="/recursos">Recursos</a>
          </li>
          <li>
            <a href="/contacto">Contactanos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
