<template>
    <div class="mobile-margin visible-xs"></div>
    <footer class="footer bg-dark text-center text-white py-4">
        <!-- Grid container -->
        <div class="container p-2">
            <!-- Social Media Section -->
            <section class="mb-4">
                <h5>Follow Us</h5>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i class="bi bi-geo-alt-fill"></i>
                </a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i class="bi bi-instagram"></i>
                </a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i class="bi bi-envelope"></i>
                </a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i class="bi bi-facebook"></i>
                </a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i class="bi bi-twitter"></i>
                </a>
            </section>

            <hr />

            <!-- New Contact Info Section -->
            <div class="row">
                <div class="col-md-6 mb-3">
                    <h5>Our Location</h5>
                    <div id="map" class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1334110.2688495792!2d17.870051784762207!3d69.75965466684227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c453d13692f5%3A0xc723ce61f6460c6!2sStorgata%20123%2C%209008%20Troms%C3%B8%2C%20Norway!5e0!3m2!1sen!2sit!4v1728119077637!5m2!1sen!2sit" 
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <h5>Contact Information</h5>
                    <p>Storgata 123, Tromsø, Norway</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Email: borealis@company.com</p>
                </div>
            </div>
            <hr />
            <p class="text-center">© 2024 Borealis, Inc</p>
            <!-- Section: Social media -->
        </div>
        <!-- Grid container -->
    </footer>
</template>

<style scoped>
    footer {
        bottom: 0;
        width: 100%;
    }

    .mobile-margin {
        margin-top: 50px;
    }

    .embed-responsive {
        position: relative;
        display: block;
        height: 0;
        padding: 0;
        overflow: hidden;
        /* 16:9 Aspect Ratio */
        padding-bottom: 56.25%; /* This makes the map responsive */
    }

    .embed-responsive iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>
