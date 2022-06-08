import React, { useState, useEffect } from 'react'

import useData from '../../hooks/useData'
import { getAbout } from '../../api/Api'
import { SlideModulos } from './SlideModulos'

function Modules() {
  const { updateModules } = useData()

  const [modules, setModules] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getAbout('módulos')
        setModules(res.records[0])
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    if (modules !== '') {
      updateModules()
    }
  }, [modules])

  return (
    <section className="modules" id="modulos">
      {modules !== '' && (
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
            <div className="modules__content-text is-size-6-mobile is-size-6-tablet is-size-5-desktop mt-5 pt-5">
              <div dangerouslySetInnerHTML={{ __html: modules.CONTENIDO }} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
export default Modules
