import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: '/static'
  })

  //设置响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}