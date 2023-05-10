<template>
  <div :style="{height: '100vh'}">
    
    <headerSection/>

    <router-view></router-view>

  </div>
</template>

<script>
import headerSection from './sections/header.vue';

export default {
  name: 'App',
  components: {
    headerSection
  },
}
</script>

<style lang="scss">
#app {
  font-family: "roboto_regular", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $secondary;
}

@import'~bootstrap/dist/css/bootstrap.css';

</style>
