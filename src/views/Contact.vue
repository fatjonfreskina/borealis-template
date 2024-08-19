<script setup>
import ContactForm from '../components/ContactForm.vue';
import Title from '../components/Title.vue';
import { ref } from 'vue';

const msg = ref ('Welcome to Your Vue.js App');
const companyName = ref ('Company Name');
const companyQuote = ref ('Company Quote Here ...');
</script>

<template>
    <Title title="Contact" subtitle="" />
    <ContactForm />
</template>

