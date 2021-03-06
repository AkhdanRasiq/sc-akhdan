import Axios from 'axios'
import * as UTIL from './SCUtil'


const _axiosInstance = Axios.create({
  baseURL: "https://cors-anywhere-id.herokuapp.com/" + UTIL.serverBaseUrl()
})

export function getRequest(url: string, params?: object) {
  return _axiosInstance
  .get(url, {
    params: {
      ...params
    }
  })
  .then(res => Promise.resolve(res))
  .catch(err => Promise.reject(err))
}
