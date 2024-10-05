<script setup>
import Divider from "../components/Divider.vue";
import { ref } from 'vue';

const imgs = ref([
  { id: 1, src: '/aurora_1.jpg', alt: 'Aurora 1' },
  { id: 2, src: '/aurora_2.jpg', alt: 'Aurora 2' },
  { id: 3, src: '/aurora_3.jpg', alt: 'Aurora 3' },
]);

// Track loading state for each image
const loadingStates = ref(
  imgs.value.reduce((acc, img) => {
    acc[img.id] = true; // All images are initially in loading state
    return acc;
  }, {})
);

// Handle image load event
const imageLoaded = (id) => {
  loadingStates.value[id] = false; // Mark image as loaded
};
</script>

<template>
  <!-- Centered container -->
  <div class="container px-4 py-5 my-2 text-center">
    <img class="d-block mx-auto mb-4" src="/logo.png" alt="Company Logo" width="96" height="96" />
    <h1 class="display-5 fw-bold">Dancing Lights of the North</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        The Aurora Borealis, or Northern Lights, is a mesmerizing light display caused by charged 
        particles from the sun interacting with Earth's magnetic field. 
        These interactions create stunning visual patterns, often described as 
        'dancing lights' across the polar skies.
      </p>
    </div>
  </div>

  <Divider />

  <!-- First side container -->
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-5 py-5">
      <!-- Image Section with Spinner -->
      <div class="col-10 col-sm-8 col-lg-6 mx-auto">
        <div class="image-wrapper">
          <div v-if="loadingStates[1]" class="spinner-overlay">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <img :src="imgs[0].src" class="d-block mx-auto img-fluid gallery-image"
               :alt="imgs[0].alt" @load="imageLoaded(imgs[0].id)" 
               :class="{ 'loaded': !loadingStates[1] }" />
        </div>
      </div>

      <!-- Text Section -->
      <div class="col-lg-6 mx-auto text-center">
        <h1 class="display-5 fw-bold lh-1 mb-3">
          Colors Born from Space
        </h1>
        <p class="lead">
          The vibrant colors of the aurora range from green to purple, red, yellow, and blue. 
          These hues are produced by different gases in the atmosphere. Oxygen emits green and red, 
          while nitrogen glows blue and purple, creating a breathtaking natural palette.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
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
        <h1 class="display-5 fw-bold lh-1 mb-3">A Sky Show Driven by Solar Storms</h1>
        <p class="lead">
          Auroras intensify during solar storms when the sun releases bursts of solar 
          wind filled with charged particles. When these particles reach Earth's atmosphere, 
          they collide with atoms, amplifying the brightness and scale of the light show.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>

      <!-- Image Section with Spinner -->
      <div class="col-10 col-sm-8 col-lg-6 mx-auto order-1 order-sm-2">
        <div class="image-wrapper">
          <div v-if="loadingStates[2]" class="spinner-overlay">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <img :src="imgs[1].src" class="d-block mx-auto img-fluid gallery-image"
               :alt="imgs[1].alt" @load="imageLoaded(imgs[1].id)"
               :class="{ 'loaded': !loadingStates[2] }" />
        </div>
      </div>
    </div>
  </div>

  <Divider />

  <!-- Third side container -->
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-5 py-5">
      <!-- Image Section with Spinner -->
      <div class="col-10 col-sm-8 col-lg-6 mx-auto">
        <div class="image-wrapper">
          <div v-if="loadingStates[3]" class="spinner-overlay">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <img :src="imgs[2].src" class="d-block mx-auto img-fluid gallery-image"
               :alt="imgs[2].alt" @load="imageLoaded(imgs[2].id)"
               :class="{ 'loaded': !loadingStates[3] }" />
        </div>
      </div>

      <!-- Text Section -->
      <div class="col-lg-6 mx-auto text-center">
        <h1 class="display-5 fw-bold lh-1 mb-3">A Global Phenomenon Seen at the Poles</h1>
        <p class="lead">
          While the Aurora Borealis lights up the Northern Hemisphere, the Southern Hemisphere 
          experiences its counterpart—the Aurora Australis. Both phenomena are visible near the 
          Earth's magnetic poles, providing unforgettable views for skywatchers across the globe.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
  </div>

  <Divider />
</template>

<style scoped>
.gallery-image {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.gallery-image.loaded {
  opacity: 1;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: auto;
}

.spinner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8); /* Slight overlay effect */
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>
