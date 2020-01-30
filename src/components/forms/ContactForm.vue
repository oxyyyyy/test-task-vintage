<template>
  <form action="#" class="default-form" v-on:submit.prevent="submitContactForm">
    <div class="input-group">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="name" />
    </div>
    <div class="input-group">
      <label for="phone">Phone</label>
      <input type="text" name="phone" id="phone" v-model="phone" />
    </div>
    <div class="input-group">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" v-model="email" />
    </div>
    <input
      type="submit"
      value="get in touch"
      class="default-form__submit-btn"
    />
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      errors: []
    };
  },
  methods: {
    submitContactForm() {
      console.log("submit");
      if (this.name && this.phone && this.email) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("error name");
      }
      if (!this.phone) {
        this.errors.push("error phone");
      }
      if (!this.email) {
        this.errors.push("enter email");
      } else if (!this.validateEmail(this.email)) {
        this.errors.push("email is not correct");
      }
    },
    validateEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/_vars.scss";
</style>
