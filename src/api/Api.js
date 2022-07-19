const { API_HOST, A, E, UB } = typeof window !== 'undefined' && window.CONFIG

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
  console.log(API_HOST)
  const url = `${API_HOST}/${section}/?a=${A}&e=${E}&ub=${UB}`
  return url
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

export async function getAbout(category) {
  try {
    const url = `${API_HOST}/acercade/?a=${A}&e=${E}&ub=${UB}&c=${category}`
    const res = await fetch(url)
    const result = await res.json()
    return result
  } catch (error) {
    console.log(error)
  }
}
