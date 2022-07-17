import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper'
import { getAbout } from '../../api/Api'

export const SlideModulos = () => {
  const [slide, setSlide] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getAbout('módulos')
        setSlide(res.records[0].IMAGENES)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 3000
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {slide.map(item => {
        return (
          <SwiperSlide key={item.ID_ARCHIVO}>
            <img src={item.URL} alt={item.ID_ARCHIVO} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
