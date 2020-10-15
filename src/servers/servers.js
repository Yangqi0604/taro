/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"

export const getResultData_servers = (postData) => {
  return HTTPREQUEST.get('/api/v1/users', postData)
}
