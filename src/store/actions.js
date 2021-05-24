export default {
  //选择单词本
  selectBook({state, commit}, payload) {
    if(state.allBooks.hasOwnProperty(payload.name)) {
      commit('changeBook', payload)
    } else {
      commit('addBook', payload)
    }
    commit('changeBookName', payload)
  },
}