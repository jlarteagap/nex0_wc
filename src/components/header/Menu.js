import React from 'react'
import useData from '../../hooks/useData'

export const Menu = ({ isActive, onClick }) => {
  const { menuActive } = useData()

  return (
    <div className={`header__menu navbar-menu ${isActive && 'is-active'}`}>
      <div className="navbar-end">
        <a
          onClick={onClick}
          href="#"
          className={`header__menu-item navbar-item has-text-weight-bold ${
            menuActive === '#' && 'isActive'
          }`}
        >
          Home
        </a>

        <a
          onClick={onClick}
          className={`header__menu-item navbar-item has-text-weight-bold ${
            menuActive === '#caracteristicas' && 'isActive'
          }`}
          href="#caracteristicas"
        >
          Características
        </a>

        <a
          onClick={onClick}
          className={`header__menu-item navbar-item has-text-weight-bold ${
            menuActive === '#modulos' && 'isActive'
          }`}
          href="#modulos"
        >
          Módulos
        </a>

        <a
          onClick={onClick}
          className={`header__menu-item navbar-item has-text-weight-bold ${
            menuActive === '#contacto' && 'isActive'
          }`}
          href="#contacto"
        >
          Contacto
        </a>
        <div className="navbar-item">
          <div className="buttons">
            <div className="button nexo__btn">
              <strong>Descargar app</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
