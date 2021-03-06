(self["webpackChunkxboilerplate"] = self["webpackChunkxboilerplate"] || []).push([["mf-dep_src_umi_cache_mfsu_mf-va_antd_es_locale_pt_BR_js"],{

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

/***/ "./node_modules/antd/es/calendar/locale/pt_BR.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/calendar/locale/pt_BR.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date-picker/locale/pt_BR */ "./node_modules/antd/es/date-picker/locale/pt_BR.js");

/* harmony default export */ __webpack_exports__["default"] = (_date_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./node_modules/antd/es/date-picker/locale/pt_BR.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/date-picker/locale/pt_BR.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var rc_picker_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-picker/es/locale/pt_BR */ "./node_modules/rc-picker/es/locale/pt_BR.js");
/* harmony import */ var _time_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time-picker/locale/pt_BR */ "./node_modules/antd/es/time-picker/locale/pt_BR.js");


 // Merge into a locale object

var locale = {
  lang: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    placeholder: 'Selecionar data',
    rangePlaceholder: ['Data inicial', 'Data final']
  }, rc_picker_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_1__.default),
  timePickerLocale: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, _time_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2__.default)
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/antd/es/locale/pt_BR.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/locale/pt_BR.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_pagination_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-pagination/es/locale/pt_BR */ "./node_modules/rc-pagination/es/locale/pt_BR.js");
/* harmony import */ var _date_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-picker/locale/pt_BR */ "./node_modules/antd/es/date-picker/locale/pt_BR.js");
/* harmony import */ var _time_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-picker/locale/pt_BR */ "./node_modules/antd/es/time-picker/locale/pt_BR.js");
/* harmony import */ var _calendar_locale_pt_BR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/locale/pt_BR */ "./node_modules/antd/es/calendar/locale/pt_BR.js");
/* eslint-disable no-template-curly-in-string */




var typeTemplate = '${label} n??o ?? um ${type} v??lido';
var localeValues = {
  locale: 'pt-br',
  Pagination: rc_pagination_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__.default,
  DatePicker: _date_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_1__.default,
  TimePicker: _time_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2__.default,
  Calendar: _calendar_locale_pt_BR__WEBPACK_IMPORTED_MODULE_3__.default,
  global: {
    placeholder: 'Por favor escolha'
  },
  Table: {
    filterTitle: 'Menu de Filtro',
    filterConfirm: 'OK',
    filterReset: 'Resetar',
    filterEmptyText: 'Sem filtros',
    emptyText: 'Sem conte??do',
    selectAll: 'Selecionar p??gina atual',
    selectInvert: 'Inverter sele????o',
    selectNone: 'Apagar todo o conte??do',
    selectionAll: 'Selecionar todo o conte??do',
    sortTitle: 'Ordenar t??tulo',
    expand: 'Expandir linha',
    collapse: 'Colapsar linha',
    triggerDesc: 'Clique organiza por descendente',
    triggerAsc: 'Clique organiza por ascendente',
    cancelSort: 'Clique para cancelar organiza????o'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancelar',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancelar'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Procurar',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remover',
    selectCurrent: 'Selecionar p??gina atual',
    removeCurrent: 'Remover p??gina atual',
    selectAll: 'Selecionar todos',
    removeAll: 'Remover todos',
    selectInvert: 'Inverter sele????o atual'
  },
  Upload: {
    uploading: 'Enviando...',
    removeFile: 'Remover arquivo',
    uploadError: 'Erro no envio',
    previewFile: 'Visualizar arquivo',
    downloadFile: 'Baixar arquivo'
  },
  Empty: {
    description: 'N??o h?? dados'
  },
  Icon: {
    icon: '??cone'
  },
  Text: {
    edit: 'editar',
    copy: 'copiar',
    copied: 'copiado',
    expand: 'expandir'
  },
  PageHeader: {
    back: 'Retornar'
  },
  Form: {
    optional: '(opcional)',
    defaultValidateMessages: {
      "default": 'Erro ${label} na valida????o de campo',
      required: 'Por favor, insira ${label}',
      "enum": '${label} deve ser um dos seguinte: [${enum}]',
      whitespace: '${label} n??o pode ser um car??cter vazio',
      date: {
        format: ' O formato de data ${label} ?? inv??lido',
        parse: '${label} n??o pode ser convertido para uma data',
        invalid: '${label} ?? uma data inv??lida'
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
        len: '${label} deve possuir ${len} caracteres',
        min: '${label} deve possuir ao menos ${min} caracteres',
        max: '${label} deve possuir no m??ximo ${max} caracteres',
        range: '${label} deve possuir entre ${min} e ${max} caracteres'
      },
      number: {
        len: '${label} deve ser igual ?? ${len}',
        min: 'O valor m??nimo de ${label} ?? ${min}',
        max: 'O valor m??ximo de ${label} ?? ${max}',
        range: '${label} deve estar entre ${min} e ${max}'
      },
      array: {
        len: 'Deve ser ${len} ${label}',
        min: 'No m??nimo ${min} ${label}',
        max: 'No m??ximo ${max} ${label}',
        range: 'A quantidade de ${label} deve estar entre ${min} e ${max}'
      },
      pattern: {
        mismatch: '${label} n??o se encaixa no padr??o ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Pr??-visualiza????o'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (localeValues);

/***/ }),

/***/ "./node_modules/antd/es/time-picker/locale/pt_BR.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/time-picker/locale/pt_BR.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  placeholder: 'Hora'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/rc-pagination/es/locale/pt_BR.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-pagination/es/locale/pt_BR.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Options.jsx
  items_per_page: '/ p??gina',
  jump_to: 'V?? at??',
  jump_to_confirm: 'confirme',
  page: 'P??gina',
  // Pagination.jsx
  prev_page: 'P??gina anterior',
  next_page: 'Pr??xima p??gina',
  prev_5: '5 p??ginas anteriores',
  next_5: '5 pr??ximas p??ginas',
  prev_3: '3 p??ginas anteriores',
  next_3: '3 pr??ximas p??ginas',
  page_size: 'tamanho da p??gina'
});

/***/ }),

/***/ "./node_modules/rc-picker/es/locale/pt_BR.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-picker/es/locale/pt_BR.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  locale: 'pt_BR',
  today: 'Hoje',
  now: 'Agora',
  backToToday: 'Voltar para hoje',
  ok: 'Ok',
  clear: 'Limpar',
  month: 'M??s',
  year: 'Ano',
  timeSelect: 'Selecionar hora',
  dateSelect: 'Selecionar data',
  monthSelect: 'Escolher m??s',
  yearSelect: 'Escolher ano',
  decadeSelect: 'Escolher d??cada',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: false,
  previousMonth: 'M??s anterior (PageUp)',
  nextMonth: 'Pr??ximo m??s (PageDown)',
  previousYear: 'Ano anterior (Control + esquerda)',
  nextYear: 'Pr??ximo ano (Control + direita)',
  previousDecade: 'D??cada anterior',
  nextDecade: 'Pr??xima d??cada',
  previousCentury: 'S??culo anterior',
  nextCentury: 'Pr??ximo s??culo',
  shortWeekDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S??b'],
  shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_pt_BR.js":
/*!*************************************************************!*\
  !*** ./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_pt_BR.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_luoqiaoqiao_Desktop_mapbox_demo_node_modules_antd_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/antd/es/locale/pt_BR */ "./node_modules/antd/es/locale/pt_BR.js");

/* harmony default export */ __webpack_exports__["default"] = (_Users_luoqiaoqiao_Desktop_mapbox_demo_node_modules_antd_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ })

}]);