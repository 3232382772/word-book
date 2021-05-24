<template>
  <div class="my-code">
    <nav-bar class="nav-bar">
      <img src="~assets/img/back.svg" alt="" slot="left" @click="back">
    </nav-bar>
    <div class="content">
      <div class="my-info">
        <div class="info-head">
          <img src="~assets/img/head.jpeg" alt="">
        </div>
        <div class="info-name">
          我不是咸鱼逗亮
        </div>
      </div>
      <div class="code-img">
        <img src="~assets/img/code.png" alt="">
      </div>
      <div class="info-tip">
        扫一扫上面的二维码图案，加我微信
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
  name: 'MyCode',
  components: {
    NavBar
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .my-code {
    height: 100vh;
    width: 100%;
    background: rgb(248,248,248);
    position: relative;
    z-index: 99;
  }

  .nav-bar {
    background: rgb(248,248,248);
    box-shadow: none;
  }

  .nav-bar img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .content {
    background: #fff;
    position: absolute;
    width: 90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

  .my-info {
    width: 100%;
    height: 80px;
    display: flex;
  }

  .info-head {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-head img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .info-name {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #000;
    font-weight: bold;
    padding-left: 10px;
  }

  .code-img {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  .code-img img {
    width: 100%;
  }

  .info-tip {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #909399;
  }
</style>