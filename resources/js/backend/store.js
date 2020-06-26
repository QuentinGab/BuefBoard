import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// import { CSSGlobalVariables } from 'css-global-variables/src/css-global-variables.js';
// let cssVar = new CSSGlobalVariables();
// let allStyle = {};
// for(let v in cssVar){
//     allStyle[v] = cssVar[v];
// }

export default new Vuex.Store({
    state: {
        user: {},
        // style: allStyle,
        // cssVar: cssVar,
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
        //Style
        updateStyle(state,style){
            state.style = style;
        },
        updateColors(state,colors){
            state.style.colors = colors;
        },

    },
    actions: {}
});
