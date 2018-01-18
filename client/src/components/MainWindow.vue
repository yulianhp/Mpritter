<template lang="html">
  <div class="container">
    <MotherNavbar/>
    <PostsList/>
    <router-view/>
  </div>
</template>

<script>
import MotherNavbar from './MotherNavbar'
import PostsList from './PostsList'
export default {
  name: 'MainWindow',
  components: {
    MotherNavbar,PostsList
  }
}
</script>

<style lang="css">
</style>
