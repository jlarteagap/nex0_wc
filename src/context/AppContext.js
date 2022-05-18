import React, { createContext, useEffect, useState } from 'react'

const { API_HOST, A, E, UB } = window.CONFIG

export const AppContext = createContext({
  empresa: undefined
})

export function AppProvider({ children }) {
  const [empresa, setEmpresa] = useState([])

  useEffect(() => {
    const url = `${API_HOST}/empresa/?a=${A}&e=${E}&ub=${UB}`

    fetch(url)
      .then(res => res.json())
      .then(data => setEmpresa(data.records))
  }, [])

  const value = {
    empresa
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
