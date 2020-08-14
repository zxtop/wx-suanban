// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    chick:{

      currentSuit: '',     // 当前套装
      currentHat: '',      // 当前帽子
      currentClothes: '',  // 当前衣服

      currentPlay:'',      // 当前装扮
      currentCompId:0,     // 当前组件索引

      componentSuit:'suit-default',       //默认套装组件
      componentHat: 'hat-default',        // 默认帽子组件
      componentClothes: 'clothes-default' // 默认衣服组件

    }
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
    }
  },
  actions: {
    // 设置服装
    replacedress(context, value) {
        context.commit("REPLACE_DRESS", value);
        // context.commit('SAVE_GAME');
    },
  }
})

export default store
