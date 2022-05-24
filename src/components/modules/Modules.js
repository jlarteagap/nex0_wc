import React, { useState, useRef, useEffect } from 'react'

import useData from '../../hooks/useData'
import { getAbout } from '../../api/Api'
import { SlideModulos } from './SlideModulos'

function Modules() {
  const { menuObserver, updateModules } = useData()

  const [modulesVisible, setModulesVisible] = useState('')
  const [entryObserver, setEntryObserver] = useState(false)
  const [modules, setModules] = useState([])
  const modulesRef = useRef()

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getAbout('módulos')
        setModules(res.records[0])
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
          setModulesVisible('#modulos')
        }
      },
      {
        rootMargin: '0px 0px 0px',
        root: null,
        threshold: 0.5
      }
    )
    observer.observe(modulesRef.current)
  }, [entryObserver])

  useEffect(() => {
    if (entryObserver) {
      menuObserver(modulesVisible)
    }
  }, [entryObserver, modulesVisible])

  useEffect(() => {
    if (modules.length > 0) {
      updateModules()
    }
  }, [modules])

  return (
    <div ref={modulesRef}>
      {modules.length > 0 && (
        <section className="modules" id="modules">
          <div className="container modules__container is-flex">
            <div className="modules__slide">
              <div className="modules__slide-bg"></div>
              <SlideModulos />
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
              <div className="modules__content-text is-size-6-mobile is-size-6-tablet is-size-4-desktop">
                <div dangerouslySetInnerHTML={{ __html: modules.CONTENIDO }} />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
export default Modules
