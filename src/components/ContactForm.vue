<script setup>
import { ref } from 'vue'

const props = defineProps({
  msg: String
});

const companyName = ref('Company Name');
const companyQuote = ref('Company Quote');

const checkValidity = function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  // TO DO: customize this
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
};

const submitContactForm = function(){
  const retVal = checkValidity();
  console.log(retVal);
  // TO DO: get the value of the validation
}
</script>

<template>
  <div class="container mt-5">
    <form class="needs-validation" novalidate>
      <div class="col-md-6 mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Your name" required />
        <div class="invalid-feedback">Please enter your name.</div>
        <div class="valid-feedback"></div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com" required />
        <div class="invalid-feedback">Please enter a valid email address.</div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="subject" class="form-label">Subject</label>
        <input type="text" class="form-control" id="subject" placeholder="Subject" required />
        <div class="invalid-feedback">Please enter a subject.</div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="3" placeholder="Your message" required></textarea>
        <div class="invalid-feedback">Please enter your message.</div>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="sendCopy" />
        <label class="form-check-label" for="sendCopy">Send me a copy of this email</label>
      </div>
      <button @click="submitContactForm" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>