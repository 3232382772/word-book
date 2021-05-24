<template>
  <div class="words-display">
    <div class="words">
      <div v-if="length > 0">{{showWord}}</div>
      <div v-else>{{showLoading}}</div>
    </div>
    <div class="translator" @click="toShowTrans">
      <div v-if="isShow" class="transtion">
        <div v-for="(item, index) in translation" :key="index">{{item}}</div>
      </div>
      <div v-else class="tip">{{clickTip}}</div>
    </div>
    <div class="control-panel">
      <el-row type="flex" justify="space-around">
        <el-button icon="el-icon-star-off" 
          circle class="collect" 
          :class="{collected: isCollected}"
          @click="collectWord"></el-button>
        <el-button type="primary" round @click="nextWord">下一个</el-button>
        <el-button type="danger" round @click="dontKnow">不清楚</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { getRandom, throttle } from 'common/utils'

export default {
  name: 'WordsDisplay',
  data () {
    return {
      showLoading: '请选择单词本',
      clickTip: '点击显示翻译',
      isShow: false,
      currentIndex: 0,
      knowWords: [],//存放知道的单词的索引，方便后面随机展示单词
      nextWord: function(){},
      dontKnow: function(){},
    }
  },
  computed: {
    ...mapState({
      words: 'currentBook'
    }),
    ...mapGetters({
      length: 'wordsLength'
    }),
    currentWord() {
      return this.words[this.currentIndex]
    },
    showWord() {
      return this.currentWord ? this.currentWord.word : ''
    },
    translation() {
      return this.currentWord ? (this.currentWord.translation ? this.currentWord.translation.split(' ') : ['不好意思，没写进去']) : ''
    },
    isCollected() {
      return this.currentWord ? this.currentWord.selected : false
    }
  },
  methods: {
    //切换翻译显示
    toShowTrans() {
      if(!this.isShow) {
        this.isShow = true
      }
    },
    //收藏单词
    collectWord() {
      if(this.length > 0) {
        this.$store.commit('collectWord', this.currentWord)
      }
    },
    //下一个单词
    handleNextWord() {
      if(this.length === 0) return 
      console.log(this.knowWords)
      //变更单词的状态
      this.$store.commit('changeStatus', {
        word: this.currentWord,
        status: 1
      })
      //随机生成下一个索引值，但是不能使knowWords里面存放的索引。
      if (this.knowWords.length !== this.length - 1) {
        this.knowWords.push(this.currentIndex)
        let index = getRandom(0, this.length-1)
        
        while(this.knowWords.includes(index)) {
          index = getRandom(0, this.length-1)
        }
        this.currentIndex = index
      } else if (this.knowWords.length === this.length - 1) {
        this.$toast.show('最后一个单词了', 1000)
      } 
      //重置翻译显示
      this.isShow = false
    },
    //不知道单词
    handleDontKnow() {
      if(this.length === 0) return
      //变更单词状态
      this.$store.commit('changeStatus', {
        word: this.currentWord,
        status: 2
      })
      //生成随机的索引，但是不能是知道单词数组里面的索引，也不能与当前索引相同
      if(this.knowWords.length !== this.length - 1) {
        let index = getRandom(0, this.length-1)
        while(index === this.currentIndex || this.knowWords.includes(index)) {
          index = getRandom(0, this.length-1)
        }
        this.currentIndex = index
      } else if (this.knowWords.length === this.length - 1) {
        this.$toast.show('最后一个单词了', 1000)        
      }
      //重置单词显示
      this.isShow = false
    }
  },
  created () {
    this.nextWord = throttle(this.handleNextWord, 500)
    this.dontKnow = throttle(this.handleDontKnow, 500)
  },
  mounted () {
    this.$eventBus.$on('changeBook', name => {
      this.knowWords = []
    })
  }
}
</script>

<style scoped>
  .words-display {
    width: 100%;
  }

  .words {
    height: 200px;
    line-height: 200px;
    font-size: 40px;
    text-align: center;
    border-bottom: solid 1px #ddd;
  }

  .translator {
    height: 200px;
    font-size: 16px;
    padding: 10px;
    border-bottom: solid 1px #ddd;
  }

  .tip {
    height: 100%;
    line-height: 200px;
    text-align: center;
  }

  .transtion{
    height: 100%;
  }

  .transtion div {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: #000;
  }
  
  .control-panel {
    width: 100%;
    margin-top: 25px;
  }

  .collect {
    box-shadow: 0 0 2px rgb(248,248,248);
    border: solid 1px #aaa;
    font-size: 20px;
  }

  .collected{
    background: pink;
    color: #fff;
    border: solid 1px pink;
  }
</style>