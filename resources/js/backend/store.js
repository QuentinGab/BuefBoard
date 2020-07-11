import Vue from "vue";
import Vuex from "vuex";
import CurrentUser from "@b/models/CurrentUser";
import Role from "@b/models/Role";
import Permission from "@b/models/Permission";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentUser: {},
        roles: [],
        permissions: [],
        notificationCenter: {
            open: false,
            notifications: [
                {
                    id: 1,
                    message:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit",
                    type: "is-primary"
                },
                {
                    id: 2,
                    message:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit",
                    type: "is-default"
                }
            ]
        },
        charts: {
            colors: ["#0984E3", "#B86BFF", "#043053"]
        },
        logo: "/images/logo_buefboard.svg",
        icon: "/images/icon_buefboard.svg",
        loading: {
            currentUser: {
                save: false,
                get: false,
                password:false,
                avatar:false
            },
            roles: false,
            permissions: false
        }
    },
    mutations: {
        /* A fit-them-all commit */
        basic(state, payload) {
            state[payload.key] = payload.value;
        },
        updateLoading(state, payload) {
            state.loading[payload.key] = payload.value;
        },
        /* currentUser */
        updateUser(state, currentUser) {
            state.currentUser = currentUser;
        },
        updateLoadingUser(state, payload) {
            state.loading.currentUser[payload.key] = payload.value;
        },
        updateRoles(state, roles) {
            state.roles = roles;
        },
        updatePermissions(state, permissions) {
            state.permissions = permissions;
        },
        /* Notification center */
        updateNotificationCenter(state, isOpen) {
            state.notificationCenter.open = isOpen;
        },
        toggleNotificationCenter(state) {
            state.notificationCenter.open = !state.notificationCenter.open;
        }
    },
    actions: {
        async getCurrentUser({ commit }) {
            commit("updateLoadingUser", { key: "get", value: true });
            let currentUser = await CurrentUser.include(
                "roles",
                "permissions"
            ).$find("current");
            commit("updateUser", currentUser);
            commit("updateLoadingUser", { key: "get", value: false });
            return currentUser;
        },
        async getRoles({ commit }) {
            let roles = await Role.include("permissions").$get();
            commit("updateRoles", roles);
            return roles;
        },
        async getPermissions({ commit }) {
            let permissions = await Permission.$get();
            commit("updatePermissions", permissions);
            return permissions;
        }
    }
});
