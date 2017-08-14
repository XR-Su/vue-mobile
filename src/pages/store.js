import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const moduleA = {
  state: {
    headerText: '首页',
    count: 0,
  },
  mutations: {
    increment (state) {
      state.count++
    },
  },
  actions: {
    actionTest ({commit, state}) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('increment');
            resolve();
          }, 1000)
      })
    } 
  }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
  }
})

export default store;