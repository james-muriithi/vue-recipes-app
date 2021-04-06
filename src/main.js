import { createApp } from "vue";
import App from "./App.vue";
import VueLazyLoad from 'vue3-lazyload'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueLazyLoad, {
    loading: () => {
      console.log('loading')
    },
    error: () => {
      console.log('error')
    },
    loaded: () => {
      console.log('loaded')
    }
  });

app.mount("#app");
