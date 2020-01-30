<template>
  <section id="section-offices" class="section-offices">
    <div class="offices__content" data-aos="fade-in">
      <h2 class="offices__title">Our Offices</h2>
      <ul class="offices__map-controls">
        <li
          class="offices__map-control-item"
          v-for="(item, index) in items"
          :key="index"
          :coords="item.coords"
          :class="{ active: active === index }"
          @click.prevent="changeMapPos(index, item.coords)"
        >
          <button class="offices__map-control-item-btn">
            {{ item.title }}
          </button>
        </li>
      </ul>
      <h4 class="offices__subtitle">Global Message Services Ukraine LLC</h4>
      <address class="offices__address">
        {{ items[active].title }}, Stepan Bandera, 33<br />02066<br />Ukraine
      </address>
    </div>
    <div class="offices__map-container" data-aos="fade-left">
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

export default {
  name: "Offices",
  components: { LMap, LTileLayer, LMarker },
  data() {
    return {
      zoom: 13,
      center: [50.4501, 30.523399],
      marker: [50.4501, 30.523399],
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      active: 0,
      items: [
        {
          title: "Kyiv",
          coords: [50.4501, 30.523399]
        },
        {
          title: "New York",
          coords: [40.712776, -74.005974]
        },
        {
          title: "Guangzhou",
          coords: [23.12911, 113.264381]
        },
        {
          title: "Barcelona",
          coords: [41.385063, 2.173404]
        }
      ]
    };
  },
  methods: {
    changeMapPos(index, coords) {
      this.center = coords;
      this.marker = coords;
      this.active = index;
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

  @media screen and (max-width: $bp-medium) {
    grid-template-columns: 1fr;
  }
}

.offices__content {
  padding: 90px 0 25px 15px;
  max-width: 580px;
  margin-left: auto;
  margin-right: 116px;

  @media screen and (max-width: $bp-medium) {
    padding: 50px 15px;
    margin: 0;
    max-width: initial;
  }
}

.offices__title {
  font-size: 2.27rem;
  margin-bottom: 2.4rem;
}

.offices__map-controls {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2.7rem;
}

.offices__map-control-item {
  &:not(:last-child) {
    margin-right: 1.6rem;
  }

  &.active,
  &:hover {
    .offices__map-control-item-btn {
      color: $color-accent;
    }
  }
}

.offices__map-control-item-btn {
  font-family: $font-medium;
  font-size: 0.73rem;
  text-transform: uppercase;
  color: #fff;
  transition: all $trans-prop;
}

.offices__subtitle {
  font-size: 1.73rem;
  line-height: 1.1;
  margin-bottom: 1.7rem;
}

.offices__address {
  font-size: 0.73rem;
  font-style: normal;
}

#mapid {
  height: 500px;

  @media screen and (max-width: $bp-medium) {
    height: 300px;
  }
}
</style>
