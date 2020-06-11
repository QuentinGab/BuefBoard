import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: () => import("./views/Dashboard.vue")
        },
        {
            path: "/users/index",
            name: "users.index",
            component: () => import("./views/users/UserIndex.vue")
        },
          {
            path: "/users/new",
            name: "users.new",
            component: () => import("./views/users/UserForm.vue"),
          },
          {
            path: "/users/:id",
            name: "users.edit",
            component: () => import("./views/users/UserForm.vue"),
            props: true
          }
    ]
});
