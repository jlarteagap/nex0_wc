const { API_HOST, A, E, UB } = typeof window !== 'undefined' && window.CONFIG

export async function getApi(section) {
  const url = `${API_HOST}/${section}/?a=${A}&e=${E}&ub=${UB}`
  console.log(url)
  return url
}
