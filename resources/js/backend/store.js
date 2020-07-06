import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        notificationCenter: {
            open: false,
            notifications: [
                {
                    id:1,
                    message:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit",
                    type: "is-primary"
                },
                {
                    id:2,
                    message:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit",
                    type: "is-default"
                }
            ]
        },
        charts: {
            colors: ["#0984E3", "#B86BFF", "#043053"]
        },
        logo: "/images/LOGO.png",
        loading: {
            user: false
        }
    },
    mutations: {
        /* A fit-them-all commit */
        basic(state, payload) {
            state[payload.key] = payload.value;
        },
        /* User */
        updateUser(state, user) {
            state.user = user;
        },
        updateLoadingUser(state, isLoading) {
            state.loading.user = isLoading;
        },
        /* Notification center */
        updateNotificationCenter(state, isOpen) {
            state.notificationCenter.open = isOpen;
        },
        toggleNotificationCenter(state) {
            state.notificationCenter.open = !state.notificationCenter.open;
        }
    },
    actions: {}
});
