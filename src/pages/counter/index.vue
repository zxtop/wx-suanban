<template>

  <div class="counter-warp">

    <!-- 功能菜单 -->
    <div class="navcontent">
      <ul class="navList">
        <li @click="showPopup()">
          <span class="navIcon">
            <van-icon name="manager" />
          </span>
          <span class="navName">装扮</span>
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
              <!-- <keep-alive>
                <component :is="chick.componentSuit"></component>
              </keep-alive> -->
              <SuitDefault></SuitDefault>
            </div>

            <!-- 装扮-帽子 -->
            <!-- <div class="skins-hat" v-show="chick.currentCompId == 1">
              <keep-alive>
                <component :is="chick.componentHat"></component>
              </keep-alive>
            </div> -->

            <!-- 装扮-衣服 -->
            <!-- <div class="skin-cloes" v-show="chick.currentCompId == 2">
              <keep-alive>
                <component :is="chick.componentClothes"></component>
              </keep-alive>
            </div> -->

        </div>

        <!-- 蒜瓣眼睛 -->
        <div class="eye" :class="{
          eye_hat:chick.currentPlay == '1forg',
          eye_super:chick.currentPlay == '0super'}">
          <span></span>
          <span></span>
        </div>

      </div>

    </div>

    <!-- 功能弹窗面板 -->
      <div class="page-popup">
        <!-- 装扮功能 -->
        <div class="popup-item">
          <div class="popup-head"></div>
        </div>

      </div>
  
    <van-popup :show="show" @close="onclose"  round closeable close-icon="close" position="bottom" close-icon-position="top-right">

      <van-tabs active="a" @change="onChange">
        <van-tab title="标签1" name="a">内容1</van-tab>
        <van-tab title="标签2" name="b">内容2</van-tab>
        <van-tab title="标签3" name="c">内容3</van-tab>
      </van-tabs>

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

import SuitDefault from "@/components/SuitDefault"; //套装默认组件

export default {
  data () {
    return {
      show:false  
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
    SuitDefault
  },
  computed: {
    chick () {
      return store.state.chick
    }
  },
  methods: {
    showPopup(){
      console.log("点击。。。。")
      this.show = true;
    },
    onclose(){
      console.log("关闭。。。。")
      this.show = false;
    },
    onChange(event){
      console.log('切换。。。。')
    }
  }
}
</script>

<style>

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
</style>
