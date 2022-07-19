import React from 'react'
import Image from 'next/image'
import useData from '../../hooks/useData'
// const { API_HOST, A, E, UB } = typeof window !== 'undefined' && window.CONFIG

function Principal({ home, imageBanner }) {
  const { empresa } = useData()

  return (
    <div>
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
            <Image src={imageBanner} alt="NEXO APP" width={400} height={600} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Principal
