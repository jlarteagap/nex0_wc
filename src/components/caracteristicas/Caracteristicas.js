/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import banner from '../../assets/caracteristicas.jpg'

import useData from '../../hooks/useData'

function Caracteristicas() {
  const { menuObserver } = useData()

  const [featuresVisible, setFeaturesVisible] = useState('')
  const [entryObserver, setEntryObserver] = useState(false)

  const featuresRef = useRef()

  const [features, setFeatures] = useState([])
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

  return (
    <section className="caracteristicas" id="caracteristicas" ref={featuresRef}>
      <div className="container pb-5 mb-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <div className="caracteristicas__header has-text-centered mb-5">
          <div className="caracteristicas__header-sub has-text-weight-bold is-size-3">
            APP
          </div>
          <div className="caracteristicas__header-title has-text-weight-bold is-size-1 is-size-3-mobile">
            Caracteristicas
          </div>
        </div>
        <div className="caracteristicas__content has-text-centered has-text-weight-bold mb-5">
          <p className="is-size-4 is-size-6-mobile">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ex
            dolorum aspernatur eligendi assumenda culpa! Amet, necessitatibus
            minus accusamus, nobis aliquid veniam deleniti voluptates mollitia
            ullam ut maxime natus laborum!
          </p>
        </div>
      </div>
      <div className="caracteristicas__banner">
        <img
          loading="lazy"
          src={banner}
          alt="Caracteristicas"
          className="caracteristicas__banner-img"
        />
      </div>
    </section>
  )
}

export default Caracteristicas
