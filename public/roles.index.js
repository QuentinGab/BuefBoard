(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles.index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/roles/RoleIndex.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/roles/RoleIndex.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b/components/TitleBar */ "./resources/js/backend/components/TitleBar.vue");
/* harmony import */ var _b_models_Role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b/models/Role */ "./resources/js/backend/models/Role.js");
/* harmony import */ var _b_models_Permission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b/models/Permission */ "./resources/js/backend/models/Permission.js");
/* harmony import */ var lodash_differenceBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/differenceBy */ "./node_modules/lodash/differenceBy.js");
/* harmony import */ var lodash_differenceBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_differenceBy__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "RoleIndex",
  components: {
    TitleBar: _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      roles: [],
      permissions: [],
      loading: {
        roles: false,
        permissions: false
      },
      checkboxGroup: []
    };
  },
  computed: {},
  methods: {
    differencePermissions: function differencePermissions(p1, p2) {
      return lodash_differenceBy__WEBPACK_IMPORTED_MODULE_4___default()(p1, p2, "id");
    },
    saveRole: function saveRole(role) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return role.save().then(function (response) {
                  _this.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(role.name, " has been updated"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                })["catch"](function (err) {
                  _this.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getRoles: function getRoles() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading.roles = true;
                _context2.next = 3;
                return _b_models_Role__WEBPACK_IMPORTED_MODULE_2__["default"].include("permissions").$get()["catch"](function (err) {
                  _this2.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 3:
                _this2.roles = _context2.sent;
                _this2.loading.roles = false;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getPermissions: function getPermissions() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.loading.permissions = true;
                _context3.next = 3;
                return _b_models_Permission__WEBPACK_IMPORTED_MODULE_3__["default"].get().then(function (response) {
                  _this3.permissions = response.data;
                })["catch"](function (err) {
                  _this3.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 3:
                response = _context3.sent;
                _this3.loading.permissions = false;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  created: function created() {
    this.getRoles();
    this.getPermissions();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/roles/RoleIndex.vue?vue&type=template&id=8091ecc0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/roles/RoleIndex.vue?vue&type=template&id=8091ecc0& ***!
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
  return _c(
    "section",
    [
      _c("title-bar", {
        staticClass: "p-1",
        attrs: {
          title: "Manage Roles",
          menu: [{ name: "roles", to: "/roles/index" }]
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "p-1" },
        _vm._l(_vm.roles, function(role) {
          return _c("div", { key: role.id, staticClass: "bb-box" }, [
            _c("div", { staticClass: "box-header" }, [
              _c("div", { staticClass: "level-left" }, [
                _c(
                  "h6",
                  { staticClass: "title" },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(role.name) +
                        "\n                        "
                    ),
                    _c("b-tag", { attrs: { rounded: "" } }, [
                      _vm._v(_vm._s(role.users_count))
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "level-right" }, [
                _c(
                  "div",
                  [
                    role.name !== "god"
                      ? _c(
                          "b-button",
                          {
                            attrs: {
                              "icon-left": "content-save-outline",
                              type: "is-primary",
                              size: "is-small"
                            },
                            on: {
                              click: function($event) {
                                return _vm.saveRole(role)
                              }
                            }
                          },
                          [_vm._v("save")]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "box-content" },
              [
                _c("b-loading", {
                  attrs: {
                    "is-full-page": false,
                    active: _vm.loading.permissions
                  },
                  on: {
                    "update:active": function($event) {
                      return _vm.$set(_vm.loading, "permissions", $event)
                    }
                  }
                }),
                _vm._v(" "),
                role.name == "god"
                  ? _c("div", [_c("p", [_vm._v("A god can do everthing")])])
                  : _c(
                      "div",
                      { staticClass: "field is-grouped is-grouped-multiline" },
                      [
                        _vm._l(role.permissions, function(permission) {
                          return _c(
                            "b-checkbox-button",
                            {
                              key: permission.id,
                              attrs: {
                                "native-value": permission,
                                type: "is-light"
                              },
                              model: {
                                value: role.permissions,
                                callback: function($$v) {
                                  _vm.$set(role, "permissions", $$v)
                                },
                                expression: "role.permissions"
                              }
                            },
                            [_c("span", [_vm._v(_vm._s(permission.name))])]
                          )
                        }),
                        _vm._v(" "),
                        _vm._l(
                          _vm.differencePermissions(
                            _vm.permissions,
                            role.permissions
                          ),
                          function(permission) {
                            return _c(
                              "b-checkbox-button",
                              {
                                key: permission.id,
                                attrs: {
                                  "native-value": permission,
                                  type: "is-primary"
                                },
                                model: {
                                  value: role.permissions,
                                  callback: function($$v) {
                                    _vm.$set(role, "permissions", $$v)
                                  },
                                  expression: "role.permissions"
                                }
                              },
                              [_c("span", [_vm._v(_vm._s(permission.name))])]
                            )
                          }
                        )
                      ],
                      2
                    )
              ],
              1
            )
          ])
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/views/roles/RoleIndex.vue":
/*!********************************************************!*\
  !*** ./resources/js/backend/views/roles/RoleIndex.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoleIndex_vue_vue_type_template_id_8091ecc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleIndex.vue?vue&type=template&id=8091ecc0& */ "./resources/js/backend/views/roles/RoleIndex.vue?vue&type=template&id=8091ecc0&");
/* harmony import */ var _RoleIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleIndex.vue?vue&type=script&lang=js& */ "./resources/js/backend/views/roles/RoleIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoleIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleIndex_vue_vue_type_template_id_8091ecc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoleIndex_vue_vue_type_template_id_8091ecc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/roles/RoleIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/roles/RoleIndex.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/backend/views/roles/RoleIndex.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/roles/RoleIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/roles/RoleIndex.vue?vue&type=template&id=8091ecc0&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/views/roles/RoleIndex.vue?vue&type=template&id=8091ecc0& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleIndex_vue_vue_type_template_id_8091ecc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleIndex.vue?vue&type=template&id=8091ecc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/roles/RoleIndex.vue?vue&type=template&id=8091ecc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleIndex_vue_vue_type_template_id_8091ecc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleIndex_vue_vue_type_template_id_8091ecc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);