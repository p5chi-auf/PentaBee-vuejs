import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./registerServiceWorker";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
Vue.component("component-header", HeaderComponent);
Vue.component("ComponentFooter", FooterComponent);

new Vue({
  router,
  store,
  BootstrapVue,
  VeeValidate,
  render: h => h(App)
}).$mount("#app");
