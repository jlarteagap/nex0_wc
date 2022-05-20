import React from 'react'
import { Caracteristicas, Contact, Footer, Header } from './components'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Caracteristicas />
        <Contact />
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App
