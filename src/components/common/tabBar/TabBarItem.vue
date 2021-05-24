<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="icon"><slot name="icon"></slot></div>
    <div v-else class="icon"><slot name="icon-active"></slot></div>
    <div :class="{active: isActive}"><slot name="text"></slot></div>
  </div>  
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
    }
  },
  props: {
    path: {
      type: String,
      default: ''      
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    }
  },
  methods: {
    itemClick() {
      if(!this.isActive) {
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style >
  .tab-bar-item {
    flex: 1;
    font-size: 14px;
    height: 49px;
    text-align: center;
  }

  .tab-bar-item .icon {
    height: 20px;
    margin-top: 3px;
  }

  .tab-bar-item img {
    width: 20px;
    height: 20px;
  }

  .active {
    color: #409EFF;
  }
</style>