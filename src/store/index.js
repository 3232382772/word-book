import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  allBooks: {},
  currentBook: [],
  collectedWords: [],
  currentBookName: '',
  bookNameList: {
    'cet4': '四级核心词汇',
    'lianci': '恋练有词'
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store