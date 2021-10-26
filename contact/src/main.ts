import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import i18n from "./i18n";

const app = createApp(App);
app.use(i18n);
app.config.compilerOptions.isCustomElement = (tag) => tag === "css-doodle";
app.mount("#app");
