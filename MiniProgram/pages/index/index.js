const consts = require('../../utils/consts.js')
const app = getApp()

Page({
  data: {
    notice:{}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../commitMessage/commitMessage'
    })
  },

  //生命周期
  onLoad: function (options) {
    const page = this;
    wx.request({
      url: consts.remoteUrl + '/api/services/app/notice/GetUsingNotice',
      data:{},
      method: "POST",
      success: function (res) {
        if (res.statusCode == 200) {
          page.setData({
            notice:res.data.result,
            showLoading:false
          })
        }else{
          wx.showToast({
            title:  res.data.error.message,
            icon: 'none',
            duration: 2000
          });
          page.setData({
            showLoading:false
          })
        }
      }
    })
  }
})
