import { request } from "../utils/request";

const loginApi = (formData) => {
  return request({
    url: '/authorizations',
    method: 'POST',
    data: formData
  })
}

const getUserInfoApi = () => {
  return request({
    url: '/user/profile',
    method: 'GET'
  })
}

export { loginApi, getUserInfoApi }