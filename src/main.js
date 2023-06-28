import { Buffer } from "buffer";
import { robonomicsUI } from "robonomics-ui-vue";
import { createApp } from "vue";
import App from "./App.vue";
import robonomics from "./plugins/robonomics";
import store from "./store";

import "robonomics-ui-vue/style.css";

window.Buffer = Buffer;

const app = createApp(App);
app
  .use(store)
  .use(robonomicsUI, { store })
  .use(robonomics, {
    // endpoint: "ws://127.0.0.1:9944"
    endpoint: "wss://kusama.rpc.robonomics.network/"
  })
  .mount("#app");
