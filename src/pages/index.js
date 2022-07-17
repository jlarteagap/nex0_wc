import React from 'react'
import {
  Caracteristicas,
  Contact,
  Footer,
  Header,
  Modules,
  Principal
} from '../components'
import { SplashScreen } from '../components/utils/SplashScreen'
import { AppProvider } from '../context/AppContext'

function App() {
  return (
    <div className="App">
      <AppProvider>
        <SplashScreen />
        <Header />
        <Principal />
        <Caracteristicas />
        <Modules />
        <Contact />
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App
