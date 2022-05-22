import React, { useRef } from 'react'
import screen1 from '../../assets/pantalla1_nexo.png'
function Modules() {
  const modulesRef = useRef()
  return (
    <section className="modules" id="modules" ref={modulesRef}>
      <div className="container is-flex">
        <div className="modules__slide">
          <div className="modules__slide-bg"></div>
          <img src={screen1} alt="Nexo" className="modules__slide-img" />
        </div>
        <div className="modules__content">
          <div className="modules__content-header has-text-centered">
            <h3 className="modules__content-header-sub is-size-3 has-text-weight-bold">
              APP
            </h3>
            <h2 className="modules__content-header-title is-size-2 has-text-weight-bold">
              MÓDULOS
            </h2>
          </div>
          <div className="modules__content-text is-size-4">
            <p>
              <strong>BUSCADOR:</strong> Esta sección permite consultar todos
              los productos ofrecidos por categoria
            </p>
            <p>
              <strong>MIS PEDIDOS:</strong> Esta sección permite visualizar y
              gestionar todos los pedidos registrados, así como la fecha y
              detalles de <strong>producto</strong>.
            </p>
            <p>
              <strong>REGISTRA TU NEGOCIO:</strong> Esta sección permite
              registrar tu negocio para crear tu perfil, se podrá escanear el
              código Qr del certificado de nit para el llenado rápido de la
              información del negocio.
            </p>
            <p>
              <strong>FAVORITOS: </strong> Esta sección permite registrar tu
              negocio para crear tu perfil, se podrá escanear el código Qr del
              certificado de nit para el llenado rápido de la información del
              negocio.
            </p>
            <p>
              <strong>CALENDARIO:</strong> Ver el calendario de la semana o mes
              actual, interfaz de un evento o tarea del calendario.
            </p>
            <p>
              <strong>MENSAJERIA:</strong> Ver la lista de mensajes interfaz de
              respuesta a un mensaje.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Modules
