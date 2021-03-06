(self["webpackChunkxboilerplate"] = self["webpackChunkxboilerplate"] || []).push([["mf-dep_src_umi_cache_mfsu_mf-va_antd_es_locale_bn_BD_js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/antd/es/calendar/locale/bn_BD.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/calendar/locale/bn_BD.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date-picker/locale/bn_BD */ "./node_modules/antd/es/date-picker/locale/bn_BD.js");

/* harmony default export */ __webpack_exports__["default"] = (_date_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./node_modules/antd/es/date-picker/locale/bn_BD.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/date-picker/locale/bn_BD.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var rc_picker_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-picker/es/locale/bn_BD */ "./node_modules/rc-picker/es/locale/bn_BD.js");
/* harmony import */ var _time_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time-picker/locale/bn_BD */ "./node_modules/antd/es/time-picker/locale/bn_BD.js");


 // Merge into a locale object

var locale = {
  lang: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    placeholder: '??????????????? ????????????????????????',
    yearPlaceholder: '????????? ????????????????????????',
    quarterPlaceholder: '?????????????????????????????? ????????????????????????',
    monthPlaceholder: '????????? ????????????????????????',
    weekPlaceholder: '?????????????????? ????????????????????????',
    rangePlaceholder: ['??????????????? ???????????????', '????????? ???????????????'],
    rangeYearPlaceholder: ['??????????????? ?????????', '????????? ?????????'],
    rangeMonthPlaceholder: ['??????????????? ?????????', '????????? ?????????'],
    rangeWeekPlaceholder: ['??????????????? ??????????????????', '????????? ??????????????????']
  }, rc_picker_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_1__.default),
  timePickerLocale: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, _time_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_2__.default)
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/antd/es/locale/bn_BD.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/locale/bn_BD.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_pagination_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-pagination/es/locale/bn_BD */ "./node_modules/rc-pagination/es/locale/bn_BD.js");
/* harmony import */ var _date_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-picker/locale/bn_BD */ "./node_modules/antd/es/date-picker/locale/bn_BD.js");
/* harmony import */ var _time_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-picker/locale/bn_BD */ "./node_modules/antd/es/time-picker/locale/bn_BD.js");
/* harmony import */ var _calendar_locale_bn_BD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/locale/bn_BD */ "./node_modules/antd/es/calendar/locale/bn_BD.js");
/* eslint-disable no-template-curly-in-string */




var typeTemplate = '${label} ?????? ???????????? ${type} ?????????';
var localeValues = {
  locale: 'bn-bd',
  Pagination: rc_pagination_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_0__.default,
  DatePicker: _date_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_1__.default,
  TimePicker: _time_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_2__.default,
  Calendar: _calendar_locale_bn_BD__WEBPACK_IMPORTED_MODULE_3__.default,
  global: {
    placeholder: '????????????????????? ????????? ???????????????????????? ????????????'
  },
  Table: {
    filterTitle: '????????????????????? ????????????',
    filterConfirm: '?????????',
    filterReset: '???????????????',
    filterEmptyText: '????????????????????? ?????????',
    emptyText: '???????????? ???????????? ?????????',
    selectAll: '????????????????????? ?????????????????? ???????????????????????? ????????????',
    selectInvert: '????????????????????? ???????????????????????? ??????????????? ?????????',
    selectNone: '??????????????? ???????????? ????????? ????????????',
    selectionAll: '??????????????? ???????????? ???????????????????????? ????????????',
    sortTitle: '???????????????',
    expand: '???????????? ???????????????????????? ????????????',
    collapse: '???????????? ???????????????????????? ????????????',
    triggerDesc: '????????????????????? ????????????????????? ???????????? ??????????????? ????????????',
    triggerAsc: '??????????????? ??????????????? ???????????? ??????????????? ????????????',
    cancelSort: '??????????????? ??????????????? ???????????? ??????????????? ????????????'
  },
  Modal: {
    okText: '?????????',
    cancelText: '???????????????',
    justOkText: '?????????'
  },
  Popconfirm: {
    okText: '?????????',
    cancelText: '???????????????'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: '??????????????? ???????????????????????????',
    itemUnit: '???????????????',
    itemsUnit: '???????????????????????????',
    remove: '??????????????????',
    selectCurrent: '????????????????????? ?????????????????? ???????????????????????? ????????????',
    removeCurrent: '????????????????????? ???????????????????????? ????????????',
    selectAll: '??????????????? ???????????? ???????????????????????? ????????????',
    removeAll: '??????????????? ???????????? ????????????',
    selectInvert: '????????????????????? ???????????????????????? ??????????????? ?????????'
  },
  Upload: {
    uploading: '??????????????? ??????????????? ...',
    removeFile: '???????????? ????????????',
    uploadError: '?????????????????? ??????????????????',
    previewFile: '?????????????????? ????????????????????????',
    downloadFile: '???????????? ?????????????????????'
  },
  Empty: {
    description: '???????????? ???????????? ?????????'
  },
  Icon: {
    icon: '????????????'
  },
  Text: {
    edit: '????????????????????????',
    copy: '?????????????????????',
    copied: '????????????????????? ???????????????',
    expand: '????????????????????? ?????????'
  },
  PageHeader: {
    back: '???????????????'
  },
  Form: {
    optional: '(??????????????????)',
    defaultValidateMessages: {
      "default": '${label} ?????? ???????????????????????? ????????????????????? ??????????????? ??????????????????',
      required: '????????????????????? ????????? ${label} ?????????????????? ????????????',
      "enum": '${label} ?????????????????? [${enum}] ?????? ??????????????? ???????????? ????????? ?????????',
      whitespace: '${label} ??????????????? ??????????????? ????????? ???????????? ??????',
      date: {
        format: '${label} ??????????????? ??????????????? ???????????? ?????????',
        parse: '${label} ?????????????????? ???????????????????????? ????????? ???????????? ??????',
        invalid: '${label} ???????????? ???????????? ??????????????? ?????????'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} ?????????????????? ${len} ????????????????????? ????????? ????????????',
        min: '${label} ?????????????????? ??????????????? ${min} ????????????????????? ????????? ????????????',
        max: '${label} ?????????????????? ${max} ????????????????????? ????????????????????? ????????? ????????????',
        range: '${label} ?????????????????? ${min}-${max} ????????????????????? ?????? ??????????????? ????????? ????????????'
      },
      number: {
        len: '${label} ?????????????????? ${len} ?????? ???????????? ????????? ?????????',
        min: '${label} ?????????????????? ??????????????????????????? ${min} ????????? ?????????',
        max: '${label} ?????????????????? ??????????????????????????? ${max} ????????? ?????????',
        range: '${label} ?????????????????? ${min}-${max} ?????? ??????????????? ????????? ?????????'
      },
      array: {
        len: '?????????????????? ${len} ${label} ????????? ?????????',
        min: '????????????????????? ${min} ${label}',
        max: '???????????????????????? ?????????????????? ${max} ${label}',
        range: '${label} ?????? ?????????????????? ?????????????????? ${min}-${max} ?????? ??????????????? ????????? ?????????'
      },
      pattern: {
        mismatch: '${label} ?????? ${pattern} ????????????????????????????????? ???????????? ???????????? ??????'
      }
    }
  },
  Image: {
    preview: '????????????????????????'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (localeValues);

/***/ }),

/***/ "./node_modules/antd/es/time-picker/locale/bn_BD.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/time-picker/locale/bn_BD.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  placeholder: '???????????? ????????????????????????',
  rangePlaceholder: ['???????????? ????????????', '????????? ????????????']
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/rc-pagination/es/locale/bn_BD.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-pagination/es/locale/bn_BD.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Options.jsx
  items_per_page: '/ ??????????????????',
  jump_to: '?????????',
  jump_to_confirm: '?????????????????????',
  page: '??????????????????',
  // Pagination.jsx
  prev_page: '???????????? ??????????????????',
  next_page: '???????????? ??????????????????',
  prev_5: '?????????????????????????????? ??? ??????????????????',
  next_5: '????????????????????? ??? ??????????????????',
  prev_3: '?????????????????????????????? ??? ??????????????????',
  next_3: '????????????????????? ??? ??????????????????',
  page_size: '??????????????? ????????????'
});

/***/ }),

/***/ "./node_modules/rc-picker/es/locale/bn_BD.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-picker/es/locale/bn_BD.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  locale: 'bn_BD',
  today: '??????',
  now: '?????????',
  backToToday: '???????????? ???????????? ????????????',
  ok: '?????????',
  clear: '????????????????????????',
  month: '?????????',
  year: '?????????',
  timeSelect: '????????? ????????????????????????',
  dateSelect: '??????????????? ????????????????????????',
  weekSelect: '?????????????????? ??????????????? ????????????',
  monthSelect: '????????? ??????????????? ????????????',
  yearSelect: '????????? ??????????????? ????????????',
  decadeSelect: '???????????? ????????? ??????????????? ????????????',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: '?????? ????????? (PageUp)',
  nextMonth: '??????????????? ????????? (PageDown)',
  previousYear: '?????? ????????? (Control + left)',
  nextYear: '??????????????? ????????? (Control + right)',
  previousDecade: '?????? ?????????',
  nextDecade: '???????????? ?????????',
  previousCentury: '?????? ?????????????????????',
  nextCentury: '???????????? ?????????????????????'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_bn_BD.js":
/*!*************************************************************!*\
  !*** ./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_bn_BD.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_luoqiaoqiao_Desktop_mapbox_demo_node_modules_antd_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/antd/es/locale/bn_BD */ "./node_modules/antd/es/locale/bn_BD.js");

/* harmony default export */ __webpack_exports__["default"] = (_Users_luoqiaoqiao_Desktop_mapbox_demo_node_modules_antd_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ })

}]);