import React from 'react'
import { Footer } from './components'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App
