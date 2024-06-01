<script>
import Title from "../components/Title.vue";
export default {
    name: "About",
    components: {
        Title,
    },
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            companyName: "Company Name",
            companyQuote: "Company Quote Here ...",
        };
    },
    mounted() {
        console.log("About view mounted.");
    },
    methods: {
        // Add your methods here
    },
    computed: {
        // Add your computed properties here
    },
    watch: {
        // Add your watch properties here
    },
    filters: {
        // Add your filters here
    },
};
</script>

<template>
    <Title title="About us" subtitle="Test" />
</template>
