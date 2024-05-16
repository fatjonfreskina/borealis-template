<template>
    <main>
        <div class="container">
            <h1>About page</h1>
        </div>
    </main>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            companyName: 'Company Name',
            companyQuote: 'Company Quote Here ...'
        }
    },
    mounted() {
        console.log('About component mounted.')
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
    }
}
</script>