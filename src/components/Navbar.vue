<script setup>
import { ref } from 'vue';

const msg = ref('Welcome to Your Vue.js App');
const companyName = ref('Company Name');
const companyQuote = ref('Company Quote Here ...');
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand brand">
                    <img src="/logo.png" alt="" width="30" height="30" class="d-inline-block align-text-top">
                    Borealis
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pricing" class="nav-link active" aria-current="page">Pricing</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/catalog" class="nav-link active" aria-current="page">Catalog</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contact" class="nav-link active" aria-current="page">Contact</router-link>
                        </li>
                        <!-- <li class="nav-item">
                    <router-link to="/about" class="nav-link active" aria-current="page">About</router-link>
                </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
    @media screen and (min-width: 768px) {
        .brand {
            margin-left: 100px;
            margin-right: 30px;
        }
    }
</style>
