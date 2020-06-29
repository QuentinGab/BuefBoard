// Axios & Echo global
require("../bootstrap");
require("@s/fake.scss"); //fix laravel mix bug async router
/* Core */
import Vue from "vue";
import Buefy from "buefy";

/* Router & Store */
import router from "./router";
import store from "./store";

/* Model */
import { Model } from "vue-api-query";

// inject global axios instance as http client to Model
Model.$http = axios;

/* Vue. Main component */
import App from "./App.vue";

/* Vue. Component in recursion */
// import AsideMenuList from "@b/components/AsideMenuList";

/* Collapse mobile aside menu on route change */
router.afterEach(() => {});

Vue.config.productionTip = false;

/* These components are used in recursion algorithm */
// Vue.component("AsideMenuList", AsideMenuList);

/* Main component */
Vue.component("App", App);

/* Buefy */
Vue.use(Buefy);

/*chartjs */

import Chart from "chart.js";
// import the plugin core
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';

// import a particular color scheme
import { Blues3 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer';

/* Glogal */
Chart.defaults.global.defaultFontFamily =
    "'Nunito','Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.tooltips.mode = "index";
Chart.defaults.global.tooltips.intersect = false;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.elements.line.borderCapStyle = 'round';
Chart.defaults.global.elements.line.bordercolor = 'red';
/* Color scheme */
Chart.defaults.global.defaultFontColor = "rgba(0,0,0,0.3)";

Chart.defaults.global.plugins.colorschemes.scheme = Blues3;
Chart.defaults.global.plugins.colorschemes.reverse = true;
Chart.defaults.global.plugins.colorschemes.override = false;
Chart.defaults.global.plugins.colorschemes.fillAlpha = 0.2;

/* GridLines */
Chart.defaults.scale.gridLines.color = "rgba(0,0,0,0.02)";


/* This is main entry point */

new Vue({
    store,
    router,
    render: h => h(App),
    mounted() {
        console.log("app mounted");
    }
}).$mount("#app");
