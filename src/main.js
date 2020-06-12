import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebaseConfig from "@/firebase";
import firebase from "firebase";

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
