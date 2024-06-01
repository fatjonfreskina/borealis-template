<script>
import ContactForm from '../components/ContactForm.vue';
import Title from '../components/Title.vue';
import Divider from '../components/Divider.vue';
import { DeprecationTypes } from 'vue';
export default {
    name: 'Contact',
    components: {
        ContactForm,
        Title,
        Divider
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            companyName: 'Company Name',
            companyQuote: 'Company Quote Here ...'
        }
    },
    mounted() {
        console.log('Contact view mounted.')
    },
    methods: {
        // TODO: implement captcha + form submission
    },
    computed: {
        // Add your computed properties here
    },
    watch: {
        // Add your watch properties here
    },
    filters: {
        // Add your filters here
    }
}
</script>

<template>
    <Title title="Contact" subtitle="" />
    <ContactForm />
</template>

