const { API_HOST, A, E, UB } = window.CONFIG

export async function getServices(service) {
  try {
    const url = `${API_HOST}/servicios/?a=${A}&e=${E}&ub=${UB}&c=${service}`

    const res = await fetch(url)
    const result = await res.json()

    return result
  } catch (error) {
    throw new Error(error)
  }
}

export async function getData(section) {
  try {
    const url = `${API_HOST}/${section}/?a=${A}&e=${E}&ub=${UB}`

    const res = await fetch(url)
    const result = await res.json()

    return result
  } catch (error) {
    throw new Error(error)
  }
}

export async function getGaleria(seccion) {
  try {
    const url = `${API_HOST}/fotogaleria/?a=${A}&e=${E}&ub=${UB}&c=${seccion}`

    const res = await fetch(url)
    const result = await res.json()
    return result
  } catch (error) {
    console.log(error)
  }
}
