//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
  },
  //生命周期
  onLoad: function (options) {
    const page = this;
    wx.request({
      url: consts.remoteUrl + '/api/services/app/topic/GetAll',
      data:{
        maxResultCount: 999,
        skipCount: 0
      },
      method: "POST",
      success: function (res) {
        if (res.statusCode == 200) {
          page.setData({
            topics:res.data.result.items,
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
  },
  commitMessage:function(){
    const page = this;
    wx.request({
      url: consts.remoteUrl + '/api/services/app/message/CommitMessage',
      data:{
        "name": "string",
        "email": "string",
        "phoneNumber": "string",
        "identityType": 1,
        "organization": "string",
        "messages": [
          {
            "topicId": 0,
            "message": "string"
          }
        ]
      },
      method: "POST",
      success: function (res) {
        if (res.statusCode == 200) {
          page.setData({
            showLoading:false
          })
          
          wx.showToast({
            title:  "您的建议我们已收到，感谢您对本活动的支持！",
            duration: 2000
          });

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
