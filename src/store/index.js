// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import footList from '../utils/stateFood';
import achievements from '../utils/stateAchievement';
import subjects from '../utils/subject';


import WXrequest from '../utils/wx-request'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
        uid: 0,             //用户ID
        gradeId:0,          //用户年级ID
        termId: 0,          //用户年级学期ID
        firstGame: 0, 
        name: '闯关小英雄',
        money: 3000,    
        achievementNum: 0, // 获得成就总数
    },

    chick:{
      level: 1,            // 等级
      eat: false,          // 是否在进食
      currentSuit: '',     // 当前套装
      currentHat: '',      // 当前帽子
      currentClothes: '',  // 当前衣服

      currentPlay:'',      // 当前装扮
      currentCompId:0,     // 当前组件索引

      componentSuit:'suit-default',       // 默认套装组件
      componentHat: 'hat-default',        // 默认帽子组件
      componentClothes: 'clothes-default' // 默认衣服组件
    },

    foods:footList.foodList,
    currFood: {},     // 当前选中的食物
    currGood: {},     // 当前收获的物品
    endDate: '',      // 结束时间
    achievement:achievements.achievements,
    content: '',      // 倒计时
    value: 0,  // 进度条
    
    subjectList: subjects.subjects, // 学习题目
    currSubject: {},  // 当前关卡
    currSubjectId:0,  //当前学科
    goods: [],// 物品，收获物品
    token: null,
    currId:0,  //当前用户id
    currNickName:'' //当前用户昵称
  },
  mutations: {
  
    SHOP_SETTLE(state, num) {
        state.currFood.num = num;
        state.user.money = state.user.money - state.currFood.price * num;
        console.log("购买了" + num + "个" + state.currFood.name);
    },
    //更改uid
    SAVE_UID:(state,uid)=>{
        state.user.uid = uid;
        console.log("uid......",state.user.uid)
    },
    //登录后设置用户id和name
    LOGIN_ID_NAME(state,val){
        state.currId = val.id;
        state.currNickName = val.nickName;
    },
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    //存档
    SAVE_GAME(state){
        let achievement = state.achievement.map(obj => {
            return {
              id: obj.id,
              count: obj.completeCurrCount,
              complete: obj.complete,
              completeID: obj.completeID
            }
          });
        let data = {
            achievement,
            endDate: state.endDate,
            currFood: state.currFood,
            currGood: state.currGood,
            currSubject: state.currSubject,
            currSubjectId:state.currSubjectId,
            chick: state.chick,
            user: state.user,
            foods: state.foods,
            goods: state.goods,
            subjectList: state.subjectList,
            token:state.token
        };
        wx.setStorageSync('farmDate', JSON.stringify(data));
        
        //更新用户等级和金币数
        let user_data={
            userId:data.user.uid,
            level:data.chick.level,
            goldCount:data.user.money
        }
        
        WXrequest.post_a({
            url:'/api/systemconfig/student/update_student_levelgold',
            data:user_data
        }).then(res => {
            if(res.result == 'success'){
                console.log('更改了用户名，，，，成功更新等级和金币数');
            }else{
                console.log('更新等级和金币数失败');
            }
        })
    },
    // 设置新用户名称
    SET_USER_NAME(state, val) {
        state.user.name = val;
        state.user.money -= 1000;
    },
    SELL_GOOD(state, num) {
        state.user.money += state.currGood.price * num;
        state.currGood.num = state.currGood.num - num;
        console.log(state.user.money);
        console.log(state.currGood.num);
        if (state.currGood.num == 0) {
            // 出售完后删除
            state.goods.forEach((obj, index) => {
                if (obj.name === state.currGood.name) {
                    state.goods.splice(state.goods.indexOf(index), 1);
                }
            });
        }
    },
    SHOW_GOOD(state, name) {
        // 得到查看的物品
        state.goods.forEach(obj => {
            if (obj.name === name) {
                state.currGood = obj
            }
        });
    },
    //获取收成
    GET_GOOD(state,val){
        if(state.goods.length){
            if(state.goods.indexOf(val)!==-1){ //包含
                state.goods[state.goods.indexOf(val)].num++
            }else{
                val.num = 1;
                state.goods.push(val);
            }
        }else{
            val.num = 1;
            state.goods.push(val);
        }
        // console.log('获取收成。。。',state.goods)
    },
    //设置服装
    REPLACE_DRESS(state, price) {
        state.chick.currentCompId = price.type;
        state.chick.currentPlay = price.type+price.pid;
        if (price.type == 0) {
            state.chick.currentSuit = price.pid;
            state.chick.componentSuit = 'suit-' + price.pid

        } else if (price.type == 1) {
            state.chick.currentHat = price.pid;
            state.chick.componentHat = 'hat-' + price.pid;
        } else {
            state.chick.currentClothes = price.pid;
            state.chick.componentClothes = 'clothes-' + price.pid;
        }
    },
    shopFood(state, name) {
        // 得到需要购买的食物
        state.foods.forEach(obj => {
            if (obj.name === name) {
                state.currFood = obj
            }
        });
    },
    UNLOCK_FOOD(state, price) {
        state.currFood.unlock = 1;
        state.user.money = state.user.money - price;
    },

    FEED_CLICK(state, endDate) {
        state.endDate = endDate;
        state.currFood.num--;   // 扣除食物数量
        state.chick.eat = true;
        this.commit('checkAchievemnt', 1);
        this.commit('SAVE_GAME');
    },

    // 获得成就方法
    checkAchievemnt(state, id) {

        // 寻找目标一致且未完成的成就
        let targetList = state.achievement.filter(obj => obj.completeTypeId === id && !obj.complete);
        console.log(targetList,'dddd');

        // 寻找目标植物
        // let targetPlant = state.plants.find(obj => obj.id === id);

        // 执行目标的奖励方式
        targetList.forEach(obj => {
            if (obj.completeCurrCount < obj.completeNeedCount) {
                obj.completeCurrCount += 1;
                if (obj.completeCurrCount >= obj.completeNeedCount) {
                    obj.complete = true;
                    state.user.achievementNum++;
                    // if (typeof obj.oncomplete === 'function') {
                    //     obj.oncomplete(state, obj);
                    //     state.user.achievementNum++;
                    // }
                }
            }
        })

    },
    // 进食结束
    END_EAT(state) {
        state.enddate = '';    // 倒计时结束清零结束时间
        state.chick.eat = false;     // 进食状态设为false
        // this.commit('SAVE_GAME');          // 存档
        state.content = '浇水结束';
        setTimeout(function () {
            state.content = '同学，好好学习多挣金币哦！';
        }, 2000)
    },

    //每道题金币更新
    SET_GOLD(state,val){
        state.user.money = val.goldCount;
        state.chick.level = val.level;
    },
    //用户年级学期设置
    SET_USER_GRADE_TERM(state,val){
        state.user.uid = val.currId;
        state.user.name = val.currNickName;
        state.user.gradeId = val.gradeId;
        state.user.termId = val.termId;
    },
  },
  actions: {
     // 领取成就奖励
     receiveawards(context, value) {
        context.commit('SAVE_GAME');
    },
    // 存档
    savegame(context) {
        context.commit('SAVE_GAME');
    },
    // 购买商品
    shopsettle(context, value) {
        context.commit("SHOP_SETTLE", value);
        context.commit('SAVE_GAME');
    },
    //设置用户年级和学期、用户id、用户名称
    setusergrade(context,value){
        context.commit('SET_USER_GRADE_TERM',value);
        context.commit('SAVE_GAME');
    },
    saveuserId(context,value){
        context.commit('SAVE_UID',value);
        context.commit('SAVE_GAME');
    },
    //用户第一次登录使用账号 登录成功后报错token  
    Login(context,userInfo){
        return new Promise((resolve,reject)=>{
            WXrequest.post_a({
                url:'/api/user/login',
                data:userInfo
            }).then(res => {
                if(res.result == 'success'){
                    context.commit('SET_TOKEN',res.token)
                }
                resolve(res)
            }).catch(error=>{
                console.log(error);
                reject(error);
            })
        })
    },
    // 设置新的用户名
    setusername(context, value) {
        context.commit('SET_USER_NAME', value);
        context.commit('SAVE_GAME');
    },
     // 出售物品
     sellgood(context, value) {
        context.commit('SELL_GOOD', value);
        context.commit('SAVE_GAME');
    },
    // 查看物品详情
    shopGood(context, value) {
        context.commit('SHOW_GOOD', value);
    },
    // 设置服装
    replacedress(context, value) {
        context.commit("REPLACE_DRESS", value);
        context.commit('SAVE_GAME');
    },
    // 解锁商品
    unlockfood(context, value) {
        context.commit("UNLOCK_FOOD", value);
        context.commit('SAVE_GAME');
    },
    endeat(context) {
        context.commit('END_EAT');
    }
  }
})

export default store
