<script>
import CatalogGallery from "../components/CatalogGallery.vue";
import Title from "../components/Title.vue";
export default {
  components: {
    Title,
    CatalogGallery,
  },
  name: "Catalog",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      companyName: "Company Name",
      companyQuote: "Company Quote Here ...",
    };
  },
  mounted() {
    console.log("Catalog view mounted.");
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
  <Title
    title="Catalog"
    subtitle="Choose the best plan for your business"/>
  <CatalogGallery />
</template>
