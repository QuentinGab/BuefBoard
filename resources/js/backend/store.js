import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        api: {
            users: "/api/v1/users"
        },
        user: {}
    },
    mutations: {
        /* A fit-them-all commit */
        basic(state, payload) {
            state[payload.key] = payload.value;
        }
    },
    actions: {}
});
