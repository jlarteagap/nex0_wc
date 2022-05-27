import React from 'react'
import useData from '../../hooks/useData'

export const Menu = ({ isActive, onClick }) => {
  const { menuActive, modulesContext, featuresContext, empresa } = useData()

  return (
    <div className={`header__menu navbar-menu ${isActive && 'is-active'}`}>
      <div className="navbar-end">
        <a
          onClick={onClick}
          className={`header__menu-item navbar-item has-text-weight-bold ${
            menuActive === '#' && 'isActive'
          }`}
          href="#"
        >
          Home
        </a>

        {featuresContext && (
          <a
            onClick={onClick}
            className={`header__menu-item navbar-item has-text-weight-bold ${
              menuActive === '#caracteristicas' && 'isActive'
            }`}
            href="#caracteristicas"
          >
            Características
          </a>
        )}
        {modulesContext && (
          <a
            onClick={onClick}
            className={`header__menu-item navbar-item has-text-weight-bold ${
              menuActive === '#modulos' && 'isActive'
            }`}
            href="#modulos"
          >
            Módulos
          </a>
        )}
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
