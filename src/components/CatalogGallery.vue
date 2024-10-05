<script setup>
import { ref, onMounted } from 'vue';

const catalog = ref([
  {
    id: 1,
    name: "Product 1",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "/card_1.jpg",
    price: 100,
    isLoaded: false
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "/card_2.jpg",
    price: 200,
    isLoaded: false
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "/card_1.jpg",
    price: 300,
    isLoaded: false
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "/card_2.jpg",
    price: 400,
    isLoaded: false
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "/card_1.jpg",
    price: 500,
    isLoaded: false
  },
  {
    id: 6,
    name: "Product 6",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "/card_1.jpg",
    price: 600,
    isLoaded: false
  }
]);

const handleImageLoad = (item) => {
  item.isLoaded = true;
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4" v-for="item in catalog" :key="item.id">
        <div class="card mb-4 shadow-sm">
          <!-- Spinner while loading -->
          <div class="image-wrapper">
            <div v-if="!item.isLoaded" class="spinner-wrapper">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <!-- Image with opacity -->
            <img 
              :src="item.image" 
              class="card-img-top" 
              :alt="item.name" 
              :class="{ 'invisible': !item.isLoaded }"
              @load="handleImageLoad(item)" 
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">A partire da €{{ item.price }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.spinner-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}

.card-img-top.invisible {
  opacity: 0;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>
