import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import TodoForm from "./components/TodoForm.vue";
import { store } from "./stores/todos";

import "./assets/main.css";
Vue.config.devtools = true;
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/add-todo",
    component: TodoForm,
  },
];

const router = new VueRouter({
  routes,
});

const temp = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

console.log(temp);
