<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default {
  name: "App",
  created() {
    AOS.init({ once: true });
  }
};
</script>

<style lang="scss">
@import "~normalize.css";
@import "./assets/scss/_fonts.scss";
@import "./assets/scss/_vars.scss";
@import "./assets/scss/_common.scss";
</style>
