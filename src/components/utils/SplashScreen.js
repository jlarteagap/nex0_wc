import React from 'react'
import useData from '../../hooks/useData'
export const SplashScreen = () => {
  const { splash } = useData()

  return (
    <div
      className={`splash is-flex is-justify-content-center is-align-items-center is-size-1 is-white has-text-weight-bold ${
        splash ? '' : 'is-hidden'
      }`}
    >
      <div className="splash1"></div>
      <div className="splash2"></div>
      <div className="splash3"></div>
      NEXO
    </div>
  )
}
