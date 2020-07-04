import Vue from "vue";
import Router from "vue-router";
/* NProgress */
import NProgress from "nprogress";

Vue.use(Router);

const router = new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: () =>
                import(
                    /* webpackChunkName: "dashboard" */ "./views/Dashboard.vue"
                )
        },
        //User Management
        {
            path: "/users/index",
            name: "users.index",
            component: () =>
                import(
                    /* webpackChunkName: "users.index" */ "./views/users/UserIndex.vue"
                )
        },
        {
            path: "/users/new",
            name: "users.new",
            component: () =>
                import(
                    /* webpackChunkName: "users.form" */ "./views/users/UserForm.vue"
                )
        },
        {
            path: "/users/:id",
            name: "users.edit",
            component: () =>
                import(
                    /* webpackChunkName: "users.form" */ "./views/users/UserForm.vue"
                ),
            props: true
        },
        {
            path: "/account",
            name: "users.account",
            component: () =>
                import(
                    /* webpackChunkName: "users.profile" */ "./views/users/UserAccount.vue"
                )
        },

        // Roles Management
        {
            path: "/roles/index",
            name: "roles.index",
            component: () =>
                import(
                    /* webpackChunkName: "roles.index" */ "./views/roles/RoleIndex.vue"
                )
        },

        // Activities Management
        {
            path: "/activities/index",
            name: "activities.index",
            component: () =>
                import(
                    /* webpackChunkName: "roles.index" */ "./views/activities/ActivitiesIndex.vue"
                )
        },
    ]
});

/* Router loading indicator */
router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start();
    }
    next();
});

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done();
});

export default router;
