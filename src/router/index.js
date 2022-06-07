import Vue from "vue";
import VueRouter from "vue-router";
import MainContents from "../views/MainContents";
import FirstMenu from "../views/FirstMenu";
import SecondMenu from "../views/SecondMenu";
import ThirdMenu from "../views/ThirdMenu";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "maincontents",
    component: MainContents,
  },
  {
    path: "/firstmenu",
    name: "firstmenu",
    component: FirstMenu,
  },
  {
    path: "/secondmenu",
    name: "secondmenu",
    component: SecondMenu,
  },
  {
    path: "/thirdmenu",
    name: "thirdmenu",
    component: ThirdMenu,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
