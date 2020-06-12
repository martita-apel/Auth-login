import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        login: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    console.log("no se ha autenticado");
    next("login");
  } /* else if (user && !authRequired) {
    return next("home");
  } */ else {
    next();
  }
});

export default router;
