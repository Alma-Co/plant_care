import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

library.add(faPhone);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
