<template>

  <div class="counter-warp" :class="{beingskin:skinBox}">

    <!-- 功能菜单 -->
    <div class="navcontent">
      <ul class="navList">

        <li @click="showPopup('skin')">
          <span class="navIcon">
            <van-icon name="manager" />
          </span>
          <span class="navName">装扮</span>
        </li>

        <li @click="showPopup('bag')">
          <span class="navIcon">  
            <van-icon name="shop" />
          </span>
          <span class="navName">背包</span>
        </li>

        <li @click="showAchievement()">
          <span class="navIcon">  
            <van-icon name="award" />
          </span>
          <span class="navName">勋章</span>
        </li>
        
      </ul>
    </div>

    <div class="content">

      <!-- 太阳光 -->
      <c-sunlight></c-sunlight>

      <!-- 山峰 -->
      <c-peak></c-peak>

      <!-- 白云 -->
      <CClouds></CClouds>

      <div class="landWrap">
        <!-- 草地 -->
        <CGrass></CGrass>

        <!-- 房子 -->
        <CHouse></CHouse>

        <!-- 护栏 -->
        <c-fence></c-fence>

        <!-- 蜜蜂鲜花 -->
        <CBee></CBee>
        <CDasuan></CDasuan>
      </div>

      <!-- 叶子 -->
      <CLeaf></CLeaf>

      <!-- 狗 -->
      <CDog></CDog>

      <!-- 蒜瓣 -->
      <div class="chick">

        <!-- 进食倒计 -->
        <div class="countdown-box">
          <p class="countdown-text" :class="{active : !chick.eat }">{{content}}</p>
          <!-- 进食进度条 -->
          <div class="progress" v-if="value != 0 && value < 100">
            <div class="progress-content" :style="'width:' + value + '%' "></div>
          </div>
        </div>

        <div class="chickBody">

            <!-- 装扮-套装 -->
            <div class="skinSuit" v-show="chick.currentCompId == 0">
              
              <SuitDefault v-if="chick.componentSuit == 'suit-default'"></SuitDefault>
              <SuitForg v-if="chick.componentSuit == 'suit-forg'"></SuitForg>
              <SuitSuper v-if="chick.componentSuit == 'suit-super'"></SuitSuper>

            </div>

            <!-- 装扮-帽子 -->
            <div class="skinsHat" v-show="chick.currentCompId == 1">
              <HatDefault v-if="chick.componentHat == 'hat-default'"></HatDefault>
              <HatForg v-if="chick.componentHat == 'hat-forg'"></HatForg>
            </div>

        </div>

        <!-- 蒜瓣眼睛 -->
        <div class="eye" :class="{
          eye_hat:chick.currentPlay == '1forg',
          eye_super:chick.currentPlay == '0super'}">
          <span></span>
          <span></span>
        </div>

      </div>

      <!-- 弹窗遮罩层 -->
      <div class="popupMask" v-show="skinBox" @click="hidePopup"></div>

    </div>

    <!-- 功能弹窗面板 -->
    <div class="pagePopup">

      <!-- 装扮功能 -->
      <div class="popupItem" v-show="isSkin">

        <div class="popupHead borderBottom1px">
          <span class="popup-title fl">装扮</span>
          <i>
            <van-icon name="close" @click="hidePopup"/>
          </i>
        </div>

        <div class="popupContent">

          <van-tabs :active="tabactive" @change="onChange" v-if="isSkin">

            <van-tab title="套装">
              <ul class="opt-list">
                <li
                  v-for="(suit,index) in suits"
                  :key="index"
                  :class="['opt-btn',{active:chick.currentSuit === suit.id}]"
                  @click="replaceDress(0,suit.id)"
                >
                  <span class="opt-mask">
                    <i><van-icon name="checked" /></i>
                  </span>

                  {{suit.name}}

                </li>
              </ul>
            </van-tab>

            <van-tab title="帽子" >
              <ul class="opt-list">
                <li
                  v-for="(hat,index) in hats"
                  :key="index"
                  :class="['opt-btn',{active:chick.currentHat === hat.id}]"
                  @click="replaceDress(1,hat.id)"
                >
                  <span class="opt-mask">
                    <i><van-icon name="checked" /></i>
                  </span>

                  {{hat.name}}

                </li>
              </ul>
            </van-tab>

          </van-tabs>


          
        </div>

      </div>

      <!-- 背包功能 -->
      <div class="popupItem" v-show="isBag">

        <div class="popupHead borderBottom1px">
          <span class="popup-title fl">背包</span>
          <i>
            <van-icon name="close" @click="hidePopup"/>
          </i>
        </div>

        <div class="popupContent">

          <van-tabs :active="tab2active" @change="onChange2" v-if="isBag">
              <van-tab title="道具">
                <div class="food-box">
                  <ul class="foodList">
                    <li
                      v-for="(food, index) in foods"
                      @click="showFood(index)"
                      :class="{isMask: food.num == 0 || food.unlock == 0}"
                      :key="index"
                    >
                      <div class="foodItem">

                        <div class="foodImg">
                          <img :src="food.url" />
                        </div>

                        <p class="foodName">{{food.name}}</p>
                        <span class="foodNum" v-if="food.num !== 0">{{food.num}}</span>

                        <div
                          class="maskBg shortageTips"
                          @click.stop="showShop(food.name)"
                          v-if="food.num == 0 && food.unlock == 1"
                        >
                          <van-button type="primary" size="small">购买</van-button>
                        </div>

                        <div
                          class="maskBg shortageTips"
                          v-if="food.unlock == 0"
                          @click.stop="showUnlock(food.name)"
                        >
                          <van-button type="warning" size="small">解锁</van-button>
                        </div>
                        
                      </div>

                    </li>
                  </ul>

                </div>
              </van-tab>
              <van-tab title="收成"></van-tab>

          </van-tabs>
          
        </div>

      </div>

    </div>


    <!-- 查看食物详情 -->
    <van-popup
    :show="modalFood"
    closeable
    close-icon="close"
    close-icon-position="top-right"
    @close="hideFood"
    z-index="100000"
    customStyle="background:transparent;"
    >
      <div class="modal-box">
        <div class="food-img">
          <img :src="currFood.url" />
        </div>
        <div class="food-t">
          <p>物品名称：{{currFood.name}}</p>
          <p>拥有数量：{{currFood.num}}</p>
          <p>过程时长：{{SecondToDate}}</p>
          <p>获得经验：{{currFood.exp}}</p>
          <div class="food-t-btn">
            <van-button customStyle="background:#805c4f;color:#fff;border-color:#6b4c41;border-radius:3px;height:30px;width:100%" 
            @click="feedClick">使用</van-button>
          </div>
        </div>
      </div>
    </van-popup>

    <van-notify id="van-notify" />

    <!-- 解锁商品确认 -->
    <van-popup
    :show="modalUnlock"
    closeable
    close-icon="close"
    close-icon-position="top-right"
    @close="hideUnlock"
    z-index="100000"
    customStyle="background:transparent;width:90%"
    >
      <div class="shopping-box">
        <p>确定解锁吗？</p>
        <p>解锁需要：${{currFood.unlockPrice}}</p>
        <div class="lockBtn" style="margin-top:10px;border-top:1px solid #ceaf92;text-align:right;background:#e8dedb;padding-top:10px;padding-bottom:10px;">
          <van-button customStyle="background:transparent;border-color:transparent" @click="hideUnlock">取消</van-button>
          <van-button customStyle="margin-right:10px;border-radius:3px;background-color:#805c4f;border-color:#6b4c41;height:30px;color:#fff"
            @click="commitUnlock"
          >确定</van-button>
        </div>
      </div>
    </van-popup>


    <!-- 勋章列表 -->
    <van-popup
      :show="modalAchievement"
      closeable
      close-icon="close"
      close-icon-position="top-right"
      @close="hideAchievement"
      z-index="100000"
      customStyle="background:transparent;width:90%"
    >
      <div class="achievementBox">
        <p style="margin-bottom: 10px;text-align:center">
          成就数量：
          <span>{{targetList}}</span>
          /{{achievement.length}}
        </p>

        <ul class="aList">
          <li
            v-for="(item, index) in achievement"
            :class="{ active: item.complete, onin: item.completeID == 1 }"
            :key="index"
          >

            <div class="aInfo">
              <p>
                {{item.title}}
                <span class="fr">{{item.completeCurrCount}}/{{item.completeNeedCount}}</span>
              </p>

              <div>
                {{item.desc}}
                <div class="reward" v-if="item.completeID == 0">

                  <div class="reward-icon">
                    <van-icon name="gold-coin-o" />
                  </div>

                  <span class="reward-profit">{{item.profit}}</span>

                </div>
              </div>

            </div>

            <div
              class="aRight"
              v-if="item.complete && item.completeID == 0"
              @click="receiveAwards(item.title)"
            >
              <van-button type="primary">领取奖励</van-button>
            </div>

            <div class="aRight" v-if="item.completeID == 1">
              <van-button type="primary">已完成</van-button>
            </div>

          </li>
        </ul>
      </div>
    </van-popup>

  </div>

</template>

<script>
// Use Vuex
import store from './store';
import CSunlight from "@/components/CSunlight";
import CPeak from "@/components/CPeak";
import CClouds from "@/components/CClouds";
import CGrass from "@/components/CGrass";
import CHouse from "@/components/Chouse";
import CFence from "@/components/CFence";
import CBee from "@/components/CBee";
import CDasuan from "@/components/CDasuan";
import CLeaf from "@/components/CLeaf";
import CDog from "@/components/CDog";

import SuitDefault from "@/components/SuitDefault";  //套装默认组件
import SuitForg from "@/components/SuitForg";        //青蛙套装
import SuitSuper from "@/components/SuitSuper";      //超人组件


import HatDefault from "@/components/HatDefault";  //帽子默认组件
import HatForg from "@/components/HatForg"; //蘑菇帽子
import Notify from '@/../static/dist/notify/notify'; //@是mpvue的一个别名，指向src目录
export default {
  data () {
    return {
      modalFood: false, //食物弹出框
      modalUnlock: false,//解锁
      tabactive:0,
      tab2active:0,
      show:false,
      isSkin:false,   //皮肤弹出
      isBag:false,
      skinBox:false, //弹出层遮罩
      suits: [
        // 套装列表
        {
          id: "default",
          name: "默认套装"
        },
        {
          id: "forg",
          name: "青蛙套装"
        },
        {
          id:'super',
          name:"超人套装"
        }
      ],
      hats: [
        // 帽子列表
        {
          id: "default",
          name: "默认帽子"
        },
        {
          id: "forg",
          name: "蘑菇帽子"
        }
      ],
      modalAchievement:false
    }
  },
  components: {
    CSunlight,
    CPeak,
    CClouds,
    CGrass,
    CHouse,
    CFence,
    CBee,
    CDasuan,
    CLeaf,
    CDog,
    SuitDefault,
    SuitForg,
    SuitSuper,
    HatDefault,
    HatForg
  },
  computed: {
    chick () {
      return store.state.chick
    },
    //背包里的食物
    foods() {
      return store.state.foods;
    },
     //当前选中的食物
    currFood() {
      return store.state.currFood;
    },
    SecondToDate(){
      return this.formatter(store.state.currFood.eatTime)
    },
    //倒计时
    content() {
      return store.state.content;
    },
    //进食进度条
    value() {
      return store.state.value;
    },
    //解锁成就
    achievement() {
      return store.state.achievement;
    }
  },
  methods: {
    showPopup(val){
      // console.log("点击。。。。")
      this.skinBox = true;
      if(val == "skin"){
        this.isSkin = true;
      }
      if(val == 'bag'){
        this.isBag = true;
      }
    },
    hidePopup(){
      let _that = this;
      this.skinBox = false;
      setTimeout(function(){
        _that.isSkin = false;
        _that.isBag = false;

      },400)
    },
    onChange(event){
      console.log('切换。。。。')
    },
    onChange2(event){
      console.log('切换。。。。')
    },
    // 设置服装
    replaceDress: function(type, pid) {
      store.dispatch("replacedress", { type: type, pid: pid });
      console.log(this.chick.componentSuit)
    },

    hideFood: function() {
      this.modalFood = !this.modalFood;
    },

    showFood: function(index) {
      this.modalFood = !this.modalFood;
      store.state.currFood = store.state.foods[index];
    },
    formatter:function(value){
      var time = value;
      if (null != time && "" != time) {
        if (time > 60 * 1000 && time < 60 * 60 * 1000) {
          time =
            parseInt(time / 1000 / 60.0) +
            "分钟" +
            parseInt(
              (parseFloat(time / 1000 / 60.0) - parseInt(time / 1000 / 60.0)) *
                60
            ) +
            "秒";
        } else if (time >= 60 * 60 * 1000 && time < 60 * 60 * 24 * 1000) {
          time =
            parseInt(time / 1000 / 3600.0) +
            "小时" +
            parseInt(
              (parseFloat(time / 1000 / 3600.0) -
                parseInt(time / 1000 / 3600.0)) *
                60
            ) +
            "分钟" +
            parseInt(
              (parseFloat(
                (parseFloat(time / 1000 / 3600.0) -
                  parseInt(time / 1000 / 3600.0)) *
                  60
              ) -
                parseInt(
                  (parseFloat(time / 1000 / 3600.0) -
                    parseInt(time / 1000 / 3600.0)) *
                    60
                )) *
                60
            ) +
            "秒";
        } else if (time >= 60 * 60 * 24 * 1000) {
          time =
            parseInt(time / 1000 / 3600.0 / 24) +
            "天" +
            parseInt(
              (parseFloat(time / 1000 / 3600.0 / 24) -
                parseInt(time / 1000 / 3600.0 / 24)) *
                24
            ) +
            "小时" +
            parseInt(
              (parseFloat(time / 1000 / 3600.0) -
                parseInt(time / 1000 / 3600.0)) *
                60
            ) +
            "分钟" +
            parseInt(
              (parseFloat(
                (parseFloat(time / 1000 / 3600.0) -
                  parseInt(time / 1000 / 3600.0)) *
                  60
              ) -
                parseInt(
                  (parseFloat(time / 1000 / 3600.0) -
                    parseInt(time / 1000 / 3600.0)) *
                    60
                )) *
                60
            ) +
            "秒";
        } else {
          time = Math.round((time % (1000 * 60)) / 1000) + "秒";
        }
      }
      return time;
    },
    showUnlock: function(name) {
      store.commit("shopFood", name);
      this.modalUnlock = true;
    },
    hideUnlock: function() {
      this.modalUnlock = false;
    },
    commitUnlock: function() {
      var food = store.state.currFood.name;
      var unlockPrice = store.state.currFood.unlockPrice;
      console.log("解锁需要金币：" + unlockPrice);
      if (store.state.user.money < unlockPrice) {
        // this.error("不够金币解锁");
        Notify({ type: 'warning', message: '不够金币解锁' });
        this.modalUnlock = false;
        return false;
      } else {
        store.dispatch("unlockfood", unlockPrice);
        // this.success("成功解锁了" + food);
        Notify({ type: 'success', message: '成功解锁了'+food});
      }
      this.hideUnlock();
    },

    feedClick(){
      //判断是否进食
      if(store.state.chick.eat){
        Notify({ type: 'primary', message: '正在进食，请勿打扰'});
        return;
      }else if(store.state.currFood.num > 0){
        let startDate = new Date().getTime();
        let endDate = startDate + store.state.currFood.eatTime;
        store.commit('FEED_CLICK', endDate);
        this.countdown(startDate);
      }else{
        Notify({ type: 'warning', message: '你没有'+store.state.currFood.name+'食物了'});
      }
      this.hideFood();
      this.hidePopup();
      Notify({ type: 'success', message: '喂食成功' });
    },

    //倒计时
    countdown(startdate) {
      let self = this;
      let es = store.state.endDate - startdate;
      let delay = (100 / store.state.currFood.eatTime) * 1000; // 计算每秒走的进度

      console.log("计算每秒走的进度:" + delay + "%");

      if (es > 0) {
        let timer = setInterval(function() {
          let nowTime = new Date().getTime();
          let t = store.state.endDate - nowTime;
          let value = ((store.state.currFood.eatTime - t) / 1000) * delay; //计算进度条

          console.log("计算进度条:" + value + "%");

          if (value <= 100) {
            store.state.value = value;
          } else {
            store.state.value = 100;
          }

          console.log("t:" + t + "进度条：" + value + "%");

          if (t > 0) {
            store.state.chick.eat = true;
            let day = Math.floor(t / 86400000);
            let hour = Math.floor((t / 3600000) % 24);
            let min = Math.floor((t / 60000) % 60);
            let sec = Math.floor((t / 1000) % 60);
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
            let format = "";
            if (day > 0) {
              format = `${day}天${hour}小时${min}分${sec}秒`;
            }
            if (day <= 0 && hour > 0) {
              format = `${hour}小时${min}分${sec}秒`;
            }
            if (day <= 0 && hour <= 0) {
              format = `${min}分${sec}秒`;
            }
            store.state.content = format; // 显示倒计时
            // console.log('存档')
            // store.dispatch("savegame");
          } else {
            clearInterval(timer); // 清除定时器
            store.dispatch("endeat"); // 喂食结束
          }
        }, 1000);
      }
    },

    showAchievement: function() {
      this.modalAchievement = true;
    },

    hideAchievement: function() {
      this.modalAchievement = false;
    }
    

  }
}
</script>

<style>
.counter-warp{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  transition: all .6s;
}
.content{
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  background-image: -webkit-linear-gradient(to bottom,#75cefc, #fff);
  background-image: linear-gradient(to bottom,#75cefc, #fff);
  overflow: hidden;
  transition: all 0.4s;
}
.landWrap{
  position: absolute;
  width: 100%;
  height: 40%;
  bottom: 0;
  left: 0;
}

.chick-head:before,
.chick-head:after,
.chickBody:before{
  position: absolute;
  content: "";
}
.chick{
    position: absolute;
    bottom: 17%;
    left: 50%;
    display: block;
    width: 126px;
    height: 192px;
    margin-left: -56px;
    z-index: 11;
/*  transform: scale(.5,.5);*/
}
.chick>div{ position: absolute; }

.chickBody{
  position: absolute;
  /* top: 0;
  left: 0; */
  top:57px;
  left: 3px;
  bottom: 0;
  right: 0;
  display: block;
  width: 90%;
  height: 87%;
  /* background-color: #f2e3cb; */
  /* background: url(../images/st.png); */
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  z-index: 5;
/*  -webkit-animation:chickbody 1.5s ease-in infinite;
  animation:chickbody 1.5s ease-in infinite;*/
  overflow: hidden;
}
.chickBody:before{
  /*position: absolute;
  top: 0;
  left: -.05rem;
  width: 7.6rem;
  height: 8.2rem;
  background-image:-webkit-linear-gradient(-180deg, #fff, #fff, #f9e5e6); 
  background-image: linear-gradient(-180deg, #fff, #fff, #f9e5e6);
  border-radius: 66% 66% 66% 66% / 80% 80% 50% 50%;
  -webkit-animation:chickbody-before 1.5s ease-in infinite;
  animation:chickbody-before 1.5s ease-in infinite;*/
}

.eye span:before,
.eye span:after{
  position: absolute;
  content: "";
}

.eye{
  top: 136px;
  left: 20.8px;
  width: 80px;
  height: 16px;
  z-index: 8;
}
.eye span{
  position: absolute;
  left: 16px;
  width: 6.4px;
  height: 14.4px;
  background-color: #27221e;
  border-radius: 60%;
}
.eye span:nth-child(2){
  left: 56px
}
.eye span:before{
  width: 1.92px;
  height: 1.92px;
  border-radius: 1.92px;
  background-color: #fff;
  top: 3.2px;
  left: 2.4px;
}
.eye span:after{
  left: -3.2px;
  top: -16px;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 6;
  -webkit-animation:eye 1.4s ease-in infinite;
}

@-webkit-keyframes eye {
  0% { transform: translate3d(0, 0, 0);}
  40% { transform: translate3d(0, 0, 0);}
  50% { transform: translate3d(0, 60%, 0);}
  60% { transform: translate3d(0, 0, 0);}
  100% { transform: translate3d(0, 0, 0);}
}

.eye_hat span:after{
  left: 0;
  top:-4.8px;
  width: 8px;
  height: 8px;
}

.eye_super span:after{
  left: 0;
  top:-4.8px;
  width: 8px;
  height: 8px;
}



/* 功能菜单 */
.navList{
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 21;
}
.navList li {
  position: relative;
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 50%;
  background: #ffb300;
  border: 2px solid #8c3530;
}
.navIcon {
  width: 100%;
  height: 100%;
  display: inline-block;
  font-size: 27.5px;
  text-align: center;
  color: #8c3530;
  text-shadow: 0px 0px 10px #fff;
}
.navName {
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 42px;
  padding: 3px 0;
  border-radius: 20px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  background: #8c352f;
  transform: translateX(-50%);
}
/* 底部边框1像素 */
.borderBottom1px {
  position: relative;
}
.borderBottom1px::after {
  content: ' ';
  width: 100%;
  height: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  border-bottom: 1px #e7e7e7 solid;
  transform-origin: left bottom;
}
.beingskin .content {
  bottom: 50%;
}
.pagePopup{
  position: absolute;
  top: 100%;
  width: 100%;
  height: 60%;
  padding-top: 60px;
  overflow: hidden;
  transition: all .4s;
  z-index: 200;
}
.beingskin .pagePopup{
  top:40%;
}
.popupItem{
  height: 100%;
}
.popupHead{
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  width: 90%;
  padding: 0 20px;
  background: #fff;
  border-radius: 30px 30px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}
.popupHead i {
  font-size: 26px;
  color: #999;
}
.popupContent {
  height: 100%;
  background: #fff;
}
.popupMask{
   position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 199;
}

/* 换装选择列表 */ 
.opt-list {
  display: flex;
  flex-wrap: wrap;
}
.opt-list li {
  position: relative;
  width: 23%;
  height: 80px;
  margin: 1%;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.opt-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  background: rgba(0,0,0,.7);
  z-index: 2;
  line-height: 80px;
  display: none;
}
.opt-mask i {
  color: #b1e837;
  font-size: 25.6px;
}
.opt-list li.active .opt-mask {
  display: block;
}


/* 背包列表*/
.foodList {
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  justify-content: center;
}
.foodList li {
  width: 25%;
  padding: 4px;
  margin: 0 10px;
}
.foodItem {
  position: relative;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.foodImg {
  text-align: center;
}
.foodImg img {
  width: 100%;
  height: 57.5px;
}
.foodImg.egg-img {
  width: 70%;
  margin: 0 auto 8px;
}
.modal-box .foodImg {
    width: 96px;
    margin: 0 auto;
}
.food-t {
  padding: 0 16px;
  width: 224px;
  margin: 0 auto;
}
.food-t-btn {
  margin-top: 16px;
  text-align: center;
}
.food-t-btn button {
  width: 100%;
}
.foodName {
  text-align: left;
  margin-bottom: 8px;
  font-size: 11.2px;
  font-weight: 600;
}
.foodNum {
  position: absolute;
  bottom: 16px;
  right: 8px;
  font-size: 11.2px;
}
.food-icon {
  margin-right: 8px;
}
.shortageTips {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
}
.isMask .maskBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5); 
  border-radius: 5px;
}

.modal-box{
  background: #ead0b7;
  border:5px solid #845d4f;
  border-radius: 10px;
  padding:16px;font-size:14px;line-height:1.5
}
.modal-box .food-img {
    width: 96px;
    margin: 0 auto;
}
.food-img img{
  width: 100%;
  height: 71px;
}
/* 购物 */
.shopping-box {
  text-align: center;
  background: #ead0b7;
  border:5px solid #845d4f;
  border-radius: 10px;
  font-size:14px;
  line-height:1.5;
  padding-top:10px;
}
.shopping-box p{
  line-height: 30px;
}
.achievementBox{
  background: #ead0b7;
  border:5px solid #845d4f;
  border-radius: 10px;
  font-size:14px;
  line-height:1.5;
  padding-top:10px;
}

/* 进食 */
/* 倒计时组件 */
.countdown-box {
	position: absolute;
	top: 48px;
  width: 130%;
  text-align: center;
  z-index: 99;
  left: 72px;
}
.countdown-text {
  position: relative;
    display: inline-block;
    padding: 10px;
    background: #F90;
    border-radius: 15px;
    color: #fff;
}
.countdown-text:before {
  position: absolute;
  bottom: -9px;
  left: 16px;
  content: "";
  width: 0;
  height: 0;
  border-top: 10px solid #ff9901;
  border-right: 10px solid transparent;
  display: none;
}
.countdown-text.active {
  margin-top: 15px;
}
.countdown-text.active:before {
  display: block;
}

.progress {
    width: 100%;
    height: 4px;
    border-radius: 5px;
    margin-top: 10px;
    background-color: #d1b8ff;
    z-index: 1;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 5px #d1d2d1;
}
.progress .progress-content {
    width: 0%;
    height: 100%;
    background-color: #673AB7;
}


.fr {
  float: right;
}
.aList {
  height: 58vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 15px;
}
.aList::-webkit-scrollbar {display: none;}
.aList li {
    display: flex;
    padding: 8px;
    border: 2px solid #9a9590;
    border-radius: 8px;
    background: #dad9d8;
}
.aList li + li {
  margin-top: 8px;
}
.aInfo {
  flex: 1;
  color: #666;
}
.aRight {
  flex: 0 0 auto;
  padding-left: 8px;
}
.aList li.active {
    border: 2px solid #835d4f;
    background: #ecc096;
}
.aList li.active .aInfo {
  color: #8e6150;
}
.aList li.onin{
    background: #989898;
    border: 2px solid #827d79;
}
.aList li.onin .aInfo {
  color: #6d6d6d;
}
.aList li.onin .ivu-btn-primary,
.aList li.onin .ivu-btn-primary:hover {
    color: #fff;
    background-color: #6d6d6d;
    border-color: #696969;
}
.reward {
    float: right;
    width: 64px;
    display: flex;
    align-items: center;
    height: 20px;
    padding: 0 1.6px;
    background: #f1cf6a;
    border: 1px solid #e2bb47;
    color: #d28003;
    border-radius: 4px;
}
.no-data {
  padding-top: 50px;
  text-align: center;
}

</style>
