<script setup>
import Title from '../components/Title.vue'
import PricingPlans from '../components/PricingPlans.vue'
import { ref } from 'vue';

const msg = ref('Welcome to Your Vue.js App');
const companyName = ref('Company Name');
const companyQuote = ref('Company Quote Here ...');
</script>

<template>
    <Title title="Pricing" subtitle="Choose the best plan for your business" />
    <PricingPlans />
</template>

