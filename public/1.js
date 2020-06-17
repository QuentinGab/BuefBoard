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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/users/UserIndex.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/users/UserIndex.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b/components/TitleBar */ "./resources/js/backend/components/TitleBar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _b_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b/models/User */ "./resources/js/backend/models/User.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    TitleBar: _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      users: [],
      isLoading: false,
      checkedRows: [],
      //paginate
      pagination: {
        current_page: 1,
        from: 0,
        last_page: 1,
        path: "",
        per_page: 0,
        to: 0,
        total: 0
      },
      sort: {
        field: "id",
        order: "",
        // '-' or ''
        value: "id"
      },
      filter: {
        field: null,
        value: null
      },
      isPaginationSimple: false,
      paginationPosition: "bottom"
    };
  },
  computed: {
    total: function total() {
      return this.pagination.total;
    },
    fields: function fields() {
      if (this.users && this.users.length > 0) {
        return Object.keys(this.users[0]);
      }

      return [];
    },
    isFiltered: function isFiltered() {
      return !!(this.filter.field && this.filter.value);
    }
  },
  methods: {
    //table events
    onPageChange: function onPageChange(page) {
      this.pagination.current_page = page;
      this.getUsers();
    },
    onSort: function onSort(field, order) {
      this.sort.field = field;
      this.sort.order = order == "desc" ? "-" : "";
      this.sort.value = "".concat(this.sort.order).concat(this.sort.field);
      this.getUsers();
    },
    onFilter: function onFilter() {
      if (!this.filter.field) {
        return;
      }

      this.checkedRows = [];
      setTimeout(this.getUsers, 500);
    },
    //table actions
    getUsers: function getUsers() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var user, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isLoading = true;
                user = _b_models_User__WEBPACK_IMPORTED_MODULE_3__["default"].orderBy(_this.sort.value).page(_this.pagination.current_page);

                if (_this.isFiltered) {
                  user.where(_this.filter.field, _this.filter.value);
                }

                _context.next = 5;
                return user.get().then(function (response) {
                  _this.users = response.data;
                  _this.pagination = response.meta;
                  _this.isLoading = false;
                })["catch"](function (err) {
                  _this.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 5:
                response = _context.sent;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    refresh: function refresh() {
      this.getUsers();
    },
    refreshAndClear: function refreshAndClear() {
      this.checkedRows = [];
      this.refresh();
    },
    //confirm actions
    confirmDelete: function confirmDelete() {
      var _this2 = this;

      this.$buefy.dialog.confirm({
        title: "Deleting users",
        message: "Are you sure you want to <b>delete</b> ".concat(this.checkedRows.length, " users? This action can be undone."),
        confirmText: "Delete Users",
        type: "is-danger",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this2.bulkDelete();
        }
      });
    },
    confirmBlock: function confirmBlock() {
      var _this3 = this;

      this.$buefy.dialog.confirm({
        title: "Blocking users",
        message: "Are you sure you want to <b>block</b> ".concat(this.checkedRows.length, " users? This action can be undone."),
        confirmText: "Block Users",
        type: "is-warning",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this3.bulkBlock();
        }
      });
    },
    confirmUnblock: function confirmUnblock() {
      var _this4 = this;

      this.$buefy.dialog.confirm({
        title: "Unblocking users",
        message: "Are you sure you want to <b>unblock</b> ".concat(this.checkedRows.length, " users? This action can be undone."),
        confirmText: "Unblock Users",
        type: "is-warning",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this4.bulkUnblock();
        }
      });
    },
    // bulk actions
    bulkDelete: function bulkDelete() {
      var _this5 = this;

      this.checkedRows.forEach( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(user) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return user["delete"]().then(function (response) {
                    _this5.$buefy.snackbar.open({
                      duration: 3000,
                      message: "".concat(user.fullname, " has been deleted"),
                      type: "is-danger",
                      position: "is-bottom-right",
                      actionText: "Undo",
                      queue: true,
                      onAction: function onAction() {
                        _this5.restore(user);
                      }
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
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      return true;
    },
    bulkBlock: function bulkBlock() {
      var _this6 = this;

      this.checkedRows.forEach( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(user) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return user.block().save().then(function (response) {
                    _this6.$buefy.snackbar.open({
                      duration: 3000,
                      message: "".concat(user.fullname, " has been blocked"),
                      type: "is-danger",
                      position: "is-bottom-right",
                      actionText: "Undo",
                      queue: true,
                      onAction: function onAction() {
                        _this6.unblock(user);
                      }
                    });
                  })["catch"](function (err) {
                    _this6.$buefy.toast.open({
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
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
      return true;
    },
    bulkUnblock: function bulkUnblock() {
      var _this7 = this;

      this.checkedRows.forEach( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(user) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return user.unblock().save().then(function (response) {
                    _this7.$buefy.snackbar.open({
                      duration: 3000,
                      message: "".concat(user.fullname, " has been unblocked"),
                      type: "is-danger",
                      position: "is-bottom-right",
                      actionText: "Undo",
                      queue: true,
                      onAction: function onAction() {
                        _this7.block(user);
                      }
                    });
                  })["catch"](function (err) {
                    _this7.$buefy.toast.open({
                      message: "Error: ".concat(err.message),
                      type: "is-danger",
                      queue: false
                    });
                  });

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
      return true;
    },
    //single actions
    block: function block(user) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return user.block().save().then(function (response) {
                  _this8.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(user.fullname, " has been blocked"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: true
                  });
                })["catch"](function (err) {
                  _this8.$buefy.toast.open({
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
    unblock: function unblock(user) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return user.unblock().save().then(function (response) {
                  _this9.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(user.fullname, " has been unblocked"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: true
                  });
                })["catch"](function (err) {
                  _this9.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    restore: function restore(user) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return user.restore().then(function (response) {
                  _this10.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(user.fullname, " has been restored"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: true
                  });
                })["catch"](function (err) {
                  _this10.$buefy.toast.open({
                    message: "Error: ".concat(err.message),
                    type: "is-danger",
                    queue: false
                  });
                });

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    }
  },
  mounted: function mounted() {
    this.getUsers();
  },
  created: function created() {}
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
  return _c("div", { staticClass: "level" }, [
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
}
var staticRenderFns = []
render._withStripped = true



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
  return _c(
    "section",
    [
      _c("title-bar", {
        staticClass: "p-1",
        attrs: {
          title: "Manage Users",
          menu: [{ name: "users", to: "/users/index" }]
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "p-1" }, [
        _c(
          "div",
          { staticClass: "bb-table" },
          [
            _c("div", { staticClass: "bb-table-header" }, [
              _c("div", { staticClass: "level-left" }, [
                _c("div", { staticClass: "title" }, [_vm._v("users")]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.pagination.from) +
                        "\n                        "
                    ),
                    _c("b-icon", {
                      attrs: { icon: "chevron-right", size: "is-small" }
                    }),
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.pagination.to) +
                        "\n                        :\n                        " +
                        _vm._s(_vm.total) +
                        "\n                    "
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "b-field",
                      [
                        _c(
                          "p",
                          { staticClass: "control" },
                          [
                            _c(
                              "b-dropdown",
                              {
                                attrs: { "aria-role": "list" },
                                model: {
                                  value: _vm.filter.field,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filter, "field", $$v)
                                  },
                                  expression: "filter.field"
                                }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "button is-small",
                                    attrs: { slot: "trigger" },
                                    slot: "trigger"
                                  },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.filter.field
                                            ? _vm.filter.field
                                            : "Filters"
                                        )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("b-icon", {
                                      attrs: { icon: "menu-down" }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.fields, function(field) {
                                  return _c(
                                    "b-dropdown-item",
                                    { key: field, attrs: { value: field } },
                                    [_vm._v(_vm._s(field))]
                                  )
                                })
                              ],
                              2
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("b-input", {
                          attrs: {
                            icon: "magnify",
                            type: "search",
                            placeholder: "Search...",
                            size: "is-small"
                          },
                          on: { input: _vm.onFilter },
                          model: {
                            value: _vm.filter.value,
                            callback: function($$v) {
                              _vm.$set(_vm.filter, "value", $$v)
                            },
                            expression: "filter.value"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "level-right" }, [
                _c("div", { staticClass: "bb-buttons-group" }, [
                  _c(
                    "div",
                    { staticClass: "buttons has-addons are-small" },
                    [
                      _c(
                        "b-tooltip",
                        {
                          attrs: {
                            label: "Add",
                            type: "is-light",
                            animated: ""
                          }
                        },
                        [
                          _c("b-button", {
                            staticClass: "is-primary",
                            attrs: {
                              "icon-left": "plus-circle-outline",
                              to: "/users/new",
                              tag: "router-link"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tooltip",
                        {
                          attrs: {
                            label: "Refresh",
                            type: "is-light",
                            animated: ""
                          }
                        },
                        [
                          _c("b-button", {
                            attrs: {
                              loading: _vm.isLoading,
                              "icon-left": "refresh"
                            },
                            on: { click: _vm.refreshAndClear }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "buttons has-addons are-small" },
                    [
                      _c(
                        "b-button",
                        { attrs: { "icon-left": "checkbox-marked-outline" } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.checkedRows.length) +
                              "\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tooltip",
                        {
                          attrs: {
                            label: "Delete",
                            type: "is-light",
                            animated: ""
                          }
                        },
                        [
                          _c("b-button", {
                            staticClass: "is-danger",
                            attrs: {
                              outlined: "",
                              "icon-left": "delete-outline",
                              disabled:
                                _vm.checkedRows.length > 0 ? false : true
                            },
                            on: { click: _vm.confirmDelete }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tooltip",
                        {
                          attrs: {
                            label: "Block",
                            type: "is-light",
                            animated: ""
                          }
                        },
                        [
                          _c("b-button", {
                            staticClass: "is-warning",
                            attrs: {
                              outlined: "",
                              "icon-left": "account-cancel-outline",
                              disabled:
                                _vm.checkedRows.length > 0 ? false : true
                            },
                            on: { click: _vm.confirmBlock }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "buttons are-small" },
                    [
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            "aria-role": "list",
                            position: "is-bottom-left"
                          }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "button is-default",
                              attrs: { slot: "trigger" },
                              slot: "trigger"
                            },
                            [
                              _c("b-icon", {
                                attrs: {
                                  icon: "dots-vertical",
                                  size: "is-small"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            {
                              attrs: { "aria-role": "listitem" },
                              on: { click: _vm.confirmUnblock }
                            },
                            [_vm._v("Unblock")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "b-table",
              {
                attrs: {
                  data: _vm.users,
                  loading: _vm.isLoading,
                  checkable: "",
                  "checked-rows": _vm.checkedRows,
                  paginated: "",
                  "backend-pagination": "",
                  total: _vm.total,
                  "per-page": _vm.pagination.per_page,
                  "current-page": _vm.pagination.current_page,
                  "pagination-simple": _vm.isPaginationSimple,
                  "pagination-position": _vm.paginationPosition,
                  "pagination-size": "is-small",
                  "backend-sorting": "",
                  "default-sort-direction": "asc",
                  "default-sort": "id",
                  "aria-next-label": "Next page",
                  "aria-previous-label": "Previous page",
                  "aria-page-label": "Page",
                  "aria-current-label": "Current page",
                  scrollable: ""
                },
                on: {
                  "update:checkedRows": function($event) {
                    _vm.checkedRows = $event
                  },
                  "update:checked-rows": function($event) {
                    _vm.checkedRows = $event
                  },
                  "page-change": _vm.onPageChange,
                  "update:currentPage": function($event) {
                    return _vm.$set(_vm.pagination, "current_page", $event)
                  },
                  "update:current-page": function($event) {
                    return _vm.$set(_vm.pagination, "current_page", $event)
                  },
                  sort: _vm.onSort
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              field: "id",
                              label: "ID",
                              numeric: "",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(props.row.id) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              field: "first_name",
                              label: "First Name",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(props.row.first_name) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              field: "last_name",
                              label: "Last Name",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(props.row.last_name) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              field: "email",
                              label: "Email",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(props.row.email) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          { attrs: { field: "roles", label: "Roles" } },
                          [
                            _c(
                              "b-taglist",
                              _vm._l(props.row.roles, function(role) {
                                return _c(
                                  "b-tag",
                                  { key: role, attrs: { type: "is-info" } },
                                  [_vm._v(_vm._s(role))]
                                )
                              }),
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              field: "blocked_at",
                              label: "Blocked",
                              sortable: "",
                              centered: ""
                            }
                          },
                          [
                            _c(
                              "b-tooltip",
                              {
                                attrs: {
                                  type: "is-light",
                                  label: props.row.blocked_at
                                    ? new Date(
                                        props.row.blocked_at
                                      ).toLocaleDateString()
                                    : ""
                                }
                              },
                              [
                                _c(
                                  "b-tag",
                                  {
                                    attrs: {
                                      type: props.row.blocked_at
                                        ? "is-danger"
                                        : ""
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          props.row.blocked_at ? "yes" : "no"
                                        ) +
                                        "\n                            "
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
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              field: "email_verified_at",
                              label: "Verified",
                              sortable: "",
                              centered: ""
                            }
                          },
                          [
                            _c(
                              "b-tooltip",
                              {
                                attrs: {
                                  type: "is-light",
                                  label: props.row.email_verified_at
                                    ? new Date(
                                        props.row.email_verified_at
                                      ).toLocaleDateString()
                                    : ""
                                }
                              },
                              [
                                _c(
                                  "b-tag",
                                  {
                                    attrs: {
                                      type: props.row.email_verified_at
                                        ? ""
                                        : "is-danger"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          props.row.email_verified_at
                                            ? "yes"
                                            : "no"
                                        ) +
                                        "\n                            "
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
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              field: "updated_at",
                              label: "Updated At",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  new Date(
                                    props.row.updated_at
                                  ).toLocaleDateString()
                                ) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            staticClass: "is-actions-cell",
                            attrs: {
                              "custom-key": "actions",
                              label: "Actions",
                              width: "40"
                            }
                          },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass:
                                  "button is-rounded is-small is-primary",
                                attrs: {
                                  to: {
                                    name: "users.edit",
                                    params: { id: props.row.id }
                                  }
                                }
                              },
                              [
                                _c("b-icon", {
                                  attrs: {
                                    icon: "account-edit",
                                    size: "is-small"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              },
              [
                _vm._v(" "),
                _c("template", { slot: "empty" }, [
                  _c("section", { staticClass: "section" }, [
                    _c(
                      "div",
                      {
                        staticClass: "content has-text-grey has-text-centered"
                      },
                      [
                        _c(
                          "p",
                          [
                            _c("b-icon", {
                              attrs: { icon: "emoticon-sad", size: "is-large" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Nothing here.")])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("template", { slot: "bottom-left" }, [
                  _c("div", [
                    _c("div", [
                      _c("b", [_vm._v("Total checked")]),
                      _vm._v(
                        ": " +
                          _vm._s(_vm.checkedRows.length) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("b", [_vm._v("Total")]),
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