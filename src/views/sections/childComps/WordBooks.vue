<template>
  <div class="word-books">
    <el-collapse>
      <el-collapse-item title="恋练有词" name="1">
        <div v-for="index in 2" :key="index" @click="itemClick('lianci', index - 1)" class="unit" data-name="lianci">Unit {{index|showUnit}}</div>
      </el-collapse-item>
      <el-collapse-item title="四级词汇" name="2">
        <div v-for="index in 2" :key="index" @click="itemClick('cet4', index - 1)" 
        class="unit" data-name="cet4">Unit {{index|showUnit}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { request } from 'network/request'

export default {
  name: 'WordBooks',
  data () {
    return {
      books: {}
    }
  },
  methods: {
    itemClick(bookName,index) {
      const name = `${bookName}_${index}`
      if(!this.books[name]) {
        request(`/${bookName}.json`).then(res => {
          let book = res.data[index]
          this.books[name] = book
          this.$store.dispatch('selectBook', {
            data: book,
            name: name
          })
          this.$toast.show('成功切换单词本', 500)
        })
      } else {
        this.$store.dispatch('selectBook', {
          name: name
        }).then(res => {
          this.$toast.show('成功切换单词本', 500)
        })
      }

      //使用事件总线重置记单词界面的knowWords数组
      this.$eventBus.$emit('changeBook', name)
    },
  },
  filters: {
    showUnit(index) {
      return index < 10 ? '0' + index : index
    }
  }
}
</script>

<style scoped>
  .word-books {
    width: 100%;
    height: calc(100vh - 93px);
    box-sizing: border-box;
    padding: 5px 10px;
  }

  .unit {
    height: 30px;
    line-height: 30px;
    border-bottom: solid 1px rgb(240,240,240);
  }
</style>