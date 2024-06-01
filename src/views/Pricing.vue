<script>
import Title from '../components/Title.vue'
import PricingPlans from '../components/PricingPlans.vue'
export default {
    name: 'Pricing',
    components: {
        Title,
        PricingPlans
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            companyName: 'Company Name',
            companyQuote: 'Company Quote Here ...'
        }
    },
    mounted() {
        console.log('Pricing view mounted.')
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

<template>
    <Title title="Pricing" subtitle="Choose the best plan for your business" />
    <PricingPlans />
</template>

