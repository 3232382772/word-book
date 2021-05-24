<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  .nav-bar {
    width: 100%;
    height: 45px;
    font-size: 16px;
    line-height: 45px;
    background-color: #66CCFF;
    color: #fff;
    display: flex;
    text-align: center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  
  .left, .right {
    width: 80px;
  }

  .center {
    flex: 1;
  }
</style>