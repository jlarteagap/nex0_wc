import React from 'react'
import useData from '../../hooks/useData'
import { Link } from 'react-scroll'
export const Menu = ({ isActive, onClick }) => {
  const { empresa, featuresContext, modulesContext } = useData()

  return (
    <div className={`header__menu navbar-menu ${isActive && 'is-active'}`}>
      <div className="navbar-end">
        <Link
          className="header__menu-item navbar-item has-text-weight-bold "
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          onClick={onClick}
        >
          Home
        </Link>
        {featuresContext && (
          <Link
            className="header__menu-item navbar-item has-text-weight-bold "
            to="caracteristicas"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={onClick}
          >
            Características
          </Link>
        )}
        {modulesContext && (
          <Link
            className="header__menu-item navbar-item has-text-weight-bold "
            to="modulos"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={onClick}
          >
            Módulos
          </Link>
        )}

        <Link
          className="header__menu-item navbar-item has-text-weight-bold "
          to="contacto"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={onClick}
        >
          Contacto
        </Link>
        <div className="navbar-item">
          <div className="buttons">
            <div className="button nexo__btn">
              <a href={empresa.apps} target="_blank" rel="noreferrer">
                <strong>Descargar app</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
