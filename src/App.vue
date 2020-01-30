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

input,
textarea {
  outline: none;
}

.container {
  max-width: 1160px;
  padding: 0 15px;
  margin: 0 auto;
}

.input-group {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  padding: 1.3rem 0 1rem 0;

  label {
    font-family: $font-light;
    font-size: 1.2rem;
    min-width: 7rem;
    cursor: pointer;
  }

  input {
    background-color: transparent;
    border: none;
    padding: 0;
    width: 100%;
    font-family: $font-light;
    font-size: 1.2rem;
  }

  &.not-valid {
    border-bottom-color: $color-error;

    label {
      color: $color-error;
    }
  }
}

.default-form__submit-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: $font-medium;
  font-size: 0.73rem;
  color: #fff;
  background-color: #262626;
  text-transform: uppercase;
  border: none;
  padding: 2rem 6rem;
  cursor: pointer;
  margin-top: 2rem;
  border: 2px solid #262626;
  transition: all $trans-prop;

  &:hover {
    background-color: transparent;
    color: #262626;
  }
}
</style>
