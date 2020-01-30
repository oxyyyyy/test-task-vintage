import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Notifications from "vue-notification";
import VueTheMask from "vue-the-mask";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

Vue.use(Notifications);
Vue.use(VueTheMask);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
