import React, { useEffect, useState } from 'react'
import { getServices } from '../../api/Api'
export const FooterServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getServices('módulos')
        setServices(res.records.reverse())
      } catch (error) {
        throw new Error(error)
      }
    })()
  }, [])
  return (
    <ul>
      {services.map(item => {
        return <li key={item.ID_CONTENIDO}>{item.TITULO}</li>
      })}
    </ul>
  )
}
