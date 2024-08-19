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
</script>

<template>
  <div id="hero-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button v-for="(img, index) in imgs" :key="img.id" :data-bs-target="'#hero-carousel'" :data-bs-slide-to="index"
        :class="{ active: index === 0 }" :aria-label="'Slide ' + (index + 1)"></button>
    </div>
    <div class="carousel-inner">
      <div v-for="(img, index) in imgs" :key="img.id" :class="['carousel-item', 'c-item', { active: index === 0 }]">
        <img :src="img.src" class="d-block w-100 c-img" :alt="img.alt" />
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

.c-img {
  height: 100%;
  object-fit: cover;
  object-position: center center; /* Center the image */
  filter: brightness(0.6);
}
</style>
