(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users.index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/CardMetrics.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/CardMetrics.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CardMetrics",
  components: {},
  props: {},
  data: function data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted: function mounted() {},
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/CardMetricsItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/CardMetricsItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CardMetricsItem",
  components: {},
  props: ["title", "value", "subvalue", "icon"],
  data: function data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted: function mounted() {},
  created: function created() {}
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/charts/DoughnutChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/charts/DoughnutChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DoughnutChart",
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Doughnut"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp],
  props: {
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
      defaultOptions: {
        light: {
          legend: {
            display: false
          },
          tooltips: {
            intersect: true
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
          }
        },
        full: {
          scales: {
            xAxes: [{
              ticks: {
                autoSkip: true,
                maxRotation: 0,
                minRotation: 0
              }
            }],
            yAxes: [{
              ticks: {
                autoSkip: true,
                maxRotation: 0,
                minRotation: 0
              }
            }]
          }
        }
      }
    };
  },
  computed: {
    finalOptions: function finalOptions() {
      var _this$options;

      return (_this$options = this.options) !== null && _this$options !== void 0 ? _this$options : this.defaultOptions[this.mode];
    }
  },
  methods: {},
  mounted: function mounted() {
    this.renderChart(this.chartData, this.finalOptions);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/users/UsersTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/users/UsersTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _b_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b/models/User */ "./resources/js/backend/models/User.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UsersTable",
  components: {},
  props: {
    canFilter: {
      type: Boolean
    },
    canSelect: {
      type: Boolean
    },
    canDelete: {
      type: Boolean
    },
    canDestroy: {
      type: Boolean
    },
    canBlock: {
      type: Boolean
    },
    canSeeTrashed: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      users: [],
      isLoading: false,
      showTrashed: false,
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
    },
    checkedLength: function checkedLength() {
      return this.checkedRows.length;
    },
    isSelected: function isSelected() {
      return this.checkedRows.length > 0;
    }
  },
  methods: {
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
      this.getUsers();
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
                user = _b_models_User__WEBPACK_IMPORTED_MODULE_1__["default"].orderBy(_this.sort.value).page(_this.pagination.current_page).include("roles");

                if (_this.isFiltered) {
                  user.where(_this.filter.field, _this.filter.value);
                }

                if (_this.showTrashed) {
                  user.where("trashed", "only");
                }

                _context.next = 6;
                return user.get().then(function (response) {
                  _this.users = response.data;
                  _this.pagination = response.meta;
                });

              case 6:
                response = _context.sent;
                _this.isLoading = false;

              case 8:
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
        message: "Are you sure you want to <b>delete</b> ".concat(this.checkedLength, " users? This action can be undone."),
        confirmText: "Delete Users",
        type: "is-danger",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this2.bulkDelete();
        }
      });
    },
    confirmDestroy: function confirmDestroy() {
      var _this3 = this;

      this.$buefy.dialog.confirm({
        title: "Destroying users",
        message: "Are you sure you want to <b>destroy</b> ".concat(this.checkedLength, " users? This action can NOT be undone."),
        confirmText: "Destroy Users",
        type: "is-danger",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this3.bulkDestroy();
        }
      });
    },
    confirmBlock: function confirmBlock() {
      var _this4 = this;

      this.$buefy.dialog.confirm({
        title: "Blocking users",
        message: "Are you sure you want to <b>block</b> ".concat(this.checkedLength, " users? This action can be undone."),
        confirmText: "Block Users",
        type: "is-warning",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this4.bulkBlock();
        }
      });
    },
    confirmUnblock: function confirmUnblock() {
      var _this5 = this;

      this.$buefy.dialog.confirm({
        title: "Unblocking users",
        message: "Are you sure you want to <b>unblock</b> ".concat(this.checkedLength, " users? This action can be undone."),
        confirmText: "Unblock Users",
        type: "is-warning",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this5.bulkUnblock();
        }
      });
    },
    confirmRestore: function confirmRestore() {
      var _this6 = this;

      this.$buefy.dialog.confirm({
        title: "Restoring users",
        message: "Are you sure you want to <b>restore</b> ".concat(this.checkedLength, " users? This action can be undone."),
        confirmText: "Restore Users",
        type: "is-warning",
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this6.bulkRestore();
        }
      });
    },
    // bulk actions
    bulkDelete: function bulkDelete() {
      var _this7 = this;

      this.checkedRows.forEach(function (user) {
        _this7["delete"](user);
      });
      this.refreshAndClear();
      return true;
    },
    bulkDestroy: function bulkDestroy() {
      var _this8 = this;

      this.checkedRows.forEach(function (user) {
        _this8.destroy(user);
      });
      this.refreshAndClear();
      return true;
    },
    bulkBlock: function bulkBlock() {
      var _this9 = this;

      this.checkedRows.forEach(function (user) {
        _this9.block(user);
      });
      return true;
    },
    bulkUnblock: function bulkUnblock() {
      var _this10 = this;

      this.checkedRows.forEach(function (user) {
        _this10.unblock(user);
      });
      return true;
    },
    bulkRestore: function bulkRestore() {
      var _this11 = this;

      this.checkedRows.forEach(function (user) {
        _this11.restore(user);
      });
      this.refreshAndClear();
      return true;
    },
    bulkSendEmailVerification: function bulkSendEmailVerification() {
      var _this12 = this;

      this.checkedRows.forEach(function (user) {
        _this12.sendEmailVerification(user);
      });
      return true;
    },
    bulkExport: function bulkExport() {
      var users = new _b_models_User__WEBPACK_IMPORTED_MODULE_1__["default"]().custom("users/export");

      if (this.checkedLength > 0) {
        var usersId = this.checkedRows.map(function (item) {
          return item.id;
        });
        users.whereIn("id", usersId);
      }

      if (this.showTrashed) {
        users.where("trashed", "only");
      }

      users["export"](this.showTrashed);
      this.$buefy.snackbar.open({
        duration: 3000,
        message: "".concat(this.checkedLength > 0 ? this.checkedLength : "all", " users have been exported"),
        type: "is-danger",
        position: "is-bottom-right",
        queue: true
      });
    },
    //single actions
    "delete": function _delete(user) {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return user["delete"]().then(function (response) {
                  _this13.$buefy.snackbar.open({
                    duration: 3000,
                    message: "".concat(user.fullname, " has been deleted"),
                    type: "is-danger",
                    position: "is-bottom-right",
                    actionText: "Undo",
                    queue: true,
                    onAction: function onAction() {
                      _this13.restore(user);
                    }
                  });
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    destroy: function destroy(user) {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return user.destroy().then(function (response) {
                  _this14.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(user.fullname, " has been destroyed"),
                    type: "is-info",
                    position: "is-bottom-right",
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
    block: function block(user) {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return user.block().save().then(function (response) {
                  _this15.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(user.fullname, " has been blocked"),
                    type: "is-danger",
                    position: "is-bottom-right",
                    actionText: "Undo",
                    queue: true,
                    onAction: function onAction() {
                      _this15.unblock(user);
                    }
                  });
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    unblock: function unblock(user) {
      var _this16 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return user.unblock().save().then(function (response) {
                  _this16.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(user.fullname, " has been unblocked"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: true
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
    restore: function restore(user) {
      var _this17 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return user.restore().then(function (response) {
                  _this17.$buefy.snackbar.open({
                    duration: 2000,
                    message: "".concat(user.fullname, " has been restored"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: true
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
    sendEmailVerification: function sendEmailVerification(user) {
      var _this18 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return user.sendEmailVerification().then(function (response) {
                  _this18.$buefy.snackbar.open({
                    duration: 2000,
                    message: "An email has been send to <b>".concat(user.fullname, "</b>"),
                    type: "is-info",
                    position: "is-bottom-right",
                    queue: true
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
  created: function created() {
    this.getUsers();
  },
  mounted: function mounted() {}
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
/* harmony import */ var _b_components_CardMetrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b/components/CardMetrics */ "./resources/js/backend/components/CardMetrics.vue");
/* harmony import */ var _b_components_CardMetricsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b/components/CardMetricsItem */ "./resources/js/backend/components/CardMetricsItem.vue");
/* harmony import */ var _b_components_users_UsersTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b/components/users/UsersTable */ "./resources/js/backend/components/users/UsersTable.vue");
/* harmony import */ var _b_components_charts_DoughnutChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b/components/charts/DoughnutChart */ "./resources/js/backend/components/charts/DoughnutChart.vue");
/* harmony import */ var _b_models_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b/models/User */ "./resources/js/backend/models/User.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TitleBar: _b_components_TitleBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    UsersTable: _b_components_users_UsersTable__WEBPACK_IMPORTED_MODULE_4__["default"],
    CardMetrics: _b_components_CardMetrics__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardMetricsItem: _b_components_CardMetricsItem__WEBPACK_IMPORTED_MODULE_3__["default"],
    DoughnutChart: _b_components_charts_DoughnutChart__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      overview: {
        active: 0,
        blocked: 0,
        trashed: 0
      },
      activity: null,
      chartStyle: {
        height: "100%",
        width: "100%",
        position: "relative"
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])(["charts"])), {}, {
    activeVariation: function activeVariation() {
      if (!this.activity) {
        return 0;
      }

      return Math.round(this.computeVariation(this.overview.total - this.activity.created + this.activity.deleted, this.overview.total) * 100);
    }
  }),
  methods: {
    tinycolor: function (_tinycolor) {
      function tinycolor(_x) {
        return _tinycolor.apply(this, arguments);
      }

      tinycolor.toString = function () {
        return _tinycolor.toString();
      };

      return tinycolor;
    }(function (val) {
      return tinycolor(val);
    }),
    computeIcon: function computeIcon(value) {
      if (value > 0) {
        return "trending-up";
      } else if (value < 0) {
        return "trending-down";
      }

      return "minus";
    },
    computeVariation: function computeVariation(start, end) {
      if (!start || !end) {
        return 0;
      }

      return (end - start) / start;
    },
    getMetrics: function getMetrics() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _b_models_User__WEBPACK_IMPORTED_MODULE_6__["default"].metrics().then(function (response) {
                  _this.overview = response.data.overview;
                  _this.activity = response.data.activity;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    this.getMetrics();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-chartjs/es/BaseCharts.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-chartjs/es/BaseCharts.js ***!
  \***************************************************/
/*! exports provided: generateChart, Bar, HorizontalBar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateChart", function() { return generateChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalBar", function() { return HorizontalBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doughnut", function() { return Doughnut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return Pie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolarArea", function() { return PolarArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radar", function() { return Radar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bubble", function() { return Bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scatter", function() { return Scatter; });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);

function generateChart(chartId, chartType) {
  return {
    render: function render(createElement) {
      return createElement('div', {
        style: this.styles,
        class: this.cssClasses
      }, [createElement('canvas', {
        attrs: {
          id: this.chartId,
          width: this.width,
          height: this.height
        },
        ref: 'canvas'
      })]);
    },
    props: {
      chartId: {
        default: chartId,
        type: String
      },
      width: {
        default: 400,
        type: Number
      },
      height: {
        default: 400,
        type: Number
      },
      cssClasses: {
        type: String,
        default: ''
      },
      styles: {
        type: Object
      },
      plugins: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    data: function data() {
      return {
        _chart: null,
        _plugins: this.plugins
      };
    },
    methods: {
      addPlugin: function addPlugin(plugin) {
        this.$data._plugins.push(plugin);
      },
      generateLegend: function generateLegend() {
        if (this.$data._chart) {
          return this.$data._chart.generateLegend();
        }
      },
      renderChart: function renderChart(data, options) {
        if (this.$data._chart) this.$data._chart.destroy();
        this.$data._chart = new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.$refs.canvas.getContext('2d'), {
          type: chartType,
          data: data,
          options: options,
          plugins: this.$data._plugins
        });
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.$data._chart) {
        this.$data._chart.destroy();
      }
    }
  };
}
var Bar = generateChart('bar-chart', 'bar');
var HorizontalBar = generateChart('horizontalbar-chart', 'horizontalBar');
var Doughnut = generateChart('doughnut-chart', 'doughnut');
var Line = generateChart('line-chart', 'line');
var Pie = generateChart('pie-chart', 'pie');
var PolarArea = generateChart('polar-chart', 'polarArea');
var Radar = generateChart('radar-chart', 'radar');
var Bubble = generateChart('bubble-chart', 'bubble');
var Scatter = generateChart('scatter-chart', 'scatter');
/* harmony default export */ __webpack_exports__["default"] = ({
  Bar: Bar,
  HorizontalBar: HorizontalBar,
  Doughnut: Doughnut,
  Line: Line,
  Pie: Pie,
  PolarArea: PolarArea,
  Radar: Radar,
  Bubble: Bubble,
  Scatter: Scatter
});

/***/ }),

/***/ "./node_modules/vue-chartjs/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vue-chartjs/es/index.js ***!
  \**********************************************/
/*! exports provided: default, VueCharts, Bar, HorizontalBar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter, mixins, generateChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueCharts", function() { return VueCharts; });
/* harmony import */ var _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/index.js */ "./node_modules/vue-chartjs/es/mixins/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BaseCharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseCharts */ "./node_modules/vue-chartjs/es/BaseCharts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalBar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["HorizontalBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Doughnut", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Doughnut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Line"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Pie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolarArea", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["PolarArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Radar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bubble", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bubble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scatter", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Scatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateChart", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["generateChart"]; });



var VueCharts = {
  Bar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bar"],
  HorizontalBar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["HorizontalBar"],
  Doughnut: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Doughnut"],
  Line: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Line"],
  Pie: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Pie"],
  PolarArea: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["PolarArea"],
  Radar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Radar"],
  Bubble: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bubble"],
  Scatter: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Scatter"],
  mixins: _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  generateChart: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["generateChart"],
  render: function render() {
    return console.error('[vue-chartjs]: This is not a vue component. It is the whole object containing all vue components. Please import the named export or access the components over the dot notation. For more info visit https://vue-chartjs.org/#/home?id=quick-start');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VueCharts);


/***/ }),

/***/ "./node_modules/vue-chartjs/es/mixins/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vue-chartjs/es/mixins/index.js ***!
  \*****************************************************/
/*! exports provided: reactiveData, reactiveProp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactiveData", function() { return reactiveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactiveProp", function() { return reactiveProp; });
function dataHandler(newData, oldData) {
  if (oldData) {
    var chart = this.$data._chart;
    var newDatasetLabels = newData.datasets.map(function (dataset) {
      return dataset.label;
    });
    var oldDatasetLabels = oldData.datasets.map(function (dataset) {
      return dataset.label;
    });
    var oldLabels = JSON.stringify(oldDatasetLabels);
    var newLabels = JSON.stringify(newDatasetLabels);

    if (newLabels === oldLabels && oldData.datasets.length === newData.datasets.length) {
      newData.datasets.forEach(function (dataset, i) {
        var oldDatasetKeys = Object.keys(oldData.datasets[i]);
        var newDatasetKeys = Object.keys(dataset);
        var deletionKeys = oldDatasetKeys.filter(function (key) {
          return key !== '_meta' && newDatasetKeys.indexOf(key) === -1;
        });
        deletionKeys.forEach(function (deletionKey) {
          delete chart.data.datasets[i][deletionKey];
        });

        for (var attribute in dataset) {
          if (dataset.hasOwnProperty(attribute)) {
            chart.data.datasets[i][attribute] = dataset[attribute];
          }
        }
      });

      if (newData.hasOwnProperty('labels')) {
        chart.data.labels = newData.labels;
        this.$emit('labels:update');
      }

      if (newData.hasOwnProperty('xLabels')) {
        chart.data.xLabels = newData.xLabels;
        this.$emit('xlabels:update');
      }

      if (newData.hasOwnProperty('yLabels')) {
        chart.data.yLabels = newData.yLabels;
        this.$emit('ylabels:update');
      }

      chart.update();
      this.$emit('chart:update');
    } else {
      if (chart) {
        chart.destroy();
        this.$emit('chart:destroy');
      }

      this.renderChart(this.chartData, this.options);
      this.$emit('chart:render');
    }
  } else {
    if (this.$data._chart) {
      this.$data._chart.destroy();

      this.$emit('chart:destroy');
    }

    this.renderChart(this.chartData, this.options);
    this.$emit('chart:render');
  }
}

var reactiveData = {
  data: function data() {
    return {
      chartData: null
    };
  },
  watch: {
    'chartData': dataHandler
  }
};
var reactiveProp = {
  props: {
    chartData: {
      type: Object,
      required: true,
      default: function _default() {}
    }
  },
  watch: {
    'chartData': dataHandler
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  reactiveData: reactiveData,
  reactiveProp: reactiveProp
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/CardMetrics.vue?vue&type=template&id=f69be15a&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/CardMetrics.vue?vue&type=template&id=f69be15a& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card bb-card-metrics" },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/CardMetricsItem.vue?vue&type=template&id=23d15786&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/CardMetricsItem.vue?vue&type=template&id=23d15786& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "metrics-item" },
    [
      _vm.title
        ? _c("div", { staticClass: "metrics-title" }, [
            _vm._v(_vm._s(_vm.title))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.value != null
        ? _c("div", { staticClass: "metrics-value title is-3" }, [
            _vm._v(_vm._s(_vm.value))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.subvalue
        ? _c(
            "div",
            { staticClass: "metrics-subvalue" },
            [
              _c("b-icon", { attrs: { icon: _vm.icon, size: "is-small" } }),
              _vm._v("\n        " + _vm._s(_vm.subvalue) + "\n    ")
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/users/UsersTable.vue?vue&type=template&id=3a31437d&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/users/UsersTable.vue?vue&type=template&id=3a31437d& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                "\n                " +
                  _vm._s(_vm.pagination.from) +
                  "\n                "
              ),
              _c("b-icon", {
                attrs: { icon: "chevron-right", size: "is-small" }
              }),
              _vm._v(
                "\n                " +
                  _vm._s(_vm.pagination.to) +
                  "\n                :\n                " +
                  _vm._s(_vm.total) +
                  "\n            "
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.canFilter
            ? _c(
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
                                    attrs: {
                                      icon: "chevron-down",
                                      size: "is-small"
                                    }
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
                          placeholder: _vm.filter.field
                            ? "Search..."
                            : "Select a column",
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
            : _vm._e(),
          _vm._v(" "),
          _vm.canSeeTrashed
            ? _c(
                "div",
                [
                  _c(
                    "b-field",
                    [
                      _c(
                        "b-radio-button",
                        {
                          attrs: {
                            "native-value": false,
                            type: "is-primary",
                            size: "is-small"
                          },
                          on: { input: _vm.refreshAndClear },
                          model: {
                            value: _vm.showTrashed,
                            callback: function($$v) {
                              _vm.showTrashed = $$v
                            },
                            expression: "showTrashed"
                          }
                        },
                        [_c("span", [_vm._v("All")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio-button",
                        {
                          attrs: {
                            "native-value": true,
                            type: "is-danger",
                            size: "is-small"
                          },
                          on: { input: _vm.refreshAndClear },
                          model: {
                            value: _vm.showTrashed,
                            callback: function($$v) {
                              _vm.showTrashed = $$v
                            },
                            expression: "showTrashed"
                          }
                        },
                        [_c("span", [_vm._v("Trashed")])]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
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
                  { attrs: { label: "Add", type: "is-light", animated: "" } },
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
                    attrs: { label: "Refresh", type: "is-light", animated: "" }
                  },
                  [
                    _c("b-button", {
                      attrs: { loading: _vm.isLoading, "icon-left": "refresh" },
                      on: { click: _vm.refreshAndClear }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.canSelect
              ? _c(
                  "div",
                  { staticClass: "buttons has-addons are-small" },
                  [
                    _c(
                      "b-button",
                      { attrs: { "icon-left": "checkbox-marked-outline" } },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.checkedLength) +
                            "\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.canDelete
                      ? _c(
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
                                disabled: !_vm.isSelected
                              },
                              on: { click: _vm.confirmDelete }
                            })
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.canBlock
                      ? _c(
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
                                disabled: !_vm.isSelected
                              },
                              on: { click: _vm.confirmBlock }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.canSelect
              ? _c(
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
                              attrs: { icon: "dots-vertical", size: "is-small" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.canBlock && !_vm.showTrashed
                          ? _c(
                              "b-dropdown-item",
                              {
                                attrs: {
                                  "aria-role": "listitem",
                                  disabled: !_vm.isSelected
                                },
                                on: { click: _vm.confirmUnblock }
                              },
                              [_vm._v("Unblock")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.canDelete
                          ? _c(
                              "b-dropdown-item",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.showTrashed,
                                    expression: "showTrashed"
                                  }
                                ],
                                attrs: {
                                  "aria-role": "listitem",
                                  disabled: !_vm.isSelected
                                },
                                on: { click: _vm.confirmRestore }
                              },
                              [_vm._v("Restore")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.showTrashed,
                                expression: "!showTrashed"
                              }
                            ],
                            attrs: {
                              "aria-role": "listitem",
                              disabled: !_vm.isSelected
                            },
                            on: { click: _vm.bulkSendEmailVerification }
                          },
                          [_vm._v("Send Email Verification")]
                        ),
                        _vm._v(" "),
                        _vm.canDestroy
                          ? _c(
                              "b-dropdown-item",
                              {
                                attrs: {
                                  "aria-role": "listitem",
                                  disabled: !_vm.isSelected
                                },
                                on: { click: _vm.confirmDestroy }
                              },
                              [_vm._v("Destroy")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          {
                            attrs: { "aria-role": "listitem" },
                            on: { click: _vm.bulkExport }
                          },
                          [_vm._v("Export\n                        ")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e()
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
            checkable: _vm.canSelect,
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
            "default-sort-direction": "desc",
            "default-sort": "id",
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
                        "\n                " +
                          _vm._s(props.row.id) +
                          "\n            "
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
                        "\n                " +
                          _vm._s(props.row.first_name) +
                          "\n            "
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
                        "\n                " +
                          _vm._s(props.row.last_name) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-table-column",
                    { attrs: { field: "email", label: "Email", sortable: "" } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(props.row.email) +
                          "\n            "
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
                            { key: role.id, attrs: { type: "is-info" } },
                            [_vm._v(_vm._s(role.name))]
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
                                type: props.row.blocked_at ? "is-danger" : ""
                              }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(props.row.blocked_at ? "yes" : "no") +
                                  "\n                    "
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
                                "\n                        " +
                                  _vm._s(
                                    props.row.email_verified_at ? "yes" : "no"
                                  ) +
                                  "\n                    "
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
                        field: "created_at",
                        label: "Created At",
                        sortable: ""
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            new Date(props.row.created_at).toLocaleDateString()
                          ) +
                          "\n            "
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
                        width: "40",
                        numeric: ""
                      }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "button is-small",
                          attrs: {
                            to: {
                              name: "users.edit",
                              params: { id: props.row.id }
                            }
                          }
                        },
                        [
                          _c("b-icon", {
                            attrs: { icon: "account-edit", size: "is-small" }
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
                { staticClass: "content has-text-grey has-text-centered" },
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
                _vm._v(": " + _vm._s(_vm.checkedLength))
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
      _c("div", { staticClass: "columns is-marginless" }, [
        _c(
          "div",
          { staticClass: "column is-narrow" },
          [
            _c(
              "card-metrics",
              [
                _c("card-metrics-item", {
                  class: [
                    _vm.activeVariation >= 0 ? "is-success" : "is-danger"
                  ],
                  attrs: {
                    title: "Active Users",
                    value: _vm.overview.active,
                    subvalue: _vm.activeVariation + "%",
                    icon: _vm.computeIcon(_vm.activeVariation)
                  }
                }),
                _vm._v(" "),
                _c("card-metrics-item", {
                  staticClass: "is-danger",
                  attrs: { title: "Blocked Users", value: _vm.overview.blocked }
                }),
                _vm._v(" "),
                _c("card-metrics-item", {
                  staticClass: "is-danger",
                  attrs: { title: "Trashed Users", value: _vm.overview.trashed }
                })
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns is-marginless" }, [
        _c(
          "div",
          { staticClass: "column is-12" },
          [
            _c("users-table", {
              attrs: {
                canFilter: "",
                canSelect: "",
                canDelete: "",
                canDestroy: "",
                canBlock: "",
                canSeeTrashed: ""
              }
            })
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

/***/ "./resources/js/backend/components/CardMetrics.vue":
/*!*********************************************************!*\
  !*** ./resources/js/backend/components/CardMetrics.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardMetrics_vue_vue_type_template_id_f69be15a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardMetrics.vue?vue&type=template&id=f69be15a& */ "./resources/js/backend/components/CardMetrics.vue?vue&type=template&id=f69be15a&");
/* harmony import */ var _CardMetrics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardMetrics.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/CardMetrics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardMetrics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardMetrics_vue_vue_type_template_id_f69be15a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardMetrics_vue_vue_type_template_id_f69be15a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/CardMetrics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/CardMetrics.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/backend/components/CardMetrics.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMetrics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardMetrics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/CardMetrics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMetrics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/CardMetrics.vue?vue&type=template&id=f69be15a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/backend/components/CardMetrics.vue?vue&type=template&id=f69be15a& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMetrics_vue_vue_type_template_id_f69be15a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardMetrics.vue?vue&type=template&id=f69be15a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/CardMetrics.vue?vue&type=template&id=f69be15a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMetrics_vue_vue_type_template_id_f69be15a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMetrics_vue_vue_type_template_id_f69be15a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/components/CardMetricsItem.vue":
/*!*************************************************************!*\
  !*** ./resources/js/backend/components/CardMetricsItem.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardMetricsItem_vue_vue_type_template_id_23d15786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardMetricsItem.vue?vue&type=template&id=23d15786& */ "./resources/js/backend/components/CardMetricsItem.vue?vue&type=template&id=23d15786&");
/* harmony import */ var _CardMetricsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardMetricsItem.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/CardMetricsItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardMetricsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardMetricsItem_vue_vue_type_template_id_23d15786___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardMetricsItem_vue_vue_type_template_id_23d15786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/CardMetricsItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/CardMetricsItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/backend/components/CardMetricsItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMetricsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardMetricsItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/CardMetricsItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMetricsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/CardMetricsItem.vue?vue&type=template&id=23d15786&":
/*!********************************************************************************************!*\
  !*** ./resources/js/backend/components/CardMetricsItem.vue?vue&type=template&id=23d15786& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMetricsItem_vue_vue_type_template_id_23d15786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardMetricsItem.vue?vue&type=template&id=23d15786& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/CardMetricsItem.vue?vue&type=template&id=23d15786&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMetricsItem_vue_vue_type_template_id_23d15786___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMetricsItem_vue_vue_type_template_id_23d15786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/backend/components/charts/DoughnutChart.vue":
/*!******************************************************************!*\
  !*** ./resources/js/backend/components/charts/DoughnutChart.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoughnutChart.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/charts/DoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/charts/DoughnutChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/charts/DoughnutChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/backend/components/charts/DoughnutChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DoughnutChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/charts/DoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/users/UsersTable.vue":
/*!**************************************************************!*\
  !*** ./resources/js/backend/components/users/UsersTable.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersTable_vue_vue_type_template_id_3a31437d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersTable.vue?vue&type=template&id=3a31437d& */ "./resources/js/backend/components/users/UsersTable.vue?vue&type=template&id=3a31437d&");
/* harmony import */ var _UsersTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersTable.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/users/UsersTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersTable_vue_vue_type_template_id_3a31437d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersTable_vue_vue_type_template_id_3a31437d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/users/UsersTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/users/UsersTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/components/users/UsersTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/users/UsersTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/users/UsersTable.vue?vue&type=template&id=3a31437d&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/backend/components/users/UsersTable.vue?vue&type=template&id=3a31437d& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersTable_vue_vue_type_template_id_3a31437d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersTable.vue?vue&type=template&id=3a31437d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/users/UsersTable.vue?vue&type=template&id=3a31437d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersTable_vue_vue_type_template_id_3a31437d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersTable_vue_vue_type_template_id_3a31437d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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