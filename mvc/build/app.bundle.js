/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Контроллер (Controller) интерпретирует действия пользователя, оповещая модель о необходимости изменений[

var ControllerMain = exports.ControllerMain = function () {
    function ControllerMain(listall, idElInput, view, model, idalldel, idallcomplite) {
        _classCallCheck(this, ControllerMain);

        this.listall = listall;
        this.idElInput = idElInput;
        this.view = view;
        this.model = model;

        this.idalldel = idalldel;
        this.idallcomplite = idallcomplite;
        self = this;
    }

    _createClass(ControllerMain, [{
        key: "init",
        value: function init() {
            console.log("init");
            var kinput = document.getElementById(this.idElInput);
            kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;
            var lastTime = Date.now();

            function handle(e) {
                if (e.keyCode == 13 && Date.now() - lastTime > 550) {
                    self.addItemToList();
                    lastTime = Date.now();
                }
            }
            self.addEventDelAllAndCompliteAll();
            // self.loadData();
        }
    }, {
        key: "addItemToList",
        value: function addItemToList() {
            var kinput = document.getElementById(this.idElInput);
            var id = this.listall.length;
            this.listall.push({ "id": this.listall.length, "text": kinput.value, "end": false });
            console.log(this.listall);
            this.view.veiwAllList();
            self.addEventDel();
            self.addEventDel(id);
            this.model.saveData();
            kinput.value = "";
        }
    }, {
        key: "addEventDel",
        value: function addEventDel() {
            this.listall.forEach(function (el) {
                var delid = "delbtn_" + el.id;
                var delbtn = document.getElementById(delid);
                // console.log(delbtn);
                delbtn.onclick = function (event) {
                    var id = event.target.attributes['idn'].value;
                    self.delElFromList(id);
                };
            });
        }
    }, {
        key: "addEventComplite",
        value: function addEventComplite() {
            this.listall.forEach(function (el) {
                var delid = "complid_" + el.id;
                var delbtn = document.getElementById(delid);
                // console.log(delbtn);
                delbtn.onclick = function (event) {
                    var id = event.target.attributes['idn'].value;
                    self.compliteEl(id);
                };
            });
        }
    }, {
        key: "addEventDelAllAndCompliteAll",
        value: function addEventDelAllAndCompliteAll() {
            var delallbtn = document.getElementById(this.idalldel);
            delallbtn.onclick = function (event) {
                self.delAll();
            };
            var compliteabtn = document.getElementById(this.idallcomplite);
            compliteabtn.onclick = function (event) {
                self.completeAllList();
            };
        }
    }, {
        key: "delElFromList",
        value: function delElFromList(idDel) {
            var tempList = [];
            this.listall.forEach(function (el) {
                if (el.id != idDel) {
                    tempList.push(el);
                }
            });
            this.listall = tempList;
            console.log(this.listall);
            this.model.listall = this.listall;
            this.view.listall = this.listall;
            this.model.saveData();
            this.view.veiwAllList();
            self.addEventDel();
            self.addEventComplite();
        }
    }, {
        key: "compliteEl",
        value: function compliteEl(idel) {

            var tempList = [];
            this.listall.forEach(function (el) {
                if (el.id == idel) {
                    if (el.end == true) {
                        el.end = false;
                    } else {
                        el.end = true;
                    }
                }
            });
            console.log(this.listall);
            this.model.listall = this.listall;
            this.view.listall = this.listall;
            this.model.saveData();
            this.view.veiwAllList();
            self.addEventDel();
            self.addEventComplite();
        }
    }, {
        key: "delAll",
        value: function delAll() {
            this.listall = [];
            this.model.listall = this.listall;
            this.view.listall = this.listall;
            this.model.saveData();
            this.view.veiwAllList();
        }
    }, {
        key: "completeAllList",
        value: function completeAllList() {
            this.listall.forEach(function (el) {
                el.end = true;
            });
            this.model.listall = this.listall;
            this.view.listall = this.listall;
            this.model.saveData();
            this.view.veiwAllList();
            self.addEventDel();
            self.addEventComplite();
        }
    }]);

    return ControllerMain;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//Модель (Model) предоставляет данные и реагирует на команды контроллера, изменяя свое состояние[1].


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var modelMain = exports.modelMain = function () {
    function modelMain(listall) {
        _classCallCheck(this, modelMain);

        this.listall = listall;
        self = this;
    }

    _createClass(modelMain, [{
        key: "loadData",
        value: function loadData() {
            console.log("loaddata");
            var sObj = localStorage.getItem("todolist");
            if (sObj != null) {
                var datain = JSON.parse(sObj);
                this.listall = datain.slice(0);

                //////////////////////
                // self.veiwAllList();
            }
        }
    }, {
        key: "saveData",
        value: function saveData() {
            console.log("save");
            console.log(this.listall);
            var sObj = JSON.stringify(this.listall);
            localStorage.removeItem("todolist");
            localStorage.setItem("todolist", sObj);
        }
    }]);

    return modelMain;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Представление (View) отвечает за отображение данных модели пользователю, реагируя на изменения модели[1].


var viewMain = exports.viewMain = function () {
    function viewMain(listall, idElList) {
        _classCallCheck(this, viewMain);

        this.listall = listall;
        this.idElList = idElList;
        this.delBtnEl = "del";
    }

    _createClass(viewMain, [{
        key: "veiwAllList",
        value: function veiwAllList() {
            var _this = this;

            console.log(this.listall);
            var list = document.getElementById(this.idElList);
            var listnow = [];
            listnow = this.listall.slice(0);
            listnow = listnow.reverse();
            var el = "";
            listnow.forEach(function (element) {
                var classCss = "complite";
                if (element.end == false) {
                    classCss = "nocomplite";
                }
                el = el + "<div id = 'item_" + element.id + "'  class='" + classCss + "'> <span class='listtext' idn='" + element.id + "' id='complid_" + element.id + "' >  " + element.text + "</span> <a id='delbtn_" + element.id + "' idn = '" + element.id + "' href='#'  class='" + _this.delBtnEl + "'>Удалить</a></div>";
            });
            list.innerHTML = el;
            /////////////////////////////////////

            // self.saveData();
        }
    }]);

    return viewMain;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _controller = __webpack_require__(0);

var _model = __webpack_require__(1);

var _view = __webpack_require__(2);

var listall = [];
var idinput = "todo";
var idlist = "list";
var iddelall = "delAll";
var idcompliteall = "compliteAll";

var todo_list_M = new _model.modelMain(listall);
todo_list_M.loadData();
var todo_list_v = new _view.viewMain(todo_list_M.listall, idlist);
var todo_list_C = new _controller.ControllerMain(todo_list_M.listall, idinput, todo_list_v, todo_list_M, iddelall, idcompliteall);
todo_list_C.init();
todo_list_v.veiwAllList();

todo_list_C.addEventDel();
todo_list_C.addEventComplite();

/***/ })
/******/ ]);