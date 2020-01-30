<template>
  <button
    class="offices__map-control-item-btn"
    :class="{ active: isActive }"
    @click="changeMapPos"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MapButton",
  data() {
    return {
      isActive: false
    };
  },
  props: {
    coords: Array
  },
  methods: {
    changeMapPos() {
      this.$emit("global-change-map-pos", this.$props.coords);
      this.isActive = !this.isActive;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/_vars.scss";

.offices__map-control-item-btn {
  font-family: $font-medium;
  font-size: 0.73rem;
  text-transform: uppercase;
  color: #fff;
  transition: all $trans-prop;

  &.active,
  &:hover {
    color: $color-accent;
  }
}
</style>
