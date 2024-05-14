<script setup>
import NavBar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar/>
  <router-view/>
  <Footer/>
</template>

<style scoped>
main {
    margin-bottom: 56px;
    /* background-color: #f8f9fa; */
}
</style>
