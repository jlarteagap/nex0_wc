import React, { useState, useEffect, useRef } from 'react'
import { Modal } from '../utils/Modal'
import useData from '../../hooks/useData'

function Contact() {
  const { menuObserver } = useData()

  const [modal, setModal] = useState(false)
  const [contactVisible, setContactVisible] = useState('')
  const [entryObserver, setEntryObserver] = useState(false)

  const contactRef = useRef()

  const toggleModal = () => {
    setModal(!modal)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setEntryObserver(entry.isIntersecting)
        if (entryObserver) {
          setContactVisible('#contacto')
        }
      },
      {
        rootMargin: '0px 0px 0px',
        root: null,
        threshold: 0.5
      }
    )
    observer.observe(contactRef.current)
  }, [entryObserver])

  useEffect(() => {
    if (entryObserver) {
      menuObserver(contactVisible)
    }
  }, [entryObserver, contactVisible])

  return (
    <section
      ref={contactRef}
      id="contacto"
      className="contact is-flex is-justify-content-center is-align-items-center"
    >
      <div className="container is-flex is-justify-content-center">
        <div className="contact__wrapper has-text-centered">
          <h5 className="contact__wrapper-write">Escríbenos</h5>
          <h4 className="contact__wrapper-dist has-text-weight-bold mt-5">
            ¡Distribuidora Digital <br />
            de Tecnología!
          </h4>
          <div className="contact__wrapper-btn mt-5">
            <button
              onClick={toggleModal}
              className="button nexo__btn nexo__btn-contact is-size-1 is-size-3-tablet is-size-5-mobile"
            >
              Contactanos
            </button>
          </div>
        </div>
      </div>
      <Modal modal={modal} toggleModal={toggleModal} />
    </section>
  )
}

export default Contact
