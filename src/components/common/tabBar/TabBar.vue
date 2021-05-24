<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  .tab-bar {
    display: flex;
    height: 49px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  }
</style>