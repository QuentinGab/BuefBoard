(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserIndex.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/users/UserIndex.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "UserIndex",
  components: {},
  data: function data() {
    var data = [{
      id: 1,
      first_name: "Jesse",
      last_name: "Simmons",
      date: "2016-10-15 13:43:27",
      gender: "Male"
    }, {
      id: 2,
      first_name: "John",
      last_name: "Jacobs",
      date: "2016-12-15 06:00:53",
      gender: "Male"
    }, {
      id: 3,
      first_name: "Tina",
      last_name: "Gilbert",
      date: "2016-04-26 06:26:28",
      gender: "Female"
    }, {
      id: 4,
      first_name: "Clarence",
      last_name: "Flores",
      date: "2016-04-10 10:28:46",
      gender: "Male"
    }, {
      id: 5,
      first_name: "Anne",
      last_name: "Lee",
      date: "2016-12-06 14:38:38",
      gender: "Female"
    }];
    return {
      data: data,
      checkedRows: [],
      columns: [{
        field: "id",
        label: "ID",
        width: "40",
        numeric: true,
        sortable: true
      }, {
        field: "first_name",
        label: "First Name",
        sortable: true
      }, {
        field: "last_name",
        label: "Last Name"
      }, {
        field: "date",
        label: "Date"
      }, {
        field: "gender",
        label: "Gender"
      }],
      //paginate
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: "bottom",
      currentPage: 1,
      perPage: 10,
      //sort
      defaultSortDirection: "asc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small"
    };
  },
  computed: {
    total: function total() {
      return this.data.length;
    }
  },
  methods: {
    confirmDelete: function confirmDelete() {
      var _this = this;

      this.$buefy.dialog.confirm({
        title: "Deleting users",
        message: "Are you sure you want to <b>delete</b> your account? This action cannot be undone.",
        confirmText: "Delete Users",
        type: "is-danger",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this.bulkDelete();
        }
      });
    },
    bulkDelete: function bulkDelete() {
      var _this2 = this;

      this.$buefy.snackbar.open({
        duration: 5000,
        message: "users have been deleted",
        type: "is-danger",
        position: "is-bottom-right",
        actionText: "Undo",
        queue: false,
        onAction: function onAction() {
          _this2.$buefy.toast.open({
            message: "Action pressed",
            queue: false
          });
        }
      });
      return true;
    }
  },
  mounted: function mounted() {
    console.log("Component mounted.");
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserIndex.vue?vue&type=template&id=8aeb2414&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/users/UserIndex.vue?vue&type=template&id=8aeb2414& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "p-1" }, [
    _c("div", { staticClass: "level" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "level-right" }, [
        _c(
          "nav",
          { staticClass: "breadcrumb", attrs: { "aria-label": "breadcrumbs" } },
          [
            _c("ul", [
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/users/index" } }, [
                    _vm._v("Users")
                  ])
                ],
                1
              )
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "bb-table" },
      [
        _c("div", { staticClass: "level" }, [
          _c(
            "div",
            { staticClass: "level-left" },
            [
              _c(
                "b-button",
                {
                  staticClass: "is-primary",
                  attrs: {
                    "icon-left": "plus-circle-outline",
                    to: "/users/new",
                    tag: "router-link"
                  }
                },
                [_vm._v("\n                    Add\n                ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "level-right" }, [
            _c(
              "div",
              { staticClass: "buttons has-addons" },
              [
                _c(
                  "b-button",
                  {
                    staticClass: "is-danger",
                    attrs: {
                      "icon-left": "delete",
                      disabled: _vm.checkedRows.length > 0 ? false : true
                    },
                    on: { click: _vm.confirmDelete }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.checkedRows.length) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("b-button", { attrs: { "icon-left": "dots-vertical" } })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "b-table",
          {
            attrs: {
              data: _vm.data,
              paginated: _vm.isPaginated,
              "per-page": _vm.perPage,
              "current-page": _vm.currentPage,
              "pagination-simple": _vm.isPaginationSimple,
              "pagination-position": _vm.paginationPosition,
              "default-sort-direction": "asc",
              "default-sort": "id",
              "aria-next-label": "Next page",
              "aria-previous-label": "Previous page",
              "aria-page-label": "Page",
              "aria-current-label": "Current page",
              columns: _vm.columns,
              "checked-rows": _vm.checkedRows,
              checkable: ""
            },
            on: {
              "update:currentPage": function($event) {
                _vm.currentPage = $event
              },
              "update:current-page": function($event) {
                _vm.currentPage = $event
              },
              "update:checkedRows": function($event) {
                _vm.checkedRows = $event
              },
              "update:checked-rows": function($event) {
                _vm.checkedRows = $event
              }
            }
          },
          [
            _c("template", { slot: "bottom-left" }, [
              _c("div", [
                _c("div", [
                  _c("b", [_vm._v("Total checked")]),
                  _vm._v(
                    ": " +
                      _vm._s(_vm.checkedRows.length) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("b", [_vm._v("Total row")]),
                  _vm._v(": " + _vm._s(_vm.total))
                ])
              ])
            ])
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "level-left" }, [
      _c("h1", { staticClass: "title" }, [_vm._v("Manage Users")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/views/users/UserIndex.vue":
/*!********************************************************!*\
  !*** ./resources/js/backend/views/users/UserIndex.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserIndex_vue_vue_type_template_id_8aeb2414___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserIndex.vue?vue&type=template&id=8aeb2414& */ "./resources/js/backend/views/users/UserIndex.vue?vue&type=template&id=8aeb2414&");
/* harmony import */ var _UserIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserIndex.vue?vue&type=script&lang=js& */ "./resources/js/backend/views/users/UserIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserIndex_vue_vue_type_template_id_8aeb2414___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserIndex_vue_vue_type_template_id_8aeb2414___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/users/UserIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/users/UserIndex.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/backend/views/users/UserIndex.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/users/UserIndex.vue?vue&type=template&id=8aeb2414&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/views/users/UserIndex.vue?vue&type=template&id=8aeb2414& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserIndex_vue_vue_type_template_id_8aeb2414___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserIndex.vue?vue&type=template&id=8aeb2414& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserIndex.vue?vue&type=template&id=8aeb2414&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserIndex_vue_vue_type_template_id_8aeb2414___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserIndex_vue_vue_type_template_id_8aeb2414___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);