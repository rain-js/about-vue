import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false},
    ]
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(state => state.done)
    }
  },
  // 同步
  mutations: {
    increment(state, n) {
      !n && (n = 1)
      state.count += n
    }
  },
  // 异步
  actions: {
    plus({commit}, n) {
      console.log('call...')
      setTimeout(function() {
        console.log('After three seconds commit the mutation...')
        commit('increment', n)
      }, 3000)
    }
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
