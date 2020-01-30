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
    <div
      class="checkbox"
      :class="{ 'not-valid': !isAgreement }"
      style="margin-top: 0.7rem;"
    >
      <input
        type="checkbox"
        name="agreement"
        id="agreement"
        v-model="isAgreement"
      />
      <label for="agreement">
        <div class="checkbox__box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="13px"
            height="14px"
          >
            <path
              fill-rule="evenodd"
              fill="rgb(0, 0, 0)"
              d="M12.432,1.252 L6.020,12.243 L6.384,12.680 L5.616,13.320 L5.484,13.162 L5.432,13.252 L4.568,12.748 L4.803,12.345 L0.616,7.320 L1.384,6.680 L5.339,11.426 L11.568,0.748 L12.432,1.252 Z"
            />
          </svg>
        </div>
        <p class="checkbox__text">I agree the processing of personal data</p>
      </label>
    </div>
    <input
      type="submit"
      value="get in touch"
      class="default-form__submit-btn"
      :disabled="formIsDisabled"
    />
    <notifications group="contact-form-notifications" position="top left" />
    <div class="preloader" :class="{ active: preloaderIsActive }">
      <img src="@/assets/preloader.svg" alt="" />
    </div>
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
      isAgreement: true,
      errors: [""],
      preloaderIsActive: false,
      formIsDisabled: false
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
        if (!this.isAgreement) {
          this.errors.push("Agreement is required");
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
      this.preloaderIsActive = true;
      service
        .postContactForm(data)
        .then(response => {
          console.log(response);
          this.$notify({
            group: "contact-form-notifications",
            title: "Success!",
            text: "Form was submitted",
            type: "success"
          });
          this.formIsDisabled = true;
        })
        .catch(error => {
          console.log("There was an error:", error.response);
          this.$notify({
            group: "contact-form-notifications",
            title: "Error",
            text: "Something went wrong",
            type: "error"
          });
        })
        .finally(() => {
          this.preloaderIsActive = false;
        });
    },
    validateEmail: email => {
      const RE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return RE.test(email);
    },
    validateName: name => {
      const RE = /^[a-zA-Z\s]*$/;
      return RE.test(name);
    },
    togglePreloader() {
      this.preloaderIsActive = !this.preloaderIsActive;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/_vars.scss";
</style>
