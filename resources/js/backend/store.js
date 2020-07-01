import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        notificationCenter: {
            open: false
        },
        charts:{
            colors:['#0984E3','#043053'],
        },
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
