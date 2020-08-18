// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import footList from '../../utils/stateFood';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
        uid: 0,       //用户ID
        gradeId:0,    //用户年级ID
        termId: 0,    //用户年级学期ID
        firstGame: 0, // 
        name: '闯关小英雄',
        money: 3000,    
        achievementNum: 0, // 获得成就总数
    },
    chick:{
      currentSuit: '',     // 当前套装
      currentHat: '',      // 当前帽子
      currentClothes: '',  // 当前衣服

      currentPlay:'',      // 当前装扮
      currentCompId:0,     // 当前组件索引

      componentSuit:'suit-default',       //默认套装组件
      componentHat: 'hat-default',        // 默认帽子组件
      componentClothes: 'clothes-default' // 默认衣服组件
    },
    foods:footList.foodList,
    currFood: {},     // 当前选中的食物
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
}
  }
})

export default store
