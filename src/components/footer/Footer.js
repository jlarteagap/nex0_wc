import React from 'react'
import { Social } from '../utils/Social'
import useData from '../../hooks/useData'
import { FooterServices } from './FooterServices'

const Footer = () => {
  const { empresa } = useData()
  const date = new Date()
  return (
    <footer className="footer">
      <img src={empresa.logo} alt={empresa.nombre} />
      <div className="footer__section columns is-multiline is-flex is-flex-direction-column">
        <div className="footer__copy column is-4-desktop is-12-tablet is-flex is-justify-content-center">
          <p className="is-flex is-align-items-center">
            &#169; {date.getFullYear()}
            <img src={empresa.logo} alt={empresa.nombre} width="50px" />
            derechos resevados
          </p>
        </div>
        <div className="column footer__services is-flex is-4-tablet is-2-desktop is-flex-direction-column">
          <h4 className="has-text-weight-bold">servicios</h4>
          <FooterServices />
        </div>
        <div className="column footer__about is-2-desktop is-4-tablet">
          <h4 className="has-text-weight-bold">acerca de nosotros</h4>
          <div dangerouslySetInnerHTML={{ __html: empresa.descripcion }}></div>
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
