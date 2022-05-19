import React from 'react'

function Contact() {
  return (
    <section className="contact">
      <div className="container is-flex is-justify-content-center">
        <div className="contact__wrapper has-text-centered">
          <h5 className="contact__wrapper-write">Escríbenos</h5>
          <h4 className="contact__wrapper-dist has-text-weight-bold mt-5">
            ¡Distribuidora Digital <br />
            de Tecnologia!
          </h4>
          <div className="contact__wrapper-btn mt-5">
            <button className="button nexo__btn is-size-1 is-size-3-tablet is-size-5-mobile">
              Contactanos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
