import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Sidebar from "./components/SidebarComponent.vue";
import { Plugin } from "vue-fragment";

Vue.use(Plugin);
Vue.component("sidebar", Sidebar);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
