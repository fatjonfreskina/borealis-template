<script setup>
import NavBar from "./components/Navbar.vue";
import MyFooter from "./components/MyFooter.vue";
</script>

<template>
  <body>
    <NavBar />
    <main>
      <router-view />
    </main>
    <MyFooter />
  </body>
</template>

<style scoped>
body{
  height: 100%;
  min-height: 100%;
}

main{
  min-height: 100%;
  overflow: auto;
  padding-bottom: 5%;
}
</style>
