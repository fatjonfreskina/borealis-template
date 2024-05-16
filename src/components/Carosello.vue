<script></script>

<template>
  <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img
          src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100"
          class="d-block w-100 c-img"
          alt="Slide 1"
        />
      </div>
      <div class="carousel-item c-item">
        <img
          src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100"
          class="d-block w-100 c-img"
          alt="Slide 2"
        />
      </div>
      <div class="carousel-item c-item">
        <img
          src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100"
          class="d-block w-100 c-img"
          alt="Slide 3"
        />
      </div>
    </div>
  </div>

  <!-- So far ok  -->

  <div class="container pt-10">
    <div class="row">
      <div class="col-md-7">
        <h2>
          First featurette heading.
          <span class="text-muted">It’ll blow your mind.</span>
        </h2>
        <p class="lead">
          Some great placeholder content for the first featurette here. Imagine
          some exciting prose here.
        </p>
      </div>
      <div class="col-md-5">
        <div class="square-container">
          <img
            src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1920&q=100"
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            style="width: 100%; object-fit: cover; filter: brightness(0.6)"
          />
        </div>
      </div>
    </div>

    <hr/>

    <div class="row">
      <div class="col-md-7 order-md-2">
        <h2>
          Oh yeah, it’s that good.
          <span class="text-muted">See for yourself.</span>
        </h2>
        <p class="lead">
          Another featurette? Of course. More placeholder content here to give
          you an idea of how this layout would work with some actual real-world
          content in place.
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <div class="square-container">
          <img
            src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1920&q=100"
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            style="width: 100%; object-fit: cover; filter: brightness(0.6)"
          />
        </div>
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row">
      <div class="col-md-7">
        <h2>
          And lastly, this one. <span class="text-muted">Checkmate.</span>
        </h2>
        <p class="lead">
          And yes, this is the last block of representative placeholder content.
          Again, not really intended to be actually read, simply here to give
          you a better view of what this would look like with some actual
          content. Your content.
        </p>
      </div>
      <div class="col-md-5">
        <div class="square-container">
          <img
            src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1920&q=100"
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            style="width: 100%; object-fit: cover; filter: brightness(0.6)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.c-item {
  height: 30vh;
}

.c-img {
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.square-container {
  position: relative;
  width: 100%;
  padding-top: 100%; /* This makes the height equal to the width, forming a square */
  overflow: hidden; /* Ensures that any overflow from the image is hidden */
}

.square-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container without distorting */
  filter: brightness(0.6); /* Applies the brightness filter */
}
</style>
