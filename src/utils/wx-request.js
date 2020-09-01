const host = 'https://api.tk.ejex.net/renbo/public' //写自己的域名
const myHost = 'https://api.zx.ejex.net'

function request (url, method, data, header = {}) {
  wx.showLoading({
    title: '加载中' //数据请求前loading
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, // 接口地址
      method: method,
      data: data,
      headers: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        wx.hideLoading()
        resolve(res.data)
      },
      fail: function (res) {
        wx.hideLoading()
        // reject(false)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}

function request_a (url, method, data, header = {}) {
  // wx.showLoading({
  //   title: '加载中' //数据请求前loading
  // })
  return new Promise((resolve, reject) => {
    wx.request({
      url: myHost + url, // 接口地址
      method: method,
      data: data,
      headers: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        wx.hideLoading()
        resolve(res.data)
      },
      fail: function (res) {
        wx.hideLoading()
        // reject(false)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}
 
function get (obj) {
  return request(obj.url, 'GET', obj.data)
}
 
function post (obj) {
  return request(obj.url, 'POST', obj.data)
}
 
function post_a(obj){
  return request_a(obj.url, 'POST', obj.data)
}
export default {
  request,
  get,
  post,
  post_a,
  host
}