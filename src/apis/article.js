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

const updateArticleApi = (data) => {
  return request({
    url: `/mp/articles/${data.id}?draft=false`,
    method: 'PUT',
    data
  })
}

const getArticleListApi = (params) => {
  return request({
    url: '/mp/articles',
    method: 'GET',
    params
  })
}

const delArticleApi = (id) => {
  return request({
    url: `/mp/articles/${id}`,
    method: 'DELETE',
  })
}

const getArticleById = (id) => {
  return request({
    url: `/mp/articles/${id}`,
    method: 'GET'
  })
}

export { getChannelsApi,createArticleApi,updateArticleApi,getArticleListApi,delArticleApi,getArticleById }