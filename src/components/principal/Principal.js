import React, { useEffect, useRef, useState } from 'react'

import { getAbout } from '../../api/Api'
import useData from '../../hooks/useData'

function Principal() {
  const { empresa } = useData()
  const { menuObserver } = useData()

  const [homeVisible, setHomeVisible] = useState('')
  const [entryObserver, setEntryObserver] = useState(false)
  const principalRef = useRef()
  const [home, setHome] = useState({})

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getAbout('general')
        setHome(res.records[0])
      } catch (error) {
        throw new Error(error)
      }
    })()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setEntryObserver(entry.isIntersecting)
        if (entryObserver) {
          setHomeVisible('#')
        }
      },
      {
        rootMargin: '0px 0px 0px',
        root: null,
        threshold: 0
      }
    )
    observer.observe(principalRef.current)
  }, [entryObserver])

  useEffect(() => {
    if (entryObserver) {
      menuObserver(homeVisible)
    }
  }, [entryObserver, homeVisible])

  return (
    <div ref={principalRef}>
      {home !== '' && (
        <section className="principal" id="principal">
          <div className="container principal__container is-flex is-align-items-center">
            <div className="principal__container-bg"></div>
            <div className="principal__content">
              <div dangerouslySetInnerHTML={{ __html: home.CONTENIDO }} />

              <div className="principal__button pt-5">
                <a
                  href={empresa.apps}
                  target="_blank"
                  className="button nexo__btn is-size-4"
                  rel="noreferrer"
                >
                  Descargar la app
                </a>
              </div>
            </div>
            <div className="principal__img">
              <img src={home.IMAGENES[3].URL} alt={home.ID_ARCHIVO} />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Principal
