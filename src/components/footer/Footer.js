import React from 'react'
import { Social } from '../utils/Social'
import useData from '../../hooks/useData'

const Footer = () => {
  const { empresa } = useData()
  const date = new Date()
  return (
    <footer className="footer">
      <img src={empresa.logo} alt={empresa.nombre} className="footer__logo" />
      <div className="footer__section columns is-multiline is-flex is-flex-direction-column">
        <div className="footer__copy column is-4-desktop is-12-tablet is-flex is-justify-content-center">
          <p className="is-flex is-align-items-center">
            &#169; {date.getFullYear()}
            <img src={empresa.logo} alt={empresa.nombre} width="50px" />
            derechos resevados
          </p>
        </div>

        <div className="column footer__contact is-4-tablet is-2-desktop">
          <h4 className="has-text-weight-bold">contacto</h4>
          <ul>
            <li>{empresa.email}</li>
            <li>{empresa.telefono}</li>
            <li>{empresa.domicilio}</li>
          </ul>
        </div>
        <div className="column footer__social is-12-tablet is-2-desktop is-flex is-justify-content-center">
          <Social size={24} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
