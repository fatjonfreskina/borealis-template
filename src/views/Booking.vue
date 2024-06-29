<script>
import Title from "../components/Title.vue";
import DatePicker from "../components/DatePicker.vue";
export default {
    components: {
        Title,
        DatePicker,
    },
    name: "Booking",
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
    <DatePicker />
</template>
