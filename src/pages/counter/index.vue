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


        

        <div class="popupItem" v-show="isBag">

          <div class="popupHead borderBottom1px">
            <span class="popup-title fl">背包</span>
            <i>
              <van-icon name="close" @click="hidePopup"/>
            </i>
          </div>

          <div class="popupContent">

            <van-tabs :active="tab2active" @change="onChange2" v-if="isBag">
                <van-tab title="道具"></van-tab>
                <van-tab title="收成"></van-tab>

            </van-tabs>
            
          </div>

        </div>







      </div>
  

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

export default {
  data () {
    return {
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
      ]
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
      console.log("关闭。。。。");
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
</style>
