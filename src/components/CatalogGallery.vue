<script>
export default {
  name: "CatalogGallery",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      companyName: "Company Name",
      catalog: [
        {
          id: 1,
          name: "Product 1",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          image: "/card_1.jpg",
          price: 100
        },
        {
          id: 2,
          name: "Product 2",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          image: "/card_2.jpg",
          price: 200
        },
        {
          id: 3,
          name: "Product 3",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          image: "/card_1.jpg",
          price: 300
        },
        {
          id: 4,
          name: "Product 4",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          image: "/card_2.jpg",
          price: 400
        },
        {
          id: 5,
          name: "Product 5",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          image: "/card_1.jpg",
          price: 500
        },
        {
          id: 6,
          name: "Product 6",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          image: "/card_1.jpg",
          price: 600
        }
      ]
    };
  },
  mounted() {
    console.log("CatalogGallery component mounted.");
  },
  methods: {
    // Add your methods here
  },
  computed: {
    // Add your computed properties here
  },
  watch: {
    // Add your watch properties here
  },
  filters: {
    // Add your filters here
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4" v-for="item in catalog" :key="item.id">
        <div class="card mb-4 shadow-sm">
          <img :src="item.image" class="card-img-top" :alt="item.name" />
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
/* Add your styles here */
</style>
