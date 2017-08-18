import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const moduleA = {
  state: {
    count: 0,
    userRouter: {
      homeA: {pre:'', next:''},
      homeB: {},
      homeC: {},
      homeD: {}
    }
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