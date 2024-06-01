<script>
import Gallery from './Gallery.vue';

export default {
  components: {
    Gallery,
  },
  name: 'Carosello',
  data() {
    return {
      imgs: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100',
          alt: 'Slide 1',
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100',
          alt: 'Slide 2',
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100',
          alt: 'Slide 3',
        },
      ],
    };
  },
};
</script>

<template>
  <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
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
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
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
  filter: brightness(0.6);
}
</style>
