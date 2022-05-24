/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { getAbout } from '../../api/Api'

export const PrincipalSlide = () => {
  const [slide, setSlide] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getAbout('general')
        setSlide(res.records[0].IMAGENES)
      } catch (error) {
        throw new Error(error)
      }
    })()
  }, [])
  const options = {
    arrows: false,
    rewind: true,
    pagination: false,
    interval: 3000,
    autoplay: true,
    with: 100,
    lazyLoad: 'sequential',
    perPage: 1,
    perMove: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    type: 'loop'
  }

  return (
    <Splide options={options} aria-label="My Favorite Images">
      {slide.map(item => {
        return (
          <SplideSlide key={item.ID_ARCHIVO}>
            <img src={item.URL} alt={item.ID_ARCHIVO} />
          </SplideSlide>
        )
      })}
    </Splide>
  )
}
