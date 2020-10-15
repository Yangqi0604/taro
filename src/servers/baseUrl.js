/*
 * @Author: YangQi
 * @Date: 2020-10-15 15:39:57
 * @LastEditors: YangQi
 * @LastEditTime: 2020-10-15 15:45:44
 */
const getBaseUrl = (url) => {
  let BASE_URL = '';
  console.log(url,process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'development') {
    //开发环境 - 根据请求不同返回不同的BASE_URL
    if (url.includes('/api/')) {
      BASE_URL = 'http://127.0.0.1:3000'
    } 
  } else {
    // 生产环境
    if (url.includes('/api/')) {
      BASE_URL = ''
    } else if (url.includes('/iatadatabase/')) {
      BASE_URL = ''
    }
  }
  return BASE_URL
}

export default getBaseUrl;
