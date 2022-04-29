import CONFIG from '../static/config.json'


export function serverBaseUrl() {
  if (CONFIG.connection.port !== '')
    return CONFIG.connection.protocol + CONFIG.connection.address + CONFIG.connection.port
  return CONFIG.connection.protocol + CONFIG.connection.address
}

export function getApiUrl(strUrl: string) {
  return CONFIG.api.base + strUrl
}
