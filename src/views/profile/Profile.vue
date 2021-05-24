<template>
  <div id="profile">
    <info />
    <options/>
  </div>
</template>

<script>
import Info from './childComps/info'
import Options from './childComps/Options'

export default {
  name: 'Profile',
  components: {
    Info,
    Options
  }
}
</script>

<style scoped>
  #profile {
    background-color: rgb(248,248,248);
    height: 100vh;
  }
</style>