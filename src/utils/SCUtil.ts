import CONFIG from '../static/config.json'


export function serverBaseUrl() {
  if (CONFIG.connection.port !== '')
    return CONFIG.connection.protocol + CONFIG.connection.address + CONFIG.connection.port
  return CONFIG.connection.protocol + CONFIG.connection.address
}

export function getApiUrl(strUrl: string) {
  return CONFIG.api.base + strUrl
}

export function eventDispatcher(strEventName: string, data: object) {
  const eventDispatch = new CustomEvent(strEventName, data)
  window.dispatchEvent(eventDispatch)
}
