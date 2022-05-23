/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export const PrincipalSlide = ({ slide }) => {
  const [imgSlide, setImgSlide] = useState([])

  useEffect(() => {
    setImgSlide(slide)
  }, [slide])

  const options = {
    arrows: false,
    rewind: true,
    pagination: false,
    interval: 3000,
    autoplay: true,
    // lazyLoad: 'sequential',
    perPage: 1,
    perMove: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    type: 'loop'
  }
  return (
    <Splide options={options} aria-label="NEXO">
      {imgSlide.map(img => {
        return (
          <SplideSlide key={img.ID_ARCHIVO}>
            <img src={img.URL} alt={img.COMENTARIO} />
          </SplideSlide>
        )
      })}
    </Splide>
  )
}
