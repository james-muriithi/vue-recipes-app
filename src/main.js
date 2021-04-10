import { createApp } from "vue";
import App from "./App.vue";
import VueLazyLoad from "vue3-lazyload";
import "bootstrap";
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";

import BaseSpinner from "./components/ui/BaseSpinner.vue";

import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueLazyLoad);
app.component("base-spinner", BaseSpinner);

app.mount("#app");
