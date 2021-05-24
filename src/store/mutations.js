export default {
  //更换单词本
  changeBook(state, payload) {
    state.currentBook = state.allBooks[payload.name]
    //重置每个单词的状态
    state.currentBook.forEach(item => {
      item.status = 0
    })
    console.log(`当前单词本为${payload.name}`)
  },
  //添加单词本
  addBook(state, payload) {
    let book = payload.data.map(item => {
      item.status = 0
      item.selected = false
      return item
    })
    state.allBooks[payload.name] = book
    state.currentBook = state.allBooks[payload.name]
    console.log('添加到单词书')
  },
  //收藏单词
  collectWord(state, payload) {
    payload.selected = !payload.selected
    if(payload.selected) {
      state.collectedWords.push(payload)
    } else {
      let index = state.collectedWords.indexOf(payload)
      state.collectedWords.splice(index, 1)
    }
    console.log(state.collectedWords)
  },
  //变更单词状态： 0：默认、1：记住了、2：不知道
  changeStatus(state, {word, status}) {
    word.status = status
  },
  //切换单词本名字
  changeBookName(state, {name}) {
    const bookName = name.split('_')[0]
    const unit = parseInt(name.split('_')[1]) + 1
    state.currentBookName = `${state.bookNameList[bookName]} unit${unit[1] < 9 ? 0 + unit : unit}`;
  }
}