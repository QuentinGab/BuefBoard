(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/TitleBar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/TitleBar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TitleBar",
  props: {
    title: {
      type: String,
      "default": function _default() {
        return "";
      }
    },
    menu: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  components: {},
  data: function data() {
    return {};
  },
  computed: {},
  mounted: function mounted() {
    console.log("Component mounted.");
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/users/UserForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b/components/TitleBar */ "./resources/js/backend/components/TitleBar.vue");
/* harmony import */ var lodash_differenceBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/differenceBy */ "./node_modules/lodash/differenceBy.js");
/* harmony import */ var lodash_differenceBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_differenceBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _b_models_Role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b/models/Role */ "./resources/js/backend/models/Role.js");
/* harmony import */ var _b_models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b/models/User */ "./resources/js/backend/models/User.js");


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
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserForm",
  components: {
    TitleBar: _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    id: {
      "default": null
    }
  },
  data: function data() {
    return {
      user: new _b_models_User__WEBPACK_IMPORTED_MODULE_4__["default"]({
        id: null,
        first_name: "",
        last_name: "",
        email: "",
        created_at: "",
        updated_at: "",
        deleted_at: null,
        email_verified_at: null,
        blocked_at: null
      }),
      roles: [],
      loading: {
        user: false,
        roles: false,
        email_verification: false
      }
    };
  },
  computed: {},
  methods: {
    differenceRoles: function differenceRoles(r1, r2) {
      return lodash_differenceBy__WEBPACK_IMPORTED_MODULE_2___default()(r1, r2, "id");
    },
    getRoles: function getRoles() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading.roles = true;
                _context.next = 3;
                return _b_models_Role__WEBPACK_IMPORTED_MODULE_3__["default"].include("permissions").$get()["catch"](function (err) {
                  _this.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 3:
                _this.roles = _context.sent;
                _this.loading.roles = false;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getUser: function getUser() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading.user = true;
                _context2.next = 3;
                return _b_models_User__WEBPACK_IMPORTED_MODULE_4__["default"].include("roles").$find(_this2.id)["catch"](function (err) {
                  _this2.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 3:
                _this2.user = _context2.sent;
                _this2.loading.user = false;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    saveUser: function saveUser() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.user.save().then(function (response) {
                  _this3.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this3.user.fullname, " has been updated"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                })["catch"](function (err) {
                  _this3.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    blockUser: function blockUser() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this4.user.block().save().then(function (response) {
                  _this4.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this4.user.fullname, " has been blocked"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                })["catch"](function (err) {
                  _this4.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });

                  _this4.getUser();
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    unblockUser: function unblockUser() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.user.unblock().save().then(function (response) {
                  _this5.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this5.user.fullname, " has been unblocked"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                })["catch"](function (err) {
                  _this5.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    restoreUser: function restoreUser() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this6.user.restore().then(function (response) {
                  _this6.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this6.user.fullname, " has been restored"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                })["catch"](function (err) {
                  _this6.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 2:
                _this6.getUser();

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    deleteUser: function deleteUser() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this7.user["delete"]().then(function (response) {
                  _this7.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this7.user.fullname, " has been trashed"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                })["catch"](function (err) {
                  _this7.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 2:
                _this7.getUser();

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    destroyUser: function destroyUser() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this8.user.destroy().then(function (response) {
                  _this8.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this8.user.fullname, " has been destroyed"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });

                  router.push({
                    name: "users"
                  });
                })["catch"](function (err) {
                  _this8.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });

                  _this8.getUser();
                });

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    confirmRestore: function confirmRestore() {
      var _this9 = this;

      this.$buefy.dialog.confirm({
        title: "Restoring user",
        message: "Are you sure you want to <b>restore</b> ".concat(this.user.fullname, "? This action can be undone."),
        confirmText: "Restore User",
        type: "is-primary",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this9.restoreUser();
        }
      });
    },
    confirmDelete: function confirmDelete() {
      var _this10 = this;

      if (this.user.trashed) {
        return this.confirmDestroy();
      }

      this.$buefy.dialog.confirm({
        title: "Deleting user",
        message: "Are you sure you want to <b>delete</b> ".concat(this.user.fullname, "? This action can be undone."),
        confirmText: "Delete User",
        type: "is-danger",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this10.deleteUser();
        }
      });
    },
    confirmDestroy: function confirmDestroy() {
      var _this11 = this;

      this.$buefy.dialog.confirm({
        title: "Destroying user",
        message: "Are you sure you want to <b>destroy</b> ".concat(this.user.fullname, "? This action can NOT be undone."),
        confirmText: "Destroy User",
        type: "is-danger",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this11.destroyUser();
        }
      });
    }
  },
  created: function created() {
    this.getUser();
    this.getRoles();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/TitleBar.vue?vue&type=template&id=4d8683ea&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/TitleBar.vue?vue&type=template&id=4d8683ea& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "bb-title-bar" }, [
    _c("div", { staticClass: "level" }, [
      _c("div", { staticClass: "level-left" }, [
        _c("h1", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "level-right" }, [
        _c(
          "nav",
          { staticClass: "breadcrumb", attrs: { "aria-label": "breadcrumbs" } },
          [
            _c(
              "ul",
              _vm._l(_vm.menu, function(menuItem, index) {
                return _c(
                  "li",
                  { key: index },
                  [
                    menuItem.to
                      ? _c("router-link", { attrs: { to: menuItem.to } }, [
                          _vm._v(_vm._s(menuItem.name))
                        ])
                      : menuItem.href
                      ? _c("a", { attrs: { href: menuItem.href } }, [
                          _vm._v(_vm._s(menuItem.name))
                        ])
                      : _vm._e()
                  ],
                  1
                )
              }),
              0
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserForm.vue?vue&type=template&id=6e0fd050&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/users/UserForm.vue?vue&type=template&id=6e0fd050& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          title: "Manage Users",
          menu: [
            { name: "users", to: { name: "users.index" } },
            {
              name: _vm.id ? "edit" : "new",
              to: {
                name: _vm.id ? "users.edit" : "users.new",
                params: { id: _vm.id }
              }
            }
          ]
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "p-1" }, [
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column is-10-desktop is-8-fullhd" }, [
            _c(
              "div",
              { staticClass: "bb-box" },
              [
                _vm.user.trashed
                  ? _c(
                      "b-notification",
                      {
                        attrs: {
                          type: "is-danger",
                          role: "alert",
                          closable: false
                        }
                      },
                      [
                        _c("div", { staticClass: "level" }, [
                          _c(
                            "div",
                            { staticClass: "level-left" },
                            [
                              _c("b-icon", { attrs: { icon: "alert-circle" } }),
                              _vm._v(
                                "\n                                This user is trashed.\n                            "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "level-right" },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { type: "is-danger" },
                                  on: { click: _vm.confirmRestore }
                                },
                                [_vm._v("Restore")]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  : _vm.user.blocked
                  ? _c(
                      "b-notification",
                      {
                        staticClass: "is-marginless",
                        attrs: {
                          type: "is-warning",
                          role: "alert",
                          closable: false
                        }
                      },
                      [
                        _c("div", { staticClass: "level" }, [
                          _c(
                            "div",
                            { staticClass: "level-left" },
                            [
                              _c("b-icon", { attrs: { icon: "alert" } }),
                              _vm._v(
                                "\n                                This user is blocked.\n                            "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "level-right" },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { type: "is-warning" },
                                  on: { click: _vm.unblockUser }
                                },
                                [_vm._v("Unblock")]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "p-1" },
                  [
                    _c(
                      "b-field",
                      { attrs: { horizontal: "" } },
                      [
                        _c(
                          "template",
                          { slot: "label" },
                          [
                            _c("b-tag", { attrs: { size: "is-large" } }, [
                              _vm._v("#" + _vm._s(_vm.user.id))
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("h1", { staticClass: "title" }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.user.fullname) +
                              "\n                            "
                          )
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { horizontal: "", label: "Information" } },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "First Name",
                              "label-for": "first_name",
                              expand: ""
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { id: "first_name" },
                              model: {
                                value: _vm.user.first_name,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "first_name", $$v)
                                },
                                expression: "user.first_name"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Last Name",
                              "label-for": "last_name",
                              expand: ""
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { id: "last_name" },
                              model: {
                                value: _vm.user.last_name,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "last_name", $$v)
                                },
                                expression: "user.last_name"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { horizontal: "", label: "" } },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Email",
                              "label-for": "email",
                              type: !_vm.user.email_verified
                                ? "is-warning"
                                : null,
                              message: _vm.user.email_verified
                                ? "This email is verified"
                                : "This email is not verified"
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: {
                                id: "email",
                                type: "email",
                                disabled: ""
                              },
                              model: {
                                value: _vm.user.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "email", $$v)
                                },
                                expression: "user.email"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        !_vm.user.email_verified
                          ? _c(
                              "b-field",
                              { attrs: { label: "Email verification" } },
                              [
                                _c(
                                  "b-button",
                                  {
                                    attrs: { type: "is-primary", outlined: "" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Resend the verification email\n                                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { horizontal: "", label: "Roles" } },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "field is-grouped is-grouped-multiline"
                          },
                          [
                            _vm._l(_vm.user.roles, function(role) {
                              return _c(
                                "b-checkbox-button",
                                {
                                  key: role.id,
                                  attrs: {
                                    "native-value": role,
                                    type: "is-primary"
                                  },
                                  model: {
                                    value: _vm.user.roles,
                                    callback: function($$v) {
                                      _vm.$set(_vm.user, "roles", $$v)
                                    },
                                    expression: "user.roles"
                                  }
                                },
                                [_c("span", [_vm._v(_vm._s(role.name))])]
                              )
                            }),
                            _vm._v(" "),
                            _vm._l(
                              _vm.differenceRoles(_vm.roles, _vm.user.roles),
                              function(role) {
                                return _c(
                                  "b-checkbox-button",
                                  {
                                    key: role.id,
                                    attrs: {
                                      "native-value": role,
                                      type: "is-primary"
                                    },
                                    model: {
                                      value: _vm.user.roles,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "roles", $$v)
                                      },
                                      expression: "user.roles"
                                    }
                                  },
                                  [_c("span", [_vm._v(_vm._s(role.name))])]
                                )
                              }
                            )
                          ],
                          2
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { horizontal: "", label: "" } },
                      [
                        _c("b-field", [
                          _c(
                            "div",
                            { staticClass: "buttons" },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "is-primary",
                                    loading: this.loading.user,
                                    "icon-left": "content-save"
                                  },
                                  on: { click: _vm.saveUser }
                                },
                                [_vm._v("Save")]
                              ),
                              _vm._v(" "),
                              _c("b-button", {
                                attrs: {
                                  type: "is-default",
                                  size: "is-small",
                                  loading: this.loading.user,
                                  "icon-left": "refresh"
                                },
                                on: { click: _vm.getUser }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("b-field", [
                          _c(
                            "p",
                            { staticClass: "control has-text-right" },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: !_vm.user.trashed,
                                      expression: "!user.trashed"
                                    }
                                  ],
                                  attrs: {
                                    type: "is-light",
                                    loading: this.loading.user
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.user.blocked
                                        ? _vm.unblockUser()
                                        : _vm.blockUser()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.user.blocked ? "Unblock" : "Block"
                                    )
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "is-light",
                                    loading: this.loading.user
                                  },
                                  on: { click: _vm.confirmDelete }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.user.trashed ? "Destroy" : "Delete"
                                    )
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/TitleBar.vue":
/*!******************************************************!*\
  !*** ./resources/js/backend/components/TitleBar.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TitleBar_vue_vue_type_template_id_4d8683ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleBar.vue?vue&type=template&id=4d8683ea& */ "./resources/js/backend/components/TitleBar.vue?vue&type=template&id=4d8683ea&");
/* harmony import */ var _TitleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBar.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/TitleBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TitleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TitleBar_vue_vue_type_template_id_4d8683ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TitleBar_vue_vue_type_template_id_4d8683ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/TitleBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/TitleBar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/backend/components/TitleBar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TitleBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/TitleBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/TitleBar.vue?vue&type=template&id=4d8683ea&":
/*!*************************************************************************************!*\
  !*** ./resources/js/backend/components/TitleBar.vue?vue&type=template&id=4d8683ea& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_template_id_4d8683ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TitleBar.vue?vue&type=template&id=4d8683ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/TitleBar.vue?vue&type=template&id=4d8683ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_template_id_4d8683ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_template_id_4d8683ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/models/Role.js":
/*!*********************************************!*\
  !*** ./resources/js/backend/models/Role.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Role; });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./resources/js/backend/models/Model.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Role = /*#__PURE__*/function (_Model) {
  _inherits(Role, _Model);

  var _super = _createSuper(Role);

  function Role() {
    _classCallCheck(this, Role);

    return _super.apply(this, arguments);
  }

  _createClass(Role, [{
    key: "resource",
    value: function resource() {
      return "roles";
    }
  }]);

  return Role;
}(_Model__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/backend/views/users/UserForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/backend/views/users/UserForm.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserForm_vue_vue_type_template_id_6e0fd050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm.vue?vue&type=template&id=6e0fd050& */ "./resources/js/backend/views/users/UserForm.vue?vue&type=template&id=6e0fd050&");
/* harmony import */ var _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.vue?vue&type=script&lang=js& */ "./resources/js/backend/views/users/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserForm_vue_vue_type_template_id_6e0fd050___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserForm_vue_vue_type_template_id_6e0fd050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/users/UserForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/users/UserForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/backend/views/users/UserForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/users/UserForm.vue?vue&type=template&id=6e0fd050&":
/*!**************************************************************************************!*\
  !*** ./resources/js/backend/views/users/UserForm.vue?vue&type=template&id=6e0fd050& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_6e0fd050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=template&id=6e0fd050& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserForm.vue?vue&type=template&id=6e0fd050&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_6e0fd050___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_6e0fd050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);