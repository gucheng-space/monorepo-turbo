import { createSSRApp } from "vue";
import App from "./App.vue";
import { pinia } from "@acme/stores";

// #ifdef H5 || MP || APP-PLUS
import "../mock/index";
// #endif

export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  return {
    app,
  };
}
