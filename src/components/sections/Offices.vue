<template>
  <section class="section-offices">
    <div class="offices__content">
      <h2 class="offices__title">Our Offices</h2>
      <ul class="offices__map-controls">
        <li class="offices__map-control-item">
          <MapButton
            :coords="[50.4501, 30.523399]"
            v-on:my-event="changeCoordinates"
            >kyiv</MapButton
          >
        </li>
        <li class="offices__map-control-item">
          <MapButton
            :coords="[40.712776, -74.005974]"
            v-on:my-event="changeCoordinates"
            >new york</MapButton
          >
        </li>
        <li class="offices__map-control-item">
          <MapButton
            :coords="[23.12911, 113.264381]"
            v-on:my-event="changeCoordinates"
            >guangzhou</MapButton
          >
        </li>
        <li class="offices__map-control-item">
          <MapButton
            :coords="[41.385063, 2.173404]"
            v-on:my-event="changeCoordinates"
            >barcelona</MapButton
          >
        </li>
      </ul>
      <h4 class="offices__subtitle">Global Message Services Ukraine LLC</h4>
      <address class="offices__address">
        Kuiv, Stepan Bandera, 33<br />02066<br />Ukraine
      </address>
    </div>
    <div class="offices__map-container">
      <div id="mapid">
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer :url="url"></l-tile-layer>
          <l-marker :lat-lng="marker"></l-marker>
        </l-map>
      </div>
    </div>
  </section>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import MapButton from "@/components/buttons/MapButton.vue";

export default {
  name: "Offices",
  components: { LMap, LTileLayer, LMarker, MapButton },
  data() {
    return {
      zoom: 13,
      center: [50.4501, 30.523399],
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      marker: [50.4501, 30.523399]
    };
  },
  methods: {
    changeCoordinates(coordinates) {
      this.center = coordinates;
      this.marker = coordinates;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/_vars.scss";

.section-offices {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: $color-black;
  color: #fff;
}

.offices__content {
  padding: 60px 0;
}

.offices__title {
  font-size: 2.27rem;
  margin-bottom: 2rem;
}

.offices__map-controls {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 3rem;
}

.offices__map-control-item {
  &:not(:last-child) {
    margin-right: 1.2rem;
  }
}

.offices__map-control-item-btn {
  font-family: $font-medium;
  font-size: 0.73rem;
  text-transform: uppercase;
  color: #fff;
}

.offices__subtitle {
  font-size: 1.73rem;
  margin-bottom: 1rem;
}

.offices__address {
  font-size: 0.73rem;
  font-style: normal;
}

#mapid {
  height: 500px;
}
</style>
