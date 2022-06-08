/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import { getAbout } from '../../api/Api'
import useData from '../../hooks/useData'
import { Banner } from './Banner'

function Caracteristicas() {
  const { updateFeatures } = useData()

  const [features, setFeatures] = useState({})

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getAbout('características')
        setFeatures(res.records[0])
      } catch (error) {
        throw new Error(error)
      }
    })()
  }, [])

  useEffect(() => {
    if (features !== '') {
      updateFeatures()
    }
  }, [features])
  return (
    <div>
      {features !== '' && (
        <section className="caracteristicas" id="caracteristicas">
          <div className="container pb-5 mb-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <div className="caracteristicas__header has-text-centered mb-5">
              <div className="caracteristicas__header-sub has-text-weight-bold is-size-3">
                APP
              </div>
              <div className="caracteristicas__header-title has-text-weight-bold is-size-1 is-size-3-mobile">
                {features.TITULO}
              </div>
            </div>
            <div className="caracteristicas__content has-text-centered has-text-weight-bold mb-5">
              <div dangerouslySetInnerHTML={{ __html: features.CONTENIDO }} />
            </div>
          </div>
          <div className="caracteristicas__banner">
            <Banner />
          </div>
        </section>
      )}
    </div>
  )
}

export default Caracteristicas
