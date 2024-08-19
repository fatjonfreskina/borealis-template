<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});

const msg = ref('Welcome to Your Vue.js App');
const companyName = ref('Company Name');
const companyQuote = ref('Company Quote Here ...');
</script>

<template>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">{{ title }}</h1>
        <p class="fs-5 text-muted"> {{ subtitle }}</p>
    </div>
</template>
