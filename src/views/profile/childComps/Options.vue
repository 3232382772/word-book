<template>
  <div class="options">
    <div class="option" @click="showCollection">
      <div class="icon"><img src="~assets/img/select.svg" alt=""></div>
      <div class="text">我的收藏</div>
      <div class="more">>></div>
    </div>
    <div class="option" @click="showTips">
      <div class="icon"><img src="~assets/img/tips.svg" alt=""></div>
      <div class="text">提示</div>
      <div class="more">>></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Options',
  methods: {
    showCollection() {
      this.$router.push('/collection')
    },
    showTips() {
      this.$router.push('/tips')
    }
  }
}
</script>

<style scoped>
  .options {
    width: 100%;
    background: #fff;
    margin-top: 10px;
    box-shadow: 0 1px 3px rgb(230,230,230);
  }

  .option {
    height: 50px;
    display: flex;
    align-items: center;
  }

  .option:nth-child(n-1) {
    border-top: solid 1px rgb(230,230,230);
  }

  .option img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .icon {
    width: 40px;
    text-align: center;
  }

  .text {
    flex: 1;
    padding-left: 10px;
  }

  .more {
    width: 40px;
    text-align: center;
  }
</style>