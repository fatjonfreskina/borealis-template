<script setup>
import CatalogGallery from "../components/CatalogGallery.vue";
import Title from "../components/Title.vue";
import { ref } from 'vue';

const msg = ref("Welcome to Your Vue.js App");
const companyName = ref("Company Name");
const companyQuote = ref("Company Quote Here ...");
</script>

<template>
  <Title
    title="Catalog"
    subtitle="Choose the best plan for your business"/>
  <CatalogGallery />
</template>
