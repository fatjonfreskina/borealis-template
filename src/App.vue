<script setup>
import NavBar from './components/Navbar.vue';
import MyFooter from './components/MyFooter.vue';
</script>

<template>
  <NavBar/>
  <router-view/>
  <MyFooter/>
</template>

<style scoped>
main {
    margin-bottom: 56px;
    /* background-color: #f8f9fa; */
}
</style>
