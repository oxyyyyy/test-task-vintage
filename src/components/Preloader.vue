<template>
  <div
    class="preloader"
    :class="{ active: isActive }"
    v-on:toggle-preloader="togglePreloader"
  >
    <img src="@/assets/preloader.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Preloader",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    togglePreloader() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/_vars.scss";

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all $trans-prop;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;

  svg {
    pointer-events: none;
  }

  &.active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
