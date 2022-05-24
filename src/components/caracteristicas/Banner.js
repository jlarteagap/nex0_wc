/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { getAbout } from '../../api/Api'

export const Banner = () => {
  const [banner, setBanner] = useState({})
  useEffect(() => {
    ;(async () => {
      try {
        const res = await getAbout('características')
        setBanner(res.records[0].IMAGENES[0])
      } catch (error) {
        throw new Error(error)
      }
    })()
  }, [])

  return (
    <img
      loading="lazy"
      src={banner.URL}
      alt="Caracteristicas"
      className="caracteristicas__banner-img"
    />
  )
}
