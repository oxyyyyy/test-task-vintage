<template>
  <section id="section-CTA" class="section-CTA">
    <div class="container">
      <h2 class="CTA__title">Contact Us</h2>
      <div class="CTA__grid">
        <div class="CTA__grid-item">
          <ContactForm />
        </div>
        <div class="CTA__grid-item">
          <p class="CTA__text">
            Please tell us more about your request and give us info about your
            company and country
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "@/components/forms/ContactForm.vue";

export default {
  name: "CTA",
  components: {
    ContactForm
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/_vars.scss";

.section-CTA {
  padding: 5.8rem 0;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.2) 4%,
    transparent 4%
  );
  background-color: $color-accent;
  background-position: center;
  background-size: 75px 75px;
}

.CTA__title {
  font-size: 2.27rem;
  color: #fff;
  margin-bottom: 1rem;
}

.CTA__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 75px;

  @media screen and (max-width: $bp-medium) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
}

.CTA__text {
  font-family: $font-light;
  font-size: 1.2rem;
  color: #000;
  margin-top: 0.8rem;
}
</style>
