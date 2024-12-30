<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

const modalInstance = ref(null);
const lastFocusedElement = ref(null);  // Store the last focused element before opening modal
const selectedItem = ref({});
const catalog = ref([
  {
    id: 1,
    name: "Product 1",
    shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "/card_1.jpg",
    price: 100,
    isLoaded: false
  },
  {
    id: 2,
    name: "Product 2",
    shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "/card_2.jpg",
    price: 200,
    isLoaded: false
  },
  {
    id: 3,
    name: "Product 3",
    shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "/card_1.jpg",
    price: 300,
    isLoaded: false
  },
  {
    id: 4,
    name: "Product 4",
    shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "/card_2.jpg",
    price: 400,
    isLoaded: false
  },
  {
    id: 5,
    name: "Product 5",
    shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "/card_1.jpg",
    price: 500,
    isLoaded: false
  },
  {
    id: 6,
    name: "Product 6",
    shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    image: "/card_1.jpg",
    price: 600,
    isLoaded: false
  }
]);

const showModal = (item) => {
  selectedItem.value = item; // Set the selected item
  lastFocusedElement.value = document.activeElement;
  if (modalInstance.value) {
    modalInstance.value.show(); // Show the modal
  } 
  else {
    console.error('Modal instance is not available');
  }
};

onMounted(() => {
  const modalElement = document.getElementById('itemModal');
  modalInstance.value = new Modal(modalElement);
  console.log('Modal instance created');

  // Listen for the 'hidden.bs.modal' event to restore focus
  modalElement.addEventListener('hidden.bs.modal', () => {
    if (lastFocusedElement.value) {
      lastFocusedElement.value.focus(); // Restore focus to the previously focused element
    }
  });
});

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
            <p class="card-text">{{ item.shortDescription }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="showModal(item)">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">Starting from €{{ item.price }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- Modal -->
    <div class="modal fade" id="itemModal" tabindex="-1" aria-labelledby="itemModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content" v-if="selectedItem">
          <div class="modal-header">
            <h5 class="modal-title" id="itemModalLabel">{{ selectedItem.name }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="image-container text-center mb-3">
              <img :src="selectedItem.image" class="modal-image img-fluid" :alt="selectedItem.name" />
            </div>
            <p>{{ selectedItem.description }}</p>
            <p class="text-end">Starting from: €{{ selectedItem.price }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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

.modal-image {
  max-width: 100%;
  max-height: 400px; /* Limit the image height */
  object-fit: cover; /* Make sure the image fits nicely */
  border-radius: 5px; /* Add rounded corners for a polished look */
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
