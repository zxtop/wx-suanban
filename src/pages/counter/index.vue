<template>

  <div class="counter-warp" :class="{beingskin:skinBox}">
    
    <!-- 游戏名称 -->
    <div class="game-title">蒜瓣闯关</div>
    
    <!-- 用户资料 -->
    <div class="user-box" @click="showUser">
      
      <div class="user-logo">
        <div class="user-level">{{chick.level}}</div>
        <span class="portrait-item portrait0" >
          <img src="../../assets/images/portrait0.jpg" style="width:41px;height:38px"/>
        </span>
      </div>

      <div class="user-info">
        <div class="user-name">{{user.name}}</div>
        <div class="user-money">
          <div class="user-mi">
            <van-icon name="gold-coin-o" />
          </div>
          <p>{{user.money}}</p>
        </div>
      </div>

    </div>

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

        <li @click="showPopup('study')" class="n-green">
          <span class="navIcon">
            <van-icon name="fire" />
          </span>
          <span class="navName">闯关</span>
        </li>
        
      </ul>

      <!-- 游戏帮助 -->
      <ul class="navHelp">
        <li @click="showHelp()">
          <span class="navIcon">
            <van-icon name="question" />
          </span>
          <span class="navName">帮助</span>
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
        <div class="chick-swiper">
          <span>{{randomText}}</span>
        </div>

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

              <van-tab title="收成">

                <div class="food-box">
                  <ul class="foodList">
                    <li
                      v-for="(good, index) in goods"
                      v-show="good.num != 0"
                      @click="showGood(good.name)"
                      :key="index"
                    >
                      <div class="foodItem">
                        <div class="foodImg egg-img">
                          <img :src="good.url" />
                        </div>
                        <p class="foodName">{{good.name}}</p>
                        <span class="foodNum">{{good.num}}</span>
                      </div>
                    </li>
                  </ul>
                  <div class="no-data" v-show="goods.length == 0">暂无物品</div>
                </div>

              </van-tab>

          </van-tabs>

        </div>

      </div>

      <!-- 闯关列表 -->
      <div class="popupItem" v-show="isStudy">

        <div class="popupHead borderBottom1px">
          <span class="popup-title fl">闯关</span>
          <i>
            <van-icon name="close" @click="hidePopup"/>
          </i>
        </div>

        <div class="popupContent">

          <van-tabs :active="tab3active" @change="onChange3" v-if="isStudy">
              <van-tab
              v-for="(subject,index1) in subjectList"
              :key="index1"
              :title="subject.type"
              >
                <ul class="subject-list">
                  <li
                   v-for="(item,index) in subject.list"
                   :key="index"
                   :class="{on:item.learning ==1,over:item.learning==2}"
                   @click="onSubject(item,index1)"
                  >
                  <div class="subject-img">
                    <div class="learning-label">
                      <span v-if="item.learning == 0">未通关</span>
                      <span v-if="item.learning == 1">通关中</span>
                      <span v-if="item.learning == 2">已通关</span>
                    </div>
                    <img :src="item.img" alt="">
                  </div>

                  <p class="subject-name">{{item.name}}</p>
                  </li>
                </ul>

              </van-tab>
          </van-tabs>
          
        </div>

      </div>

    </div>

    <!-- 查看收成 -->
    <van-popup
    :show="modalGood"
    closeable
    close-icon="close"
    close-icon-position="top-right"
    @close="hideGood"
    z-index="100000"
    customStyle="background:transparent;"
    >
      <div class="modal-box" v-if="!goodDetails">
        <div class="food-t">
          <p>物品名称：{{currGood.name}}</p>
          <p>拥有数量：{{currGood.num}}</p>
          <p>出售价值：${{currGood.price}}</p>

          <div class="food-t-btn">
            <van-button customStyle="background:#805c4f;color:#fff;border-color:#6b4c41;border-radius:3px;height:30px;width:100%" 
            @click="setSell">出售</van-button>
          </div>

        </div>
      </div>

      <div class="shopping-box shoppingout" v-if="goodDetails">
        <div class="shoppGood">
          <p>{{currGood.name}}</p>
          <div class="num-form">

            <div class="shop-btn" @click="sellReduce">
              <span>-</span>
            </div>

            <div class="shop-input">
              <b>{{sellNum}}</b>
            </div>

            <div class="shop-btn" @click="sellAdd">
              <van-icon name="add" />
            </div>

          </div>

          <p>出售总价：${{currGood.price * sellNum}}</p>
          <van-button customStyle="background:#805c4f;color:#fff;border-color:#6b4c41;border-radius:3px;height:30px;width:100%" 
          @click="commitSell">出售</van-button>

        </div>

      </div>

    </van-popup>

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


    <!-- 购买物品 -->
    <van-popup
    :show="modalShop"
    closeable
    close-icon="close"
    close-icon-position="top-right"
    @close="hideShop"
    z-index="100000"
    customStyle="background:transparent;width:90%"
    >
      <div class="shopping-box">
        <p>{{currFood.name}}</p>
        <p>单价：${{currFood.price}}/个</p>
        <div class="num-form">
          <div class="shop-btn" @click="shopReduce">
            <span>-</span>
          </div>
          <div class="shop-input">
            <!-- <i-input type="text" v-model="shoppingNum" placeholder="数量"></i-input> -->
            <b>{{shoppingNum}}</b>
          </div>
          <div class="shop-btn" @click="shopAdd">
            <van-icon name="add" />
          </div>
        </div>
        <p>总价：${{currFood.price * shoppingNum}}</p>

        <div class="lockBtn" style="margin-top:10px;border-top:1px solid #ceaf92;text-align:right;background:#e8dedb;padding-top:10px;padding-bottom:10px;">
          <van-button customStyle="background:transparent;border-color:transparent" @click="hideShop">取消</van-button>
          <van-button customStyle="margin-right:10px;border-radius:3px;background-color:#805c4f;border-color:#6b4c41;height:30px;color:#fff"
            @click="shopSettle"
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
          勋章成就
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
              @click="receiveAwards(item.title)"
              v-if="item.complete && item.completeID == 0"
            >
              <van-button type="primary" customStyle="height:30px;background-color:#805c4f;border-color:#6b4c41;color:#fff">领取奖励</van-button>
            </div>

            <div class="aRight" v-if="item.completeID == 1">
              <van-button type="primary" customStyle="height:30px;background-color:#6d6d6d;border-color:#696969;color:#fff">已完成</van-button>
            </div>

          </li>
        </ul>
      </div>
    </van-popup>


    <!-- 帮助弹框 -->
    <van-popup
      :show="modalHelp"
      closeable
      close-icon="close"
      close-icon-position="top-right"
      @close="hideHelp"
      z-index="100000"
      customStyle="background:transparent;width:90%"
    >
      <div class="achievementBox">

        <p style="margin-bottom: 10px; padding:10px">
          【游戏介绍】
          <br />蒜瓣闯关是针对中小学的刷题学习平台；游戏设计多种模式，首先可以通过闯关直接获取金币奖励，
          闯关完成后还会随机奖励各种道具，通过道具可以加快小蒜苗的生长，来提升等级。小蒜苗可以收获大蒜，
          大蒜同样可以兑换成金币，金币还可以购买各种道具，商城开放收可以在商城购买学习用品。
          <br />
          <br />【游戏操作】
          <br />首先点击人物头像，来设置年级学习，然后点击闯关，开始选择科目闯关，首先会从简单的开始，在未通关前不可以进行下一关，每关10道题目，全部答对才能通关，通关后会奖励宝箱，点击宝箱会随机掉落道具；关卡越难，奖励越丰厚；
        </p>

      </div>
    </van-popup>

    <!-- 用户信息 -->
    <van-popup
      :show="modalUser"
      closeable
      close-icon="close"
      close-icon-position="top-right"
      @close="hideUser"
      z-index="100000"
      customStyle="background:transparent;width:90%"
    >

      <div class="userout">
        <div class="user-form" v-if="!editUserName">

          <!-- 年级选择按钮 -->
          <div class="user-grade">
            <span class="click_grade" @click="showGrade">
              <img src="../../assets/images/grade_btn.png" alt="" style="width:93px;height:39px">
            </span>
          </div>
          
          <div class="head-portrait">
            <span class="portrait-item portrait0">
              <img src="../../assets/images/portrait0.jpg" alt="" style="width:80px;height:81px">
            </span>
          </div>

          <div class="user-name">
            {{user.name}}
            <van-icon name="edit" @click="editUser"/>
          </div>

          <div class="user-zl">
            <van-row>
              <van-col span="12">
                <div class="uz-i">
                  <van-icon name="gem" color="#8bca43"/>
                </div>
                <div class="uz-i">等级：{{chick.level}}</div>
              </van-col>

              <van-col span="12">
                <div class="uz-i">
                  <van-icon name="like" color="#F44336"/>
                  <div class="uz-i">粉丝：0</div>
                </div>
              </van-col>

            </van-row>

            <van-row>
              <van-col span="12">
                <div class="uz-i">
                  <van-icon name="card" color="#40aaff"/>
                </div>
                <div class="uz-i">积分：0</div>
              </van-col>
              <van-col span="12">
                <div class="uz-i">
                  <van-icon name="medal" color="#FF9800"/>
                </div>
                <div class="uz-i">段位：0</div>
              </van-col>
            </van-row>

          </div>  

        </div>

        <div class="user-form" v-if="editUserName">
          <div class="useredit">
            <form :model="user">
              <p class="pl-title">修改用户名需要1000金币</p>
              <input type="text" v-model="newUserName" placeholder="设置用户名称..." style="background-color:#fff;margin-top:20px;margin-bottom:20px;padding-top:5px;padding-bottom:5px">
              <van-button type="default" size="small" custom-style="background-color:#805c4f;border-color:#6b4c41;color:#fff" @click="saveUser">保存</van-button>
            </form>
          </div>
        </div>
      </div>

    </van-popup>

    <!-- 年级选择 -->
    <van-popup
     :show="modalGrade"
     z-index="10000000"
     customStyle="background:transparent;width:90%"
    >
      <div class="gradeOut">
        <p style="text-align:center;margin-bottom:20px">年级|学期</p>
        <UserGrade v-model="modalGrade"></UserGrade>
      </div>

    </van-popup>


    <!-- 用户登录 -->
    <van-popup
    :show="modalLogin"
    z-index="10000000"
    customStyle="background:transparent;width:90%"
    >
    <div class="loginout">
      <User v-model="modalLogin" @getVisitor="hideLogin"></User>
    </div>
    </van-popup>


    <van-notify id="van-notify" />
    
  </div>

</template>

<script>
// Use Vuex
import store from '../../store/index';
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

import UserGrade from '@/components/UGrade';

import User from '@/components/user' //用户登录
export default {
  data () {
    return {
      shoppingNum: 0, // 购物数量
      modalShop: false, //购买物品
      modalVistor:false,
      modalLogin:true, //用户登录开关
      isStudy:false,
      modalFood: false, //食物弹出框
      modalUnlock: false,//解锁
      tabactive:0,
      tab2active:0,
      tab3active:0,
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
      modalAchievement:false,
      modalGood:false,  //收成弹出
      goodDetails: false,
      sellNum: 1,       //物品出售默认值
      modalHelp:false,
      modalUser:false,
      editUserName: false,
      newUserName: "",
      modalGrade:false,
      swiperContent:[
        {text:'我是小蒜头，欢迎来闯关'},
        {text:'通过闯关可以升级等级和金币哦'},
        {text:'可以点击装扮选择喜欢的服饰哦'},
        {text:'啦啦啦啦，去闯关吧，看看你有多棒！'},
      ],
      randomText:''
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
    HatForg,
    UserGrade,
    User
  },
  created () {
    //本地存档
    store.commit("SAVE_GAME");
  },
   watch: {
    // 监听用户登录 年级学期和游客登录切换监控
    modalLogin(newname,oldname){
      // console.log(newname,oldname)
      if(oldname && !this.modalVistor){
        this.modalGrade = true;
      }
      if(oldname && this.modalVistor){
        this.modalGrade = false;
      }
    }
  },
  computed: {
    //用户
    user() {
      return store.state.user;
    },
    chick () {
      return store.state.chick
    },
    //背包里的食物
    foods() {
      return store.state.foods;
    },
    //收成
    goods() {
      return store.state.goods;
    },
     //当前选中的食物
    currFood() {
      return store.state.currFood;
    },
    //当前收获的物品
    currGood() {
      return store.state.currGood;
    },

    SecondToDate(){
      // console.log(store.state.currFood,"当前食物。。。")
      if(store.state.currFood.eatTime){
        // console.log(store.state.currFood)
        return this.formatter(store.state.currFood.eatTime)
      }else{
        return true
      }
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
    },
    //闯关题目
    subjectList() {
      return store.state.subjectList;
    }
  },
  methods: {
    // 领取成就奖励
    receiveAwards: function(val) {
      store.state.achievement.forEach(obj => {
          if (obj.title === val) {
              store.state.currAchievement = obj;
              store.state.user.money += parseInt(obj.profit);
              Notify({ type: 'success', message: '获得金币'+ parseInt(obj.profit) });
              obj.completeID = 1;
          }
      })
      store.dispatch("receiveawards", val);
    },
    shopSettle: function() {
      var num = this.shoppingNum;
      var name = store.state.currFood.name;
      if (num == 0) {
        Notify({ type: 'danger', message: '请输入购买数量' });
        this.modalShop = false;
        return false;
      } else if (store.state.user.money < store.state.currFood.price * num) {

        Notify({ type: 'danger', message: '不够金币购买' });
        this.modalShop = false;
        return false;
      } else {
        Notify({ type: 'success', message: "成功购买了" + num + "个" + name });
        this.hidePopup();
      }
      store.dispatch("shopsettle", num);
      this.hideShop();
      this.shoppingNum = 0;
    },

    shopAdd: function() {
      this.shoppingNum++;
    },
    shopReduce: function() {
      this.shoppingNum--;
    },
    showShop: function(name) {
      store.commit("shopFood", name);
      this.modalShop = true;
    },

    hideShop: function() {
      this.modalShop = false;
    },

    //文字随机
    goText(){
      let index = 0;
      let timer = setInterval(()=>{
        if(index == this.swiperContent.length-1){
          index = 0;
        }else{
          index++;
        }
        this.randomText = this.swiperContent[index].text
      },2000)
    },
    hideLogin(){
      console.log('游客登录')
      this.modalLogin = false; 
      this.modalVistor = true;
    },
    showGrade(){
      this.modalGrade = true;
    },

    // 打开用户信息面板
    showUser: function() {
      this.modalUser = true;
    },

    hideUser:function(){
      this.editUserName = false;
      this.modalUser = false;
    },
    showPopup(val){
      // console.log("点击。。。。")
      this.skinBox = true;
      if(val == "skin"){
        this.isSkin = true;
      }
      if(val == 'bag'){
        this.isBag = true;
      }
      if(val == 'study'){
        this.isStudy = true;
      }
    },
    hidePopup(){
      let _that = this;
      this.skinBox = false;
      setTimeout(function(){
        _that.isSkin = false;
        _that.isBag = false;
        _that.isStudy = false;
      },400)
    },
    onChange(event){
      console.log('切换。。。。')
    },
    onChange2(event){
      console.log('切换。。。。')
    },
    onChange3(event){
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

    showGood: function(name) {
      store.dispatch("shopGood", name);
      this.modalGood = true;
    },
    hideGood: function() {
      this.modalGood = false;
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
            store.dispatch("savegame");
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
    },

    //点击闯关
    onSubject(val,index){
      store.state.currSubject = val;    //设置当前关卡
      store.state.currSubjectId = index;
      if (val.learning == 0) {
        console.log(val.name + "-未开始闯关");
        this.startSubject(index);
      } else if (val.learning == 2) {
        console.log(val.name + "-已完成闯关");
      } else {
        console.log(val.name + "-正在闯关");
        // const url = '../subject/main';
        mpvue.navigateTo({ url: '../subject/main' });
      }
    },

    startSubject(index){
        console.log('开启激活....',index)
        // val 是下学科的 index
        if(index > 0){
            Notify({ type: 'danger', message: '暂未开通该学科的闯关！敬请期待' });
            return false;
        }
        // 当前关卡的名字
        var name = store.state.currSubject.name;
        // console.log('开启闯关...',name);

        //当前 关卡的 Index
        var pIndex = '';
        store.state.subjectList[index].list.forEach((obj, id) => {
            if (obj.name == name) {
                pIndex = id;
                store.state.currSubject = obj;                    
            }
        });

        if (pIndex > 0) {
            var prveItem = store.state.subjectList[index].list[pIndex - 1].learning;
            if (prveItem == 2) {
                store.state.currSubject.learning = 1;
                Notify({ type: 'success', message: '激活关卡' });
            } else {
                Notify({ type: 'warning', message: '请按顺序通关' });
                return false;
            }
        } else {
            store.state.currSubject.learning = 1;
            // Vue.prototype.$popUp('激活关卡', state.currSubject.name);
            Notify({ type: 'success', message: '激活关卡'+store.state.currSubject.name });

        }
    },

    setSell: function() {
      this.goodDetails = !this.goodDetails;
    },

    sellAdd: function() {
      if (this.sellNum == store.state.currGood.num) {
        Notify({ type: 'danger', message: '不能再加了' });
        return;
      } else {
        this.sellNum++;
      }
    },

    sellReduce: function() {
      if (this.sellNum == 1) {
        Notify({ type: 'danger', message: '不能再减了' });
        return;
      } else {
        this.sellNum--;
      }
    },

    commitSell: function() {
      this.goodDetails = !this.goodDetails;
      Notify({ type: 'success', message: "出售了" +  store.state.currGood.num +"个" +store.state.currGood.name });
      store.dispatch("sellgood", this.sellNum);
      this.modalGood = false;
    },
  

    showHelp: function() {
      this.modalHelp = true;
    },

    hideHelp: function() {
      this.modalHelp = false;
    },

    editUser: function() {
      this.editUserName = !this.editUserName;
    },
    saveUser: function() {
      if (this.newUserName == "") {
        // console.log("请输入用户名称");
        Notify({ type: 'warning', message: '请输入用户名称' });
        return false;
      } else {
        Notify({ type: 'success', message: '修改成功' });
        this.editUserName = !this.editUserName;
        store.dispatch("setusername", this.newUserName);
        
        //this.$store.dispatch('savegame');
      }
    },

  },
  mounted () {
    this.goText(); //文字随机播放
    
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
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  z-index: 5;
  overflow: hidden;
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
.navList li.n-green {
  background: #8BC34A;
  border: 2px solid #639629;
}
.navList li.n-green .navIcon {
  color: #f4ff85;
  text-shadow: none;
}
.navList li.n-green .navName{
  background: #64962a;
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

.gradeOut{
    text-align: center;
    background: #ead0b7;
    border:5px solid #845d4f;
    border-radius: 10px;
    font-size:14px;
    line-height:1.5;
    padding-top:10px;
}
.loginout{
  text-align: center;
    background: #ead0b7;
    border:5px solid #845d4f;
    border-radius: 10px;
    font-size:14px;
    line-height:1.5;
    padding-top:10px;
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
.shoppGood{
  width: 100%;
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
.aList li.onin .van-button--primary,
.aList li.onin .van-button--primary:hover {
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



/*subject*/
.subject-list {
  display: flex;
  flex-wrap: wrap;
  height: 270px;
  overflow-y: auto;
  /* justify-content: space-around; */
}
.subject-list li {
  position: relative;
  /* flex: 0 0 25%; */
  padding: 5px;
  width: 20%;
  margin-left:8px;
}
.subject-img {
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}
.subject-img:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
}
.subject-img img{
  display: block;
  width: 100%;
  border: 1px solid #b9aead;
  box-shadow: 0 2px 0px #d2d2d2;
  height: 100px;
}
.subject-name {
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
}
.learning-label {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 5px 10px;
  border-radius: 30px;
  background: #969696;
  color: #fff;
  width: 56px;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 12px;
  z-index: 9;
}
.over .learning-label {
  background: #03A9F4;
}
.subject-list li.on .subject-img:after{
  display: none;
}
.subject-list li.on .learning-label {
  top: 5px;
  left: 5px;
  transform: translate(0, 0);
  border-radius: 3px;
  font-size: 12px;
  padding: 2px;
  width: 45px;
  background: #4CAF50;
}
.num-form {
  width: 128px;
  display: flex;
  margin: 8px auto;
}
.shop-btn {
  flex: 0 0 50px;
  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 25.6px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shop-input {
  margin: 0 6.4px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #fff;
  line-height: 30px;
}
.shoppingout{
  padding-left: 65px;
  padding-right: 65px;
  padding-bottom: 40px;
}

/* 帮助按钮 */
.navHelp {
  position: absolute;
  bottom: 1px;
  right: 15px;
  z-index: 21;
}
.navHelp li {
  position: relative;
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 50%;
  background: #f7f14c;
  border: 2px solid #f5bd6a;
}
.navHelp li .navIcon {
  color: #fb5b32;
  text-shadow: none;
}
.navHelp .navName{
  background: #fb5b32;
}


/*   游戏标题  */
.game-title{
	position: fixed;
	position: absolute;
	top: 16px;
	left:16px; 
	z-index: 30;
	color: #ffffff;
	font-size:24px;
	text-shadow: 1px 1px 2px #515a6e;
}
.useredit{
  padding-top: 20px;
  padding-bottom: 20px;
}
.userout{
  text-align: center;
  background: #ead0b7;
  border:5px solid #845d4f;
  border-radius: 10px;
  font-size:14px;
  line-height:1.5;
  padding-top:10px;
  padding-bottom: 10px;
}

/* user 用户*/
.user-box {
  /* position: fixed; */
  position: relative;
  width: 12%;
  top: 56px;
  left: 16px;
  z-index: 30;
  display: flex;
  align-items: center;
  padding: 4px 12px 4px 4px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 48px;
  padding-left: 50px;
}

.user-logo {
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  color: #ffbb38;
  background: #8c3530;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  position: absolute;
  left: 0;
  overflow: hidden;
}
.user-logo .portrait-item {
  border: none; 
  box-shadow: none;
  width: 40px;
  height: 40px;
}
.user-level {
  position: absolute;
  bottom: -3px;
  left: 50%;
  color: #fff;
  background: #8c352f;
  font-size: 10.4px;
  padding: 0 6px;
  border-radius: 5px;
  border: 1px solid #fbddb1;
  transform: translateX(-50%);
}
.user-money {
    display: flex;
    color: #ffb304;
    font-size: 11.2px;
    padding-top: -0.8px
}
.user-name {
  font-size: 9px;
  font-weight: 600;
  color: #8c3530;
}
.user-mi {
  line-height: 1;
  color: #F90;
  display: inline-block;
  vertical-align: middle;
  margin-top: 2.5px;
}

.uz-i {
  /* padding: 5px;
  display: inline-block;
  color: #865d20;
  vertical-align: top; */
  /* float: left; */
  display: inline-block;
  margin-left: 4px;
  padding-bottom: 5px;
}
.user-form {
  width: 80%;
  margin: 0 auto;
}
.user-form button {
  display: block;
  margin: 0 auto;
}
.user-form .user-name {
  text-align: center;
  font-size: 16px;
}
.user-form .user-name i {
  color: #926625;
  display: inline-block;
  vertical-align: middle;
  margin-top: -3px;
  margin-left: 7px;
}
.user-form 
.user-zl {
  width: 80%;
  margin: 15px auto 0;
}

.user-grade .click_grade{
  display: block;
  width: 93px;
  height: 39px;
  overflow: hidden;
  position: absolute;
  left: 6px;
  top:7px;
}

/* 头像 */
.head-portrait {
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.portrait-item {
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #f7e1cb;
  box-shadow: 0 0 3px #7d4f3e;
  /* background: url(../images/portrait0.jpg) no-repeat;
  background-size: 100% 100%; */
}
.chick-swiper{background: rgb(250, 222, 61,0.8);padding: 5px;border-radius: 10px;z-index: 9;
  text-align: center;border: 2px solid #ff8800;
  /* opacity: 1; */
  width: 100%;
  top: 30px;
  animation: textPopUp 1s linear;
}
.chick-swiper span{color: #000;font-size: 12px;text-align: center;}
</style>
