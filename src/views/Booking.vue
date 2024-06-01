<script>
import Title from "../components/Title.vue";
export default {
    components: {
        Title,
    },
    data() {
        return {
            booking: {
                name: "",
                email: "",
                phone: "",
                date: "",
                time: "",
                guests: "",
                message: "",
            },
        };
    },
    methods: {
        submitBooking() {
            console.log(this.booking);
        },
    },
};
</script>

<template>
    <Title title="Booking" subtitle="Test" />
</template>
