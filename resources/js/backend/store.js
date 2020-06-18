import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
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
        updateUserLoading(state, isLoading) {
            state.loading.user = isLoading;
        }
    },
    actions: {}
});
