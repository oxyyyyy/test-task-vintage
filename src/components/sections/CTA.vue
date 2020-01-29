<template>
  <section class="section-CTA">
    <div class="container">
      <h2 class="CTA__title">Contact Us</h2>
      <div class="CTA__grid">
        <div class="CTA__grid-item"></div>
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
export default {
  name: "CTA"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/_vars.scss";

.section-CTA {
  background-color: $color-accent;
  padding: 100px 0;
}

.CTA__title {
  font-size: 2.27rem;
  color: #fff;
  margin-bottom: 1rem;
}

.CTA__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.CTA__text {
  font-family: $font-light;
  font-size: 1.2rem;
  color: #000;
}
</style>
