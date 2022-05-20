import React from 'react'
import { Caracteristicas, Contact, Footer } from './components'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Caracteristicas />
        <Contact />
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App
