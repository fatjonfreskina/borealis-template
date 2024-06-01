<script>
export default {
    name: 'Title',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            companyName: 'Company Name',
            companyQuote: 'Company Quote Here ...'
        }
    },
    mounted() {
        console.log('Title component mounted.')
    },
    methods: {
        
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
   <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">{{ title }}</h1>
      <p class="fs-5 text-muted"> {{ subtitle }}</p>
    </div>
</template>

