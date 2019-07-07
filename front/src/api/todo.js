import request from '@/utils/request'

export function getTask(id) {
  return request({
    url: '/todos/' + id,
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}


export function deleteTask(id) {
  return request({
    url: '/todos/' + id,
    method: 'delete',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}


export function changeTask(id, data) {
  return request({
    url: '/todos/' + id,
    method: 'delete',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: data
  })
}