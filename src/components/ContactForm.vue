<script>
export default {
  name: 'ContactForm',
  props: {
    msg: String
  },
  data() {
    return {
      companyName: 'Company Name',
      companyQuote: 'Company Quote Here ...'
    }
  },
  mounted() {
    console.log('ContactForm component mounted.')
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
  }

}

</script>

<template>
  <div class="container mt-5">
    <form>                
      <div class="col-md-6 mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Your name" required />
        <div class="invalid-feedback">Please enter your name.</div>
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
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style scoped>
/* input {
    max-width: 70%;
}

textarea {
    max-width: 70%;
} */
</style>
