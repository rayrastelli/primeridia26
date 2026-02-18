import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";

import("../amplify_outputs.json")
  .then((m) => Amplify.configure(m.default as Parameters<typeof Amplify.configure>[0]))
  .catch(() => {});

createApp(App).mount("#app");
