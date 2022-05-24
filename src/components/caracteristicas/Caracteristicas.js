/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'

import { getAbout } from '../../api/Api'
import useData from '../../hooks/useData'
import { Banner } from './Banner'

function Caracteristicas() {
  const { menuObserver, updateFeatures } = useData()

  const [featuresVisible, setFeaturesVisible] = useState('')
  const [entryObserver, setEntryObserver] = useState(false)

  const featuresRef = useRef()

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
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setEntryObserver(entry.isIntersecting)
        if (entryObserver) {
          setFeaturesVisible('#caracteristicas')
        }
      },
      {
        rootMargin: '0px 0px 0px',
        root: null,
        threshold: 0
      }
    )
    observer.observe(featuresRef.current)
  }, [entryObserver])

  useEffect(() => {
    if (entryObserver) {
      menuObserver(featuresVisible)
    }
  }, [entryObserver, featuresVisible])

  useEffect(() => {
    if (features !== '') {
      updateFeatures()
    }
  }, [features])
  return (
    <div ref={featuresRef}>
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
