(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/charts/LineChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/charts/LineChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LineChart",
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  // mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object
    },
    mode: {
      type: String,
      "default": "light",
      validator: function validator(value) {
        return ["light", "full"].indexOf(value) !== -1;
      }
    }
  },
  data: function data() {
    return {
      defaultGradient: [{
        step: 0,
        color: "#e5e5e5",
        alpha: 0.05
      }, {
        step: 1,
        color: "#e5e5e5",
        alpha: 1
      }],
      defaultOptions: {
        light: {
          tooltips: {
            mode: "index",
            intersect: false
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              display: false,
              gridLines: {
                display: false
              }
            }]
          },
          responsive: true,
          maintainAspectRatio: false
        },
        full: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    };
  },
  watch: {
    chartData: function chartData() {
      this.updateChartGradient();
      this.renderChart(this.chartData, this.finalOptions);
    }
  },
  computed: {
    finalOptions: function finalOptions() {
      var _this$options;

      return (_this$options = this.options) !== null && _this$options !== void 0 ? _this$options : this.defaultOptions[this.mode];
    }
  },
  methods: {
    updateChartGradient: function updateChartGradient() {
      var _this = this;

      if (!this.chartData) {
        return null;
      }

      this.chartData.datasets.forEach(function (dataset) {
        if (dataset.backgroundGradient) {
          dataset.backgroundColor = _this.createGradient();
        }
      });
      return this.chartData;
    },
    createGradient: function createGradient(colorStop) {
      var _colorStop;

      colorStop = (_colorStop = colorStop) !== null && _colorStop !== void 0 ? _colorStop : this.defaultGradient;
      var gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, this.$refs.canvas.clientHeight, 0, 0); // console.log(this.$data);
      // console.log(this.$data._chart.ctx);

      colorStop.forEach(function (e) {
        gradient.addColorStop(e.step, tinycolor(e.color).setAlpha(e.alpha).toRgbString());
      });
      return gradient;
    }
  },
  mounted: function mounted() {
    this.renderChart(this.chartData, this.finalOptions);
    this.updateChartGradient();

    this.$data._chart.update();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/charts/cards/CardCountChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/charts/cards/CardCountChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _b_components_charts_LineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b/components/charts/LineChart */ "./resources/js/backend/components/charts/LineChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CardCountChart",
  components: {
    LineChart: _b_components_charts_LineChart__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    mode: {
      type: String,
      "default": "light",
      validator: function validator(value) {
        return ["light", "full"].indexOf(value) !== -1;
      }
    },
    chartData: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      chartStyle: {
        height: "100%",
        width: "100%",
        position: "relative"
      }
    };
  },
  computed: {},
  methods: {},
  mounted: function mounted() {},
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/users/CardUsersChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/users/CardUsersChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _b_components_charts_cards_CardCountChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @b/components/charts/cards/CardCountChart */ "./resources/js/backend/components/charts/cards/CardCountChart.vue");
/* harmony import */ var _b_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b/models/User */ "./resources/js/backend/models/User.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CardUserChart",
  components: {
    CardCountChart: _b_components_charts_cards_CardCountChart__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {},
  data: function data() {
    return {
      subtitle: "Users",
      icon: null,
      usersData: null,
      total: 0,
      period: "Last Month"
    };
  },
  watch: {
    dates: function dates(current, old) {
      console.log(current);
      this.getData();
    }
  },
  computed: {
    dateStart: function dateStart() {
      if (this.period == "Last Month") {
        return moment().subtract(1, "months").format("YYYY-MM-DD");
      }

      if (this.period == "Last Week") {
        return moment().subtract(1, "weeks").format("YYYY-MM-DD");
      }

      return moment(this.period).format("YYYY-MM-DD");
    },
    dateEnd: function dateEnd() {
      return moment().format("YYYY-MM-DD");
    },
    chartData: function chartData() {
      if (!this.usersData) {
        return null;
      }

      return {
        labels: this.labels,
        datasets: [{
          label: "Users",
          pointBackgroundColor: "transparent",
          borderWidth: 1,
          pointBorderColor: "transparent",
          backgroundColor: null,
          backgroundGradient: true,
          data: this.cData
        }]
      };
    },
    labels: function labels() {
      return this.getDateRange(moment(this.dateStart), moment(this.dateEnd), "ddd D MMM");
    },
    sum: function sum() {
      if (!this.usersData) {
        return 0;
      }

      return Object.values(this.usersData).reduce(function (previous, current) {
        return previous + current;
      }, 0);
    },
    cData: function cData() {
      var _this = this;

      if (!this.usersData) {
        return null;
      }

      var data = [];
      this.getDateRange(moment(this.dateStart), moment(this.dateEnd), "YYYY-MM-DD").forEach(function (day) {
        var _this$usersData$day;

        data.push((_this$usersData$day = _this.usersData[day]) !== null && _this$usersData$day !== void 0 ? _this$usersData$day : 0);
      });
      return data;
    }
  },
  methods: {
    moment: function (_moment) {
      function moment() {
        return _moment.apply(this, arguments);
      }

      moment.toString = function () {
        return _moment.toString();
      };

      return moment;
    }(function () {
      return moment();
    }),
    getDateRange: function getDateRange(startDate, endDate, format) {
      var now = startDate.clone(),
          dates = [];

      while (now.isSameOrBefore(endDate)) {
        dates.push(now.format(format));
        now.add(1, "days");
      }

      return dates;
    },
    getData: function getData() {
      var _this2 = this;

      axios.get("/api/v1/users/stats", {
        params: {
          "filter[created_after]": this.dateStart
        }
      }).then(function (response) {
        var d = response.data;
        _this2.usersData = d.data;

        if (d.meta.total) {
          _this2.total = d.meta.total;
        }
      });
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _b_components_users_CardUsersChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @b/components/users/CardUsersChart */ "./resources/js/backend/components/users/CardUsersChart.vue");
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dashboard",
  components: {
    CardUsersChart: _b_components_users_CardUsersChart__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  computed: {},
  mounted: function mounted() {
    console.log("Dashboard mounted.");
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/charts/cards/CardCountChart.vue?vue&type=template&id=2547d7e5&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/charts/cards/CardCountChart.vue?vue&type=template&id=2547d7e5& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card bb-card-chart" },
    [
      _c(
        "div",
        { staticClass: "chart-container is-background" },
        [
          _vm.chartData
            ? _c("line-chart", {
                ref: "chart",
                attrs: {
                  mode: _vm.mode,
                  styles: _vm.chartStyle,
                  "chart-data": _vm.chartData
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/users/CardUsersChart.vue?vue&type=template&id=7eb84b3d&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/users/CardUsersChart.vue?vue&type=template&id=7eb84b3d& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("card-count-chart", { attrs: { "chart-data": _vm.chartData } }, [
    _c("div", { staticClass: "columns is-marginless" }, [
      _c("div", { staticClass: "column" }, [
        _c("p", { staticClass: "title is-1 is-marginless" }, [
          _vm._v(_vm._s(_vm.total || _vm.sum))
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "heading" }, [_vm._v(_vm._s(_vm.subtitle))])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "column is-narrow" },
        [
          _c(
            "b-dropdown",
            {
              attrs: { "aria-role": "list", position: "is-bottom-left" },
              model: {
                value: _vm.period,
                callback: function($$v) {
                  _vm.period = $$v
                },
                expression: "period"
              }
            },
            [
              _c(
                "button",
                {
                  staticClass: "button is-default is-small",
                  attrs: { slot: "trigger" },
                  slot: "trigger"
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.period) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-dropdown-item",
                { attrs: { "aria-role": "listitem", value: "Last Week" } },
                [_vm._v("Last Week")]
              ),
              _vm._v(" "),
              _c(
                "b-dropdown-item",
                { attrs: { "aria-role": "listitem", value: "Last Month" } },
                [_vm._v("Last Month")]
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/Dashboard.vue?vue&type=template&id=2fe72eec&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/Dashboard.vue?vue&type=template&id=2fe72eec& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "section" }, [
    _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column is-6" }, [_c("card-users-chart")], 1)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/charts/LineChart.vue":
/*!**************************************************************!*\
  !*** ./resources/js/backend/components/charts/LineChart.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/charts/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/charts/LineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/charts/LineChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/components/charts/LineChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/charts/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/charts/cards/CardCountChart.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/backend/components/charts/cards/CardCountChart.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardCountChart_vue_vue_type_template_id_2547d7e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardCountChart.vue?vue&type=template&id=2547d7e5& */ "./resources/js/backend/components/charts/cards/CardCountChart.vue?vue&type=template&id=2547d7e5&");
/* harmony import */ var _CardCountChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardCountChart.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/charts/cards/CardCountChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardCountChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardCountChart_vue_vue_type_template_id_2547d7e5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardCountChart_vue_vue_type_template_id_2547d7e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/charts/cards/CardCountChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/charts/cards/CardCountChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/backend/components/charts/cards/CardCountChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCountChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardCountChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/charts/cards/CardCountChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCountChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/charts/cards/CardCountChart.vue?vue&type=template&id=2547d7e5&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/backend/components/charts/cards/CardCountChart.vue?vue&type=template&id=2547d7e5& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCountChart_vue_vue_type_template_id_2547d7e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardCountChart.vue?vue&type=template&id=2547d7e5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/charts/cards/CardCountChart.vue?vue&type=template&id=2547d7e5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCountChart_vue_vue_type_template_id_2547d7e5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCountChart_vue_vue_type_template_id_2547d7e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/components/users/CardUsersChart.vue":
/*!******************************************************************!*\
  !*** ./resources/js/backend/components/users/CardUsersChart.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardUsersChart_vue_vue_type_template_id_7eb84b3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardUsersChart.vue?vue&type=template&id=7eb84b3d& */ "./resources/js/backend/components/users/CardUsersChart.vue?vue&type=template&id=7eb84b3d&");
/* harmony import */ var _CardUsersChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardUsersChart.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/users/CardUsersChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardUsersChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardUsersChart_vue_vue_type_template_id_7eb84b3d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardUsersChart_vue_vue_type_template_id_7eb84b3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/users/CardUsersChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/users/CardUsersChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/backend/components/users/CardUsersChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardUsersChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardUsersChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/users/CardUsersChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardUsersChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/users/CardUsersChart.vue?vue&type=template&id=7eb84b3d&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/backend/components/users/CardUsersChart.vue?vue&type=template&id=7eb84b3d& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardUsersChart_vue_vue_type_template_id_7eb84b3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardUsersChart.vue?vue&type=template&id=7eb84b3d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/users/CardUsersChart.vue?vue&type=template&id=7eb84b3d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardUsersChart_vue_vue_type_template_id_7eb84b3d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardUsersChart_vue_vue_type_template_id_7eb84b3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/views/Dashboard.vue":
/*!**************************************************!*\
  !*** ./resources/js/backend/views/Dashboard.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_2fe72eec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=2fe72eec& */ "./resources/js/backend/views/Dashboard.vue?vue&type=template&id=2fe72eec&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/backend/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_2fe72eec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_2fe72eec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/backend/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/Dashboard.vue?vue&type=template&id=2fe72eec&":
/*!*********************************************************************************!*\
  !*** ./resources/js/backend/views/Dashboard.vue?vue&type=template&id=2fe72eec& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_2fe72eec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=2fe72eec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/Dashboard.vue?vue&type=template&id=2fe72eec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_2fe72eec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_2fe72eec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);