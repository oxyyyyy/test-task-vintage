<template>
  <section id="section-contacts" class="section-contacts">
    <div class="container">
      <h1 class="contacts__title">Contacts</h1>
      <div class="contacts__grid">
        <div class="contacts__grid-item" data-aos="fade-in">
          <h3 class="contacts__subtitle">
            <span class="contacts__highlight">GMS</span> Headquarters
          </h3>
          <div class="contacts__grid contacts__grid--sub">
            <div class="contacts__grid-item">
              <address class="contacts__address">
                Global Message Services Ukraine LLC<br />Bundesstrasse 5 | 3rd
                Floor<br />6300 Zug<br />Switzerland
              </address>
              <a href="tel:+41415446200" class="contacts__tel-link"
                >+41 41 544 62 00</a
              >
            </div>
            <div class="contacts__grid-item contacts__actions">
              <p>Email</p>
              <a href="mailto:info@gms-worldwide.com">info@gms-worldwide.com</a>
              <p>Send message</p>
              <a href="#">viber us</a>
              <p>Send form</p>
              <a href="#section-CTA" v-smooth-scroll>contact us</a>
            </div>
          </div>
        </div>
        <div class="contacts__grid-item" data-aos="fade-in">
          <h3 class="contacts__subtitle">
            Technical support <span class="contacts__highlight">24/7</span>
          </h3>
          <p class="contacts__desc">
            GMS understands that it can be hard to follow all new technologies.
            We regularly provide for all our clients educational trainings to
            make your operator`s business earn more and better though our best
            practices.
          </p>
          <a href="tel:+41415446206" class="contacts__tel-link"
            >+41 41 544 62 06</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacts"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/_vars.scss";

.section-contacts {
  padding: 3.3rem 0 6rem 0;
}

.contacts__title {
  font-size: 3.125rem;
  margin-bottom: 2rem;
}

.contacts__subtitle {
  font-size: 2.125rem;
  margin-bottom: 2rem;
}

.contacts__highlight {
  color: $color-accent;
}

.contacts__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;

  @media screen and (max-width: $bp-medium) {
    grid-template-columns: 1fr;
  }

  &--sub {
    grid-gap: 15px;

    @media screen and (max-width: $bp-medium) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: $bp-small) {
      grid-template-columns: 1fr;
    }
  }
}

.contacts__address {
  font-style: normal;
  margin-bottom: 1.7rem;
}

.contacts__tel-link {
  font-size: 1.625rem;
}

.contacts__actions {
  p {
    margin-bottom: 0.3rem;
  }

  a {
    display: block;
    font-family: $font-medium;
    margin-bottom: 0.5rem;
  }

  *:last-child {
    margin-bottom: 0;
  }
}

.contacts__desc {
  margin-bottom: 1.8rem;
}
</style>
