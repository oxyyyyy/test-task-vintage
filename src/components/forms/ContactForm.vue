<template>
  <form action="#" class="default-form" v-on:submit.prevent="submitContactForm">
    <div class="input-group" :class="{ 'not-valid': !name.isValid }">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="name.text" />
    </div>
    <div class="input-group" :class="{ 'not-valid': !phone.isValid }">
      <label for="phone">Phone</label>
      <the-mask
        :mask="'+380 (##) ### ## ##'"
        name="phone"
        id="phone"
        v-model="phone.text"
      />
    </div>
    <div class="input-group" :class="{ 'not-valid': !email.isValid }">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" v-model="email.text" />
    </div>
    <input
      type="submit"
      value="get in touch"
      class="default-form__submit-btn"
    />
    <notifications group="contact-form-notifications" />
  </form>
</template>

<script>
import service from "@/services/service.js";

export default {
  name: "ContactForm",
  data() {
    return {
      name: {
        text: "",
        isValid: true
      },
      phone: {
        text: "",
        isValid: true
      },
      email: {
        text: "",
        isValid: true
      },
      errors: [""]
    };
  },
  methods: {
    submitContactForm() {
      if (this.errors.length !== 0) {
        this.errors = [];
        this.name.isValid = true;
        this.phone.isValid = true;
        this.email.isValid = true;

        if (!this.name.text) {
          this.errors.push("Name is required");
          this.name.isValid = false;
        } else if (!this.validateName(this.name.text)) {
          this.errors.push("Name is not correct");
          this.name.isValid = false;
        } else if (this.name.text.length > 30) {
          this.errors.push("Name is too long");
          this.name.isValid = false;
        }
        if (!this.phone.text) {
          this.errors.push("Phone is required");
          this.phone.isValid = false;
        } else if (this.phone.text.length < 9) {
          this.errors.push("Phone is too short");
          this.phone.isValid = false;
        }
        if (!this.email.text) {
          this.errors.push("Email is required");
          this.email.isValid = false;
        } else if (!this.validateEmail(this.email.text)) {
          this.errors.push("Email is not correct");
          this.email.isValid = false;
        }

        this.errors.forEach(errorItem => {
          this.$notify({
            group: "contact-form-notifications",
            title: "Error",
            text: errorItem,
            type: "error"
          });
        });

        return false;
      }

      const data = {
        name: this.name.text,
        phone: this.phone.text,
        email: this.email.text
      };
      service
        .postContactForm(data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    },
    validateEmail: email => {
      const RE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return RE.test(email);
    },
    validateName: name => {
      const RE = /^[a-zA-Z\s]*$/;
      return RE.test(name);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/_vars.scss";
</style>
