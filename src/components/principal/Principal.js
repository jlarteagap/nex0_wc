import React, { useEffect, useRef, useState } from 'react'

import { getAbout } from '../../api/Api'
import useData from '../../hooks/useData'

import { PrincipalSlide } from './PrincipalSlide'

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
        threshold: 1
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
    <section className="principal" id="principal" ref={principalRef}>
      <div className="container principal__container is-flex">
        <div className="principal__container-bg"></div>
        <div className="principal__content">
          <div dangerouslySetInnerHTML={{ __html: home.CONTENIDO }} />

          <div className="principal__button">
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
          <PrincipalSlide />
        </div>
      </div>
    </section>
  )
}

export default Principal
