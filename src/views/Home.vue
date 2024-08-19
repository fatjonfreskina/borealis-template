<script setup>
import Carosello from "../components/Carosello.vue";
import Gallery from "../components/Gallery.vue";
import { ref } from 'vue';

const msg = ref("Welcome to Your Vue.js App");
const companyName = ref("Company Name");
const companyQuote = ref("Company Quote Here ...");
</script>

<template>
  <Carosello />
  <Gallery />
</template>