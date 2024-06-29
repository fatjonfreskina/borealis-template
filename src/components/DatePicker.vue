<template>
    <div class="container text-center">
        <h2>Select a date</h2>
        <div class="container my-3">
            <flat-pickr
                    v-model="selectedDate"
                    :config="config"
                    class="form-control"
                    placeholder="Select date"
                    
                    name="selectedDate"/>
        </div>

        <div class="container my-3">
            <select class="form-select" aria-label="Default select example" v-model="selectedFieldType">
                <option selected>Seleziona il tipo di campo</option>
                <option value="1">Calcio a 5</option>
                <option value="2">Calcio a 6</option>
                <option value="3">Calcio a 3</option>
                <option value="4">Tennis</option>
                <option value="5">Padel</option>
            </select>
        </div>

        <div class="container my-3">
            <div v-if="selectedDateAvailableSlots.length > 0">
                <h3>Available fields for booking</h3>
                <div class="list-group">
                    <a v-for="field in selectedDateAvailableSlots" :key="field.fieldId" href="#" class="list-group-item list-group-item-action">
                        <h4>{{ field.description }}</h4>
                        <p>Price per hour: {{ field.pricePerHour }}</p>
                        <ul>
                            <li v-for="(length, time) in field.availableSlots" :key="time">
                                {{ time }} - {{ length }} hours
                            </li>
                        </ul>
                    </a>
                </div>
            </div>
        </div>

        <!-- <div class="container my-3">
            <div v-if="groupedFields.length > 0">
                {{ groupedFields }}
            </div>
        </div> -->

        <div class="container my-3">
            <button type="button" class="btn btn-primary mx-3" @click="search">Search</button>
            <button type="button" class="btn btn-secondary mx-3" @click="clear">Clear</button>
        </div>

    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import axios from 'axios';
import { start } from '@popperjs/core';

export default {
    components: {
        flatPickr,
    },

    data() {
        return {
            selectedDate: null,
            selectedFieldType: null, // Calcio a 3, Calcio a 5, Calcio a 6, Tennis
            config: ref({}),
            dateOptions: {
                startHour: '08:00',
                endHour: '22:00',
            },
            selectedDateAvailableSlots: {}, // Initialize as empty, will be filled with data from backend
        };
    },

    mounted() {
        this.fetchAdminDateOptions();
    },

    methods: {
        async search() {
            console.log("Searching for available slots on", this.date, "for", this.selectedFieldType);
            // Gets fields and slots available for the selected date
            this.mockupFetchSelectedDateAvailableSlots();
        },

        // Get the options defined by the admin for the date picker
        // TODO: create the call inside the api service
        async fetchAdminDateOptions() {
            try {
                // const response = await axios.get('/api/date-options'); // Adjust the URL to your backend endpoint
                // this.dateOptions = response.data;
                this.config = {
                    dateFormat: 'd-m-Y',
                    minDate: 'today',
                    maxDate: new Date().fp_incr(10),
                };
                this.dateOptions.startHour = '08:30';
                this.dateOptions.endHour = '22:00';
                //console.log("Date options fetched:", this.dateOptions);
            } catch (error) {
                console.error("Failed to fetch date options:", error);
            }
        },

        // TODO: move it inside the api service
        async mockupFetchSelectedDateAvailableSlots() {
            this.selectedDateAvailableSlots = [
            {
                "fieldId": 3,
                "availableSlots": {
                    "08:00": 0.5, // Number of hours available for booking
                    "10:00": 1, 
                    "12:00": 5,                
                },
                "pricePerHour": 10,
                "description": "Field with natural grass"
            },
            {
                "fieldId": 4,
                "availableSlots": {
                    "08:00": 0.5,
                    "09:00": 1,
                    "11:00": 1,
                },
                "pricePerHour": 15,
                "description": "Field with artificial grass"
            },
            {
                "fieldId": 5,
                "availableSlots": {
                    "08:00": 12,
                },
                "pricePerHour": 20,
                "description": "Field with artificial grass and roof"
            }
            ];
            console.log("Selected date available slots:", this.selectedDateAvailableSlots);
            this.groupFieldsByHour();
        },

        clear() {
            this.selectedDate = null;
            this.selectedFieldType = null;
            this.selectedDateAvailableSlots = {};
        },

        groupFieldsByHour() {
            const [startTimeHourInt, startTimeMinutesInt] = this.dateOptions.startHour.split(":").map(Number);
            const [endTimeHourInt, endTimeMinutesInt] = this.dateOptions.endHour.split(":").map(Number);
            let result = {};
            for (i = startTimeHourInt; i < endTimeHourInt; i++) {
                
            }
        }
    
    },
    computed: {
        // Returns the fields available for booking on the selected date
        
    },
};
</script>