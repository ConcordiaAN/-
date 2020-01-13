import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  city: '上海'
}

const mutations = {
  changeCity (state, pickedCity) {
    state.city = pickedCity
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store