import React from 'react'
import {
  Caracteristicas,
  Contact,
  Footer,
  Header,
  Modules,
  Principal
} from '../components'
import { AppProvider } from '../context/AppContext'
import { SplashScreen } from '../components/utils/SplashScreen'
import fetch from 'isomorphic-unfetch'

function App({ home, imageBanner }) {
  return (
    <div className="App">
      <AppProvider>
        <SplashScreen />
        <Header />
        <Principal home={home} imageBanner={imageBanner} />
        <Caracteristicas />
        <Modules />
        <Contact />
        <Footer />
      </AppProvider>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://workcore.net/apiv2/web/acercade/?a=2&e=64&ub=http://workcore.net/&c=general'
  )

  const result = await res.json()
  return {
    props: {
      home: result.records[0],
      imageBanner: result.records[0].IMAGENES[3].URL
    }
  }
}
export default App
