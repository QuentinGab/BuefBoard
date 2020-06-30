(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
/* harmony import */ var _b_models_Permission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b/models/Permission */ "./resources/js/backend/models/Permission.js");
/* harmony import */ var _b_models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b/models/User */ "./resources/js/backend/models/User.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      user: new _b_models_User__WEBPACK_IMPORTED_MODULE_5__["default"]({
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
      permissions: [],
      loading: {
        user: false,
        roles: false,
        permissions: false,
        save: false,
        refresh: false,
        password: false,
        email_verification: false
      }
    };
  },
  computed: {},
  methods: {
    differenceById: function differenceById(item1, item2) {
      return lodash_differenceBy__WEBPACK_IMPORTED_MODULE_2___default()(item1, item2, "id");
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
                return _b_models_Role__WEBPACK_IMPORTED_MODULE_3__["default"].$get()["catch"](function (err) {
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
    getPermissions: function getPermissions() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading.permissions = true;
                _context2.next = 3;
                return _b_models_Permission__WEBPACK_IMPORTED_MODULE_4__["default"].$get()["catch"](function (err) {
                  _this2.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 3:
                _this2.permissions = _context2.sent;
                _this2.loading.permissions = false;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getUser: function getUser() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.loading.refresh = true;
                _context3.next = 3;
                return _b_models_User__WEBPACK_IMPORTED_MODULE_5__["default"].include("roles", "permissions").$find(_this3.id)["catch"](function (err) {
                  _this3.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 3:
                _this3.user = _context3.sent;
                _this3.loading.refresh = false;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    saveUser: function saveUser() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.loading.save = true;
                _context4.next = 3;
                return _this4.user.save().then(function (response) {
                  _this4.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this4.user.fullname, " has been updated"),
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
                });

              case 3:
                _this4.loading.save = false;

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    blockUser: function blockUser() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.loading.user = true;
                _context5.next = 3;
                return _this5.user.block().save().then(function (response) {
                  _this5.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this5.user.fullname, " has been blocked"),
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

                  _this5.getUser();
                });

              case 3:
                _this5.loading.user = false;

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    unblockUser: function unblockUser() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.loading.user = true;
                _context6.next = 3;
                return _this6.user.unblock().save().then(function (response) {
                  _this6.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this6.user.fullname, " has been unblocked"),
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

              case 3:
                _this6.loading.user = false;

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    restoreUser: function restoreUser() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this7.user.restore().then(function (response) {
                  _this7.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this7.user.fullname, " has been restored"),
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
    deleteUser: function deleteUser() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this8.loading.user = true;
                _context8.next = 3;
                return _this8.user["delete"]().then(function (response) {
                  _this8.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this8.user.fullname, " has been trashed"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });
                })["catch"](function (err) {
                  _this8.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 3:
                _this8.loading.user = false;

                _this8.getUser();

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    destroyUser: function destroyUser() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this9.user.destroy().then(function (response) {
                  _this9.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(_this9.user.fullname, " has been destroyed"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: false
                  });

                  _this9.$router.push({
                    name: "users.index"
                  });
                })["catch"](function (err) {
                  _this9.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });

                  _this9.getUser();
                });

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    sendResetPasswordNotification: function sendResetPasswordNotification() {
      return;
    },
    confirmRestore: function confirmRestore() {
      var _this10 = this;

      this.$buefy.dialog.confirm({
        title: "Restoring user",
        message: "Are you sure you want to <b>restore</b> ".concat(this.user.fullname, "? This action can be undone."),
        confirmText: "Restore User",
        type: "is-primary",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this10.restoreUser();
        }
      });
    },
    confirmDelete: function confirmDelete() {
      var _this11 = this;

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
          return _this11.deleteUser();
        }
      });
    },
    confirmDestroy: function confirmDestroy() {
      var _this12 = this;

      this.$buefy.dialog.confirm({
        title: "Destroying user",
        message: "Are you sure you want to <b>destroy</b> ".concat(this.user.fullname, "? This action can NOT be undone."),
        confirmText: "Destroy User",
        type: "is-danger",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this12.destroyUser();
        }
      });
    },
    confirmResetPassword: function confirmResetPassword() {
      var _this13 = this;

      this.$buefy.dialog.confirm({
        title: "Reset user password",
        message: "Are you sure you want to send a reset password notification?",
        confirmText: "Send Notification",
        type: "is-info",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this13.sendResetPasswordNotification();
        }
      });
    }
  },
  created: function created() {
    this.getUser();
    this.getRoles();
    this.getPermissions();
  },
  mounted: function mounted() {}
});

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
      _c("div", { staticClass: "section" }, [
        _c("div", { staticClass: "columns is-multiline" }, [
          _c(
            "div",
            { staticClass: "column is-12 is-6-fullhd" },
            [
              _vm.user.trashed && !_vm.loading.user
                ? _c(
                    "b-notification",
                    {
                      attrs: {
                        type: "is-danger",
                        role: "alert",
                        "has-icon": "",
                        icon: "delete",
                        closable: false
                      }
                    },
                    [
                      _c(
                        "p",
                        [
                          _vm._v(
                            "\n                        This user is trashed. "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("b-tag", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.user.date_diff(
                                    new Date(),
                                    _vm.user.deleted_date
                                  )
                                ) +
                                "\n                            days ago"
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  )
                : _vm.user.blocked && !_vm.loading.user
                ? _c(
                    "b-notification",
                    {
                      attrs: {
                        type: "is-warning",
                        "has-icon": "",
                        role: "alert",
                        closable: false
                      }
                    },
                    [
                      _c(
                        "p",
                        [
                          _vm._v(
                            "\n                        This user is blocked. "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("b-tag", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.user.date_diff(
                                    new Date(),
                                    _vm.user.blocked_date
                                  )
                                ) +
                                "\n                            days ago\n                        "
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c(
                    "p",
                    { staticClass: "card-header-title" },
                    [
                      _c("b-icon", {
                        attrs: { icon: "account-circle", size: "is-small" }
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Information")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c(
                    "div",
                    {},
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
                                _vm._v(
                                  "\n                                        #" +
                                    _vm._s(_vm.user.id) +
                                    "\n                                    "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("h1", { staticClass: "title" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.user.fullname) +
                                "\n                                "
                            )
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("hr"),
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
                                      attrs: {
                                        type: "is-primary",
                                        outlined: ""
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        Resend the verification email\n                                    "
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
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { horizontal: "", label: "Roles" } },
                        [
                          _c("b-skeleton", {
                            attrs: { height: "36px", active: _vm.loading.roles }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "field is-grouped is-grouped-multiline"
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
                                _vm.differenceById(_vm.roles, _vm.user.roles),
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
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _vm.user.permissions
                        ? _c(
                            "b-field",
                            { attrs: { horizontal: "", label: "Permissions" } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "field is-grouped is-grouped-multiline"
                                },
                                [
                                  _vm._l(_vm.user.permissions, function(
                                    permission
                                  ) {
                                    return _c(
                                      "b-checkbox-button",
                                      {
                                        key: permission.id,
                                        attrs: {
                                          "native-value": permission,
                                          type: "is-primary"
                                        },
                                        model: {
                                          value: _vm.user.permissions,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.user,
                                              "permissions",
                                              $$v
                                            )
                                          },
                                          expression: "user.permissions"
                                        }
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(permission.name))
                                        ])
                                      ]
                                    )
                                  }),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.differenceById(
                                      _vm.permissions,
                                      _vm.user.permissions
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
                                            value: _vm.user.permissions,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.user,
                                                "permissions",
                                                $$v
                                              )
                                            },
                                            expression: "user.permissions"
                                          }
                                        },
                                        [
                                          _c("span", [
                                            _vm._v(_vm._s(permission.name))
                                          ])
                                        ]
                                      )
                                    }
                                  )
                                ],
                                2
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { horizontal: "", label: "" } },
                        [
                          _c("b-field", [
                            _c(
                              "p",
                              { staticClass: "control has-text-right" },
                              [
                                _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      type: "is-primary",
                                      loading: this.loading.save,
                                      "icon-left": "content-save",
                                      disabled: _vm.user.trashed
                                    },
                                    on: { click: _vm.saveUser }
                                  },
                                  [_vm._v("Save")]
                                ),
                                _vm._v(" "),
                                _c("b-button", {
                                  attrs: {
                                    type: "is-default",
                                    loading: this.loading.refresh,
                                    "icon-left": "refresh"
                                  },
                                  on: { click: _vm.getUser }
                                })
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
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("div", { staticClass: "card-header-title" }, [
                  _c(
                    "p",
                    [
                      _c("b-icon", {
                        attrs: { icon: "security", size: "is-small" }
                      }),
                      _vm._v(
                        "\n                                Security\n                            "
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _c(
                  "div",
                  [
                    _c(
                      "b-field",
                      { attrs: { horizontal: "", label: "Password" } },
                      [
                        _c(
                          "b-field",
                          [
                            _c(
                              "b-button",
                              {
                                attrs: {
                                  type: "is-primary",
                                  outlined: "",
                                  loading: this.loading.password,
                                  "icon-left": "send"
                                },
                                on: { click: _vm.confirmResetPassword }
                              },
                              [
                                _vm._v(
                                  "Send reset Password\n                                        Notification"
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { horizontal: "", label: "Block" } },
                      [
                        _c(
                          "b-field",
                          [
                            _c(
                              "b-button",
                              {
                                attrs: {
                                  type: "is-warning",
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
                                  _vm._s(_vm.user.blocked ? "Unblock" : "Block")
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { horizontal: "", label: "Delete" } },
                      [
                        _c("b-field", [
                          _c(
                            "div",
                            { staticClass: "buttons" },
                            [
                              _vm.user.trashed
                                ? _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        type: "is-info",
                                        outlined: "",
                                        loading: this.loading.user
                                      },
                                      on: { click: _vm.confirmRestore }
                                    },
                                    [_vm._v("Restore")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "is-danger",
                                    outlined: "",
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
              ])
            ])
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