import React, { createContext, useEffect, useState } from 'react'

const API_HOST = process.env.API_HOST
const A = process.env.A
const E = process.env.E
const UB = process.env.UB

export const AppContext = createContext({
  empresa: undefined,
  splash: undefined,
  menuActive: undefined,
  featuresContext: undefined,
  modulesContext: undefined
})

export function AppProvider({ children }) {
  const [empresa, setEmpresa] = useState([])
  const [featuresContext, setFeaturesContext] = useState(false)
  const [modulesContext, setModulesContext] = useState(false)
  const [splash, setSplash] = useState(true)

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
    console.log(url)
    fetch(url)
      .then(res => res.json())
      .then(data => setEmpresa(data.records))
  }, [])

  const value = {
    empresa,
    featuresContext,
    modulesContext,
    splash,
    updateFeatures,
    updateModules
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
