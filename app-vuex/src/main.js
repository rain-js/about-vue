import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment(state) {
        state.count++
      }
    }
})

new Vue({
  render: h => h(App)
}).$mount('#app')

console.log('before commit: ', store.state.count)
store.commit('increment')
console.log('after commit: ', store.state.count)
