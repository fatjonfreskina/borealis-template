<script setup>
import Divider from "../components/Divider.vue";
import { ref } from 'vue';

const msg = ref("Welcome to Your Vue.js App");
const companyName = ref("Company Name");
const companyQuote = ref("Company Quote Here ...");
</script>

<template>
  <!--  Centered container -->
  <div class="container px-4 py-5 my-2 text-center">
    <img class="d-block mx-auto mb-4" src="/logo.png" alt="" width="72" height="57" />
    <h1 class="display-5 fw-bold">Centered hero</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        Quickly design and customize responsive mobile-first sites with
        Bootstrap, the world’s most popular front-end open source toolkit,
        featuring Sass variables and mixins, responsive grid system, extensive
        prebuilt components, and powerful JavaScript plugins.
      </p>
    </div>
  </div>

  <Divider />

  <!-- First side container -->
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-5 py-5">
      <!-- Image Section -->
      <div class="col-10 col-sm-8 col-lg-6 mx-auto">
        <img src="/aurora_1.jpg" class="d-block mx-auto img-fluid gallery-image" alt="Bootstrap Themes" width="700"
          height="500" loading="lazy" />
      </div>
      <!-- Text Section -->
      <div class="col-lg-6 mx-auto text-center">
        <h1 class="display-5 fw-bold lh-1 mb-3">
          Responsive left-aligned hero with image
        </h1>
        <p class="lead">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
            Primary
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Default
          </button>
        </div>
      </div>
    </div>
  </div>

  <Divider />

  <!-- Second side container -->
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-5 py-5">
      <!-- Text Section -->
      <div class="col-lg-6 mx-auto text-center order-2 order-sm-1">
        <h1 class="display-5 fw-bold lh-1 mb-3">
          Responsive right-aligned hero with image
        </h1>
        <p class="lead">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
            Primary
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Default
          </button>
        </div>
      </div>
      <!-- Image Section -->
      <div class="col-10 col-sm-8 col-lg-6 mx-auto order-1 order-sm-2">
        <img src="/aurora_2.jpg" class="d-block mx-auto img-fluid gallery-image" alt="Bootstrap Themes" width="700"
          height="500" loading="lazy" />
      </div>
    </div>
  </div>


  <Divider />

  <!-- Third side container -->
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-5 py-5">
      <!-- Image Section -->
      <div class="col-10 col-sm-8 col-lg-6 mx-auto">
        <img src="/aurora_3.jpg" class="d-block mx-auto img-fluid gallery-image" alt="Bootstrap Themes" width="700"
          height="500" loading="lazy" />
      </div>
      <!-- Text Section -->
      <div class="col-lg-6 mx-auto text-center order-2 order-sm-1">
        <h1 class="display-5 fw-bold lh-1 mb-3">
          Responsive left-aligned hero with image
        </h1>
        <p class="lead">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
            Primary
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Default
          </button>
        </div>
      </div>
    </div>
  </div>
  <Divider />
</template>

<style scoped>

  .gallery-image {
    width: 100%;
    object-fit: cover;
    filter: brightness(0.6);
    border-radius: 4%;
  }

</style>
