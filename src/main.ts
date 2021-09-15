import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "./themes/index.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(ref);

app.config.globalProperties.$baseURL = "http://localhost:9000";
app.config.performance = true;

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
