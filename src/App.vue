<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~normalize.css";
@import "./assets/scss/_fonts.scss";
@import "./assets/scss/_vars.scss";

body {
  font-family: $font;
  font-size: 15px;
}

.container {
  max-width: 1160px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
