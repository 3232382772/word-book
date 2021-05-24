<template>
  <div id="Sections">
    <sections-nav/>
    <word-books/>
  </div>
</template>

<script>
import SectionsNav from './childComps/SectionsNav'
import WordBooks from './childComps/WordBooks'

export default {
  name: 'Sections',
  components: {
    SectionsNav,
    WordBooks
  }
}
</script>

<style scoped>

</style>