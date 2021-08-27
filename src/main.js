import { createApp, h } from "vue";
//import VueConfetti from "vue-confetti";
import BootstrapVue from "@aarondewes/bootstrap-vue-3";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import { satsToBtc } from "@/helpers/units";

const app = createApp({
  render: () => h(App),
});

app.use(BootstrapVue);
//app.use(VueConfetti);
app.use(router);
app.use(store);

app.config.globalProperties.$filters = {
  unit(value) {
    if (store.state.system.unit === "sats") {
      return Number(value);
    } else if (store.state.system.unit === "btc") {
      return satsToBtc(value);
    }
  },
  sats(value) {
    return Number(value);
  },
  btc(value) {
    return satsToBtc(value);
  },
  formatUnit(value) {
    if (unit === "sats") {
      return "Sats";
    } else if (unit === "btc") {
      return "BTC";
    }
  },
  satsToUSD(value) {
    if (isNaN(parseInt(value))) {
      return value;
    } else {
      return (
        "$" +
        Number(
          (satsToBtc(value) * store.state.bitcoin.price).toFixed(2)
        ).toLocaleString()
      );
    }
  },
  localize(n) {
    return Number(n).toLocaleString(undefined, { maximumFractionDigits: 8 });
  },
};

app.mount("#app");
