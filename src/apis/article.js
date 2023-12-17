import { request } from "../utils/request";

const getChannelsApi = () => {
  return request({
    url: '/channels',
    method: 'GET',
  })
}

const createArticleApi = (formData) => {
  return request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data: formData
  })
}

export { getChannelsApi,createArticleApi }