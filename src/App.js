import React from 'react'
import { Contact, Footer } from './components'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Contact />
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App
