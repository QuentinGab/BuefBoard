import Vue from "vue";
import Router from "vue-router";
import store from "./store";
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
                ),
            meta: {
                roles: ["admin"],
                permissions: ["manage users"]
            }
        },
        {
            path: "/users/new",
            name: "users.new",
            component: () =>
                import(
                    /* webpackChunkName: "users.form" */ "./views/users/UserForm.vue"
                ),
            meta: {
                roles: ["admin"],
                permissions: ["manage users"]
            }
        },
        {
            path: "/users/:id",
            name: "users.edit",
            component: () =>
                import(
                    /* webpackChunkName: "users.form" */ "./views/users/UserForm.vue"
                ),
            props: true,
            meta: {
                roles: ["admin"],
                permissions: ["manage users"]
            }
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
                ),
            meta: {
                roles: ["admin"]
            }
        },

        // Activities Management
        {
            path: "/activities/index",
            name: "activities.index",
            component: () =>
                import(
                    /* webpackChunkName: "roles.index" */ "./views/activities/ActivitiesIndex.vue"
                ),
            meta: {
                roles: ["admin"]
            }
        },
        // NotFound
        {
            path: "*",
            name: "404",
            component: () =>
                import(/* webpackChunkName: "404" */ "./views/NotFound.vue")
        }
    ]
});

router.beforeEach((to, from, next) => {
    let user = store.state.currentUser;
    //first check for permissions
    //a god can pass every guards
    if (to.meta.permissions) {
        if (user.hasRole("god")) {
            return next();
        }
        if (!user.hasAnyPermission(to.meta.permissions)) {
            return next({ name: "dashboard" });
        }
    }
    // then check for roles
    //a god can pass every guards
    if (to.meta.roles) {
        if (user.hasRole("god")) {
            return next();
        }
        if (!user.hasAnyRole(to.meta.roles)) {
            return next({ name: "dashboard" });
        }
    }
    return next();
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
