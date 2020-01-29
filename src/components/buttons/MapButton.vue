<template>
  <button class="offices__map-control-item-btn" @click="changeMapPos">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MapButton",
  data() {
    false;
  },
  props: {
    coords: Array
  },
  methods: {
    changeMapPos() {
      this.$emit("my-event", this.$props.coords);
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
}
</style>
