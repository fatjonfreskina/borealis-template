<template>
    <h2 class="text-center">Partners</h2>
    <div id="carouselPartners" class="carousel" ref="carouselElement">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="card">
                    <div class="img-wrapper"><img src="/partners/coca-cola.svg" class="d-block w-100" alt="..."> </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card">
                    <div class="img-wrapper"><img src="/partners/microsoft.svg" class="d-block w-100" alt="..."> </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card">
                    <div class="img-wrapper"><img src="/partners/docker.svg" class="d-block w-100" alt="..."> </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card">
                    <div class="img-wrapper"><img src="/partners/aruba-it.svg" class="d-block w-100" alt="..."> </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card">
                    <div class="img-wrapper"><img src="/partners/atlassian.svg" class="d-block w-100" alt="..."> </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card">
                    <div class="img-wrapper"><img src="/partners/github.svg" class="d-block w-100" alt="..."> </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card">
                    <div class="img-wrapper"><img src="/partners/tesla-motors.svg" class="d-block w-100" alt="...">
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card">
                    <div class="img-wrapper"><img src="/partners/google.svg" class="d-block w-100" alt="..."> </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card">
                    <div class="img-wrapper"><img src="/partners/youtube.svg" class="d-block w-100" alt="..."> </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselPartners"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselPartners"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>


<script setup>
import { onMounted, ref, nextTick } from 'vue'

// Reference to the carousel element
const carouselElement = ref(null)

let carouselWidth = 0
let cardWidth = 0
let scrollPosition = 0

const nextSlide = () => {
  if (scrollPosition < carouselWidth - cardWidth * 4) {
    scrollPosition += cardWidth
    carouselElement.value.querySelector('.carousel-inner').scrollLeft = scrollPosition
  }
}

const prevSlide = () => {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth
    carouselElement.value.querySelector('.carousel-inner').scrollLeft = scrollPosition
  }
}

onMounted(() => {
  // Use nextTick to ensure that the DOM is fully rendered before accessing the ref
  nextTick(() => {
    if (carouselElement.value) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        // Initialize Bootstrap Carousel
        // const carousel = new Carousel(carouselElement.value, { interval: false })

        carouselWidth = carouselElement.value.querySelector('.carousel-inner').scrollWidth
        cardWidth = carouselElement.value.querySelector('.carousel-item').offsetWidth

        // Add custom scroll behavior for large screens
        carouselElement.value.querySelector('.carousel-control-next').addEventListener('click', nextSlide)
        carouselElement.value.querySelector('.carousel-control-prev').addEventListener('click', prevSlide)
      } else {
        carouselElement.value.classList.add('slide')
      }
    } else {
      console.error("carouselElement is not available.")
    }
  })
})
</script>

<style scoped>
    .carousel-inner {
        padding: 5em;
        transition: transform 0.6s ease;

    }

    .card {
        margin: 0 0.5em;
        box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
        border: none;
    }

    .carousel-control-prev,
    .carousel-control-next {
        background-color: #e1e1e1;
        width: 6vh;
        height: 6vh;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
    }
    
    .card .img-wrapper {
        max-width: 100%;
        height: 13em;
        display: flex;
        padding: 3vh;
        justify-content: center;
        align-items: center;
    }
    
    .card img {
        max-height: 100%;
    }
    
    @media (min-width: 768px) {
        .carousel-inner {
            display: flex;
        }

        .carousel-item {
            margin-right: 0;
            flex: 0 0 20%; /* Change the width of the carousel item to fit less or more elements*/
            display: block;
        }

    }

    @media (max-width: 1200px) {
        .carousel-inner {
            padding: 1em;
        }
        .card .img-wrapper {
            height: 17em;
        }
    }
</style>