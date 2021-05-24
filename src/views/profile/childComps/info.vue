<template>
  <div class="info">
    <div class="info-img">
      <div><img src="~assets/img/head.jpeg" alt=""></div>
    </div>
    <div class="info-name">
      <p class="name">我不是咸鱼逗亮</p>
      <p class="number">微信号: Cl3232382772</p>
    </div>
    <div class="info-code">
      <p><img src="~assets/img/code_small.svg" alt="" @click="showMyCode"><i>>></i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  methods: {
    showMyCode() {
      this.$router.push('/code')
    }
  }
}
</script>

<style scoped>
  .info {
    width: 100%;
    height: 200px;
    display: flex;
    background-color: #fff;
    box-shadow: 0 1px 3px rgb(230,230,230);
  }

  .info-img {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-name {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info-code {
    flex: 1;
    text-align: right;
  }

  .info-img img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .info-name .name {
    font-size: 16px;
    font-weight: bold;
    color: #303133;
  }

  .info-name .number {
    font-size: 14px;
    color: #909399;
  }

  .info-code img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .info-code p {
    padding-right: 10px;
    margin-top: 100px;
  }
</style>