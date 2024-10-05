<script setup>
import { ref } from 'vue';

const imgs = ref([
  {
    id: 1,
    src: '/carousel_1.jpg',
    alt: 'Slide 1',
  },
  {
    id: 2,
    src: '/carousel_2.jpg',
    alt: 'Slide 2',
  },
  {
    id: 3,
    src: '/carousel_3.jpg',
    alt: 'Slide 3',
  },
]);

// Track the loading state of each image
const loadingStates = ref(
  imgs.value.reduce((acc, img) => {
    acc[img.id] = true; // Initially, all images are loading
    return acc;
  }, {})
);

// Handle image load event
const imageLoaded = (id) => {
  loadingStates.value[id] = false; // Mark image as loaded
};
</script>

<template>
  <div id="hero-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button v-for="(img, index) in imgs" :key="img.id" :data-bs-target="'#hero-carousel'" :data-bs-slide-to="index"
        :class="{ active: index === 0 }" :aria-label="'Slide ' + (index + 1)"></button>
    </div>
    <div class="carousel-inner">
      <div v-for="(img, index) in imgs" :key="img.id" class="carousel-item c-item" :class="{ active: index === 0 }">
        <!-- Container to hold both spinner and image -->
        <div class="image-wrapper">
          <!-- Spinner that shows on top of the image until it is loaded -->
          <div v-if="loadingStates[img.id]" class="spinner-overlay">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <!-- Image is hidden initially and becomes visible once loaded -->
          <img :src="img.src" class="d-block w-100 c-img" :alt="img.alt" @load="imageLoaded(img.id)"
               :class="{ 'loaded': !loadingStates[img.id] }"/>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</template>

<style scoped>
.c-item {
  height: 35vh;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
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
  background: rgba(255, 255, 255, 0.8); /* Optional: slight overlay effect */
}

.c-img {
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.c-img.loaded {
  opacity: 1;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>
