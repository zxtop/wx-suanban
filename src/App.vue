<script>
import store from "./store/index"
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  },
  onHide(){
    // console.log("进入后台。。。。");
    //  wx.removeStorage({
    //   key: 'farmDate',
    //   success: function(res) {
    //     console.log("清除缓存")
    //   }
    //  })
  },
  onShow(){
    // console.log("进入前台。。。。");
    // store.state.user={
    //   uid: 0,             //用户ID
    //   gradeId:0,          //用户年级ID
    //   termId: 0,          //用户年级学期ID
    //   firstGame: 0, 
    //   name: '闯关小英雄',
    //   money: 3000,    
    //   achievementNum: 0, // 获得成就总数
    // }
    // //本地存档
    // store.commit("SAVE_GAME");

  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
