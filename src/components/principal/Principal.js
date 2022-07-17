import React, { useEffect, useState } from 'react'

import { getAbout } from '../../api/Api'
import useData from '../../hooks/useData'

function Principal() {
  const { empresa } = useData()

  const [home, setHome] = useState({})
  const [imgBanner, setImgBanner] = useState('')

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getAbout('general')
        setHome(res.records[0])
        setImgBanner(res.records[0].IMAGENES[3].URL)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div>
      {home !== '' && (
        <section className="principal" id="home">
          <div className="container principal__container is-flex is-align-items-center">
            <div className="principal__container-bg"></div>
            <div className="principal__content">
              <div dangerouslySetInnerHTML={{ __html: home.CONTENIDO }} />

              <div className="principal__button pt-5">
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
              <img src={imgBanner} alt="NEXO APP" />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Principal
