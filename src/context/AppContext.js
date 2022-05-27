import React, { createContext, useEffect, useState } from 'react'

const { API_HOST, A, E, UB } = window.CONFIG

export const AppContext = createContext({
  empresa: undefined,
  splash: undefined,
  menuActive: undefined,
  featuresContext: undefined,
  modulesContext: undefined
})

export function AppProvider({ children }) {
  const [empresa, setEmpresa] = useState([])
  const [menuActive, setMenuActive] = useState('#')
  const [featuresContext, setFeaturesContext] = useState(false)
  const [modulesContext, setModulesContext] = useState(false)
  const [splash, setSplash] = useState(true)

  const menuObserver = menu => {
    setMenuActive(menu)
  }
  const updateFeatures = () => {
    setFeaturesContext(true)
  }
  const updateModules = () => {
    setModulesContext(true)
  }
  setTimeout(() => {
    setSplash(false) // *** If you want to clear the error message as well
  }, 3000)
  useEffect(() => {
    const url = `${API_HOST}/empresa/?a=${A}&e=${E}&ub=${UB}`

    fetch(url)
      .then(res => res.json())
      .then(data => setEmpresa(data.records))
  }, [])

  const value = {
    empresa,
    menuActive,
    featuresContext,
    modulesContext,
    splash,
    menuObserver,
    updateFeatures,
    updateModules
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
