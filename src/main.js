import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import AOS from "aos";
import "aos/dist/aos.css";
import router from './router';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router: router, // router.jsの読み込み
  created() {
    AOS.init();
  },
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
