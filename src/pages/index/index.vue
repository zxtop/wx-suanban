<template>
  <div class="container">

    <div class="loading">

      <div class="pic">
        <div id="preloader_6">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="press">

        <p v-if="showPress">
          <!-- <i-progress :percent="percent" :stroke-width="15"></i-progress> -->
          <van-progress :percentage="percent" :stroke-width="15"></van-progress>

        </p>

        <p v-if="!showPress">
            <span @click="bindViewTap">进入游戏</span>
        </p>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {

    return {
      percent: 0, // 加载进度
      showPress: true
    }

  },

  mounted () {
    this.init(); //初始化
  },
  methods: {

    init(){
      this.loadPage();
    },

    loadPage(){
      let that = this;
      var interval = setInterval(function() {
        if (that.percent < 100) {
          that.percent += 50;
          that.showPress = true;
          //console.log(that.percent);
        } else {
          clearInterval(interval);
          that.showPress = false;
        }
      }, 100);
    },

    bindViewTap(){
      const url = '../counter/main';
      mpvue.redirectTo({
        url: url,
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
      
    }
    
  },
  beforeCreate () {
    // wx.hideTabBar()
  },
  created () {
  }
}
</script>

<style scoped>
.container{
  transition: all 0.6s;
}

.loading{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #b7eaff;
}

/*  加载动画 */
#preloader_6{
  position:relative;
  width: 42px;
  height: 42px;
  animation: preloader_6 5s infinite linear;
  margin: 0 auto;
  margin-top: 50%;
  /* left: 1rem; */
}
#preloader_6 span{
  width:20px;
  height:20px;
  position:absolute;
  background:red;
  display:block;
  animation: preloader_6_span 1s infinite linear;
}
#preloader_6 span:nth-child(1){
background:#2ecc71;
}
#preloader_6 span:nth-child(2){
left:22px;
background:#9b59b6;
animation-delay: .2s;
}
#preloader_6 span:nth-child(3){
top:22px;
background:#3498db;
animation-delay: .4s;
}
#preloader_6 span:nth-child(4){
top:22px;
left:22px;
background:#f1c40f;
animation-delay: .6s;
}
@keyframes preloader_6 {
  from {-ms-transform: rotate(0deg);}
  to {-ms-transform: rotate(360deg);}
}
@keyframes preloader_6_span {
 0% { transform:scale(1); }
 50% { transform:scale(0.5); }
 100% { transform:scale(1); }
}
.press{
  margin-top: 70px;
  text-align: center;
}
.press span{
  width: 150px;
  color: #19be6b;
  border-radius: 4px;
  font-size: 16px;
  background: #b7eaff;
  border: 1px solid #19be6b;
  border-radius: 5px;
  padding: 10px 20px;
}



</style>
