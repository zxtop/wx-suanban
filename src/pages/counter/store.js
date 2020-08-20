// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import footList from '../../utils/stateFood';
import achievements from '../../utils/stateAchievement';
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
    endDate: '',      // 结束时间
    achievement:achievements.achievements,
    content: '',      // 倒计时
    value: 0,  // 进度条
  },
  mutations: {
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
        // this.commit('checkAchievemnt', 1);
        // this.commit('SAVE_GAME');
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
                    if (typeof obj.oncomplete === 'function') {
                        obj.oncomplete(state, obj);
                        state.user.achievementNum++;
                    }
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
  },
  actions: {
    // 设置服装
    replacedress(context, value) {
        context.commit("REPLACE_DRESS", value);
        // context.commit('SAVE_GAME');
    },
    // 解锁商品
    unlockfood(context, value) {
        context.commit("UNLOCK_FOOD", value);
        // context.commit('SAVE_GAME');
    },
    endeat(context) {
        context.commit('END_EAT');
    }
  }
})

export default store
